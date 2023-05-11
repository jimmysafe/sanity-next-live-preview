import Link from "next/link";
import Head from "next/head";

export default function Home({}) {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1>Hello! Homepage</h1>
      <Link href={"/articles"}>go to articles</Link>
    </>
  );
}
