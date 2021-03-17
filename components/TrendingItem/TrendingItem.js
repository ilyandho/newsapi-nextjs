import TrendingItemStyles from "./TrendingItem.module.scss";

export default function TrendingItem({ article }) {
  return (
    <div className={TrendingItemStyles.item}>
      <img src={article.urlToImage}></img>
      <h5>{article.title} </h5>
    </div>
  );
}
