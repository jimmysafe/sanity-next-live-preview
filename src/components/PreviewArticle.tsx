import { usePreview } from "../../sanity/lib/preview";
import Article from "@/components/Article";
import Link from "next/link";

interface PreviewArticleProps {
  query: string;
  queryParams: { slug: string | string[] };
}

const PreviewArticle = ({ query, queryParams }: PreviewArticleProps) => {
  const data = usePreview(null, query, queryParams);

  return (
    <>
      <Article article={data} />
      <Link
        className="bg-blue-500 p-6 text-white font-bold fixed bottom-0 right-0"
        href="/api/exit-preview"
      >
        Exit Preview
      </Link>
    </>
  );
};

export default PreviewArticle;
