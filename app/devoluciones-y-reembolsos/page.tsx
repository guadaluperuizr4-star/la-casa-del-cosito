import LegalPage, { createLegalMetadata } from "../components/legal-page";
import { legalDocuments } from "../components/legal-documents";

export const metadata = createLegalMetadata(legalDocuments.returns);

export default function DevolucionesYReembolsos() {
  return <LegalPage document={legalDocuments.returns} />;
}
