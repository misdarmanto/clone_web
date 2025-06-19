import { useParams } from "react-router-dom";

export default function DetailPublicationView() {
  const { publicationId } = useParams();
  console.log(publicationId);
  return <div>detail publication</div>;
}
