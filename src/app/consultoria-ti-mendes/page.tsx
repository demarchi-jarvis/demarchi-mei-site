import type { Metadata } from "next";
import CidadePageTemplate, { buildMetadata } from "@/components/CidadePage";
import { CIDADES } from "@/lib/data";

export const revalidate = 60;

const cidade = CIDADES.find((c) => c.slug === "mendes")!;

export const metadata: Metadata = buildMetadata(cidade);

export default function Page() {
  return <CidadePageTemplate cidade={cidade} />;
}
