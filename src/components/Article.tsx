import { PortableText } from "@portabletext/react";
import { Article as IArticle, SanityBlock } from "../../sanity/generated";

interface ArticleProps {
  article: IArticle;
}

const Article = ({ article }: ArticleProps) => {
  return (
    <article className="my-20 max-w-2xl mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{article.title}</h1>
        <PortableText value={article.description as SanityBlock[]} />
      </div>
      <div className="mt-12">
        <PortableText value={article.content as SanityBlock[]} />
      </div>
    </article>
  );
};

export default Article;
