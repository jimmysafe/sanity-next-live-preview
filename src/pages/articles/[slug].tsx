import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import { Article } from "../../../sanity/generated";
import Head from "next/head";
import { PreviewSuspense } from "next-sanity/preview";
import { lazy } from "react";
import ArticleComponent from "@/components/Article";

const PreviewArticle = lazy(() => import("@/components/PreviewArticle"));

const query = groq`*[_type == "article" && slug.current == $slug][0]{
  title,
  description,
  banner,
  content,
}`;

export const getServerSideProps = async ({
  params,
  preview = false,
}: GetServerSidePropsContext) => {
  const queryParams = { slug: params?.slug ?? `` };

  if (preview) {
    return { props: { preview, queryParams } };
  }

  const article = await client.fetch<Article>(query, queryParams);

  return {
    props: {
      preview,
      article,
      queryParams,
    },
  };
};

export default function Page({
  article,
  preview,
  queryParams,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (preview) {
    return (
      <PreviewSuspense fallback="Loading...">
        <PreviewArticle query={query} queryParams={queryParams} />
      </PreviewSuspense>
    );
  }
  return (
    <>
      <Head>
        <title>{article?.title}</title>
      </Head>

      <ArticleComponent article={article} />
    </>
  );
}
