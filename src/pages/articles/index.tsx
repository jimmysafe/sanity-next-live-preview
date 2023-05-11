import { Article } from "../../../sanity/generated";
import Articles from "@/components/Articles";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import { PreviewSuspense } from "next-sanity/preview";
import { lazy } from "react";

const PreviewArticles = lazy(() => import("@/components/PreviewArticles"));

const query = groq`*[_type == "article" && defined(slug.current)]{
  _id,
  title,
  slug,
  description
}`;

export const getServerSideProps = async ({
  preview = false,
}: GetServerSidePropsContext) => {
  if (preview) {
    return { props: { preview } };
  }

  const articles = await client.fetch<Article[]>(query);

  return { props: { preview, articles } };
};

const ArticlesPage = ({
  articles,
  preview,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (preview)
    return (
      <PreviewSuspense fallback="Loading...">
        <PreviewArticles query={query} />
      </PreviewSuspense>
    );

  return <Articles articles={articles ?? []} />;
};

export default ArticlesPage;
