import Link from "next/link";
import Articles from "@/components/Articles";
import { usePreview } from "../../sanity/lib/preview";

export default function PreviewArticles({ query }: { query: string }) {
  const data = usePreview(null, query);

  return (
    <>
      <Articles articles={data} />
      <Link
        className="bg-blue-500 p-6 text-white font-bold fixed bottom-0 right-0"
        href="/api/exit-preview"
      >
        Exit Preview
      </Link>
    </>
  );
}
