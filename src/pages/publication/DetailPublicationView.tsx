import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHttp } from "../../hooks/http";
import type { IPublication } from "../../types/publication.interface";
import { appConfigs } from "../../configs/appConfigs";

export default function DetailPublicationView() {
  const { publicationSlug } = useParams();
  const { handleGetRequest } = useHttp();
  const [publicationDetail, setPublicationDetail] = useState<IPublication>();
  const [loading, setLoading] = useState(false);

  const handleGetDetailPublication = async () => {
    try {
      setLoading(true);
      const result = (await handleGetRequest({
        path: `/buku-digital/detail/${publicationSlug}`,
      })) as IPublication[];

      if (result?.length > 0) {
        setPublicationDetail(result[0]);
      }
    } catch (error) {
      console.error("Error fetching publication detail:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetDetailPublication();
  }, [publicationSlug]);

  if (loading) return <div>Loading...</div>;
  if (!publicationDetail) return <div>Data tidak ditemukan</div>;

  return (
    <div>
      <h2 className="mb-2">{publicationDetail.buku}</h2>

      {publicationDetail.file ? (
        <div>
          <div className="border border-gray-300 rounded-md p-5">
            <iframe
              src={`${appConfigs.apiUrl}/${formatTextToUrlPath(
                publicationDetail.file
              )}`}
              title="PDF Preview"
              style={{ width: "100%", height: "600px", border: "none" }}
            />
          </div>
        </div>
      ) : (
        <p>File tidak tersedia</p>
      )}
    </div>
  );
}

function formatTextToUrlPath(path: string): string {
  let cleanedPath = path.replace("handler/http/", "");
  cleanedPath = cleanedPath.replace(/\\/g, "/");
  cleanedPath = cleanedPath.replace(/\/\/+/g, "/");

  const encodedPath = cleanedPath
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");

  return encodedPath;
}
