import LegalPage, { createLegalMetadata } from "../components/legal-page";
import { legalDocuments } from "../components/legal-documents";

export const metadata = createLegalMetadata(legalDocuments.privacy);

export default function PoliticaDePrivacidad() {
  return <LegalPage document={legalDocuments.privacy} />;
}
