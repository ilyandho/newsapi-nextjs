import Header from "../components/Header/Header";
import Head from "next/head";
import { getAllArticles } from "./api/newsapi";
import Hero from "../components/Hero/Hero";
import Trending from "../components/Trending/Trending";

export default function Home({ articles, error }) {
  if (!articles) <p>loading ... </p>;
  if (error) {
    console.log(error);
    return <p>An error occurred</p>;
  }

  const leadArticle = articles[0];
  return (
    <div>
      <Head>
        <title>NewsAp! | Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero article={leadArticle} />
      <Trending articles={articles} />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const results = await getAllArticles();

    if (results.error) {
      return {
        props: {
          error: results,
        },
      };
    }
    return {
      props: {
        articles: results?.articles,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
