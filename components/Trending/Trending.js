import TrendingItem from "../TrendingItem/TrendingItem";
import TrendingStyles from "./Trending.module.scss";
export default function Trending({ articles }) {
  const next = () => {
    let articleLength = articles.length;
    let windowWidth = document.getElementsByClassName(TrendingStyles.list);
    console.log(windowWidth);
  };
  return (
    <section className={TrendingStyles.trending}>
      <h2>
        Trending <span> {">"}</span>
      </h2>
      <section>
        <div className={TrendingStyles.list}>
          {articles.map((article) => {
            // console.log("...............", article);
            return (
              <div className={TrendingStyles.hidden}>
                <TrendingItem article={article} key={article.url} />
              </div>
            );
          })}{" "}
        </div>
        <div className={TrendingStyles.next}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </section>
    </section>
  );
}
