import HeroStyles from "./Hero.module.scss";

export default function Hero({ article }) {
  if (!article) <p>loading ... </p>;

  return (
    <section className={HeroStyles.hero}>
      <img src={article.urlToImage}></img>
      <div>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <a href={article.url} target="blank">
          Read more ...
        </a>
      </div>
    </section>
  );
}
