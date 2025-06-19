import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHttp } from "../../hooks/http";
import type { IPublication } from "../../types/publication.interface";

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

      if (result) {
        setPublicationDetail(result[0]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetDetailPublication();
  }, []);

  if (loading) return <div>loading...</div>;

  return <div>detail publication: {publicationDetail?.file}</div>;
}
