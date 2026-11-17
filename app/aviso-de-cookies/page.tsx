import LegalPage, { createLegalMetadata } from "../components/legal-page";
import { legalDocuments } from "../components/legal-documents";

export const metadata = createLegalMetadata(legalDocuments.cookies);

export default function AvisoDeCookies() {
  return <LegalPage document={legalDocuments.cookies} />;
}
