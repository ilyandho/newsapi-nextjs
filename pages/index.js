import Header from "../components/Header/Header";
import Head from "next/head";
import { getAllArticles } from "./api/newsapi";
import Hero from "../components/Hero/Hero";
import Trending from "../components/Trending/Trending";

export default function Home({ articles, error }) {
  console.log(articles);
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossorigin="anonymous"
        />
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

    const withContent = results.filter((res) => {
      // console.log(res);
      // if (res[author] === undefined) console.log(res);
      return Object.keys(res).includes("content");
    });

    const withContentAndAuthor = withContent.filter((res) => {
      return res.author !== null;
    });
    if (withContentAndAuthor.error) {
      return {
        props: {
          error: withContentAndAuthor,
        },
      };
    }
    return {
      props: {
        articles: withContentAndAuthor,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
