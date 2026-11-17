import LegalPage, { createLegalMetadata } from "../components/legal-page";
import { legalDocuments } from "../components/legal-documents";

export const metadata = createLegalMetadata(legalDocuments.terms);

export default function TerminosYCondiciones() {
  return <LegalPage document={legalDocuments.terms} />;
}
