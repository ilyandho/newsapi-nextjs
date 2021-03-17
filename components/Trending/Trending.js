import TrendingItem from "../TrendingItem/TrendingItem";
import TrendingStyles from "./Trending.module.scss";
export default function Trending({ articles }) {
  return (
    <section className={TrendingStyles.trending}>
      <h2>
        Trending <span> {">"}</span>
      </h2>
      <section className={TrendingStyles.list}>
        {articles.map((article) => {
          console.log("...............", article);
          return <TrendingItem article={article} />;
        })}
      </section>
    </section>
  );
}
