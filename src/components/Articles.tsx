import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { Article, SanityBlock } from "../../sanity/generated";

interface ArticlesProps {
  articles: Article[];
}

const Articles = ({ articles }: ArticlesProps) => {
  return (
    <div className="max-w-2xl mx-auto my-20">
      {articles?.map((article) => (
        <Link key={article._id} href={`/articles/${article.slug?.current}`}>
          <article className="shadow-lg p-10 rounded-md bg-teal-200">
            <h3 className="text-lg font-bold mb-2">{article.title}</h3>
            <PortableText value={article.description as SanityBlock[]} />
          </article>
        </Link>
      ))}
    </div>
  );
};

export default Articles;
