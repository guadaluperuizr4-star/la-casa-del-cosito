import LegalPage, { createLegalMetadata } from "../components/legal-page";
import { legalDocuments } from "../components/legal-documents";

export const metadata = createLegalMetadata(legalDocuments.shipping);

export default function PoliticaDeEnvios() {
  return <LegalPage document={legalDocuments.shipping} />;
}
