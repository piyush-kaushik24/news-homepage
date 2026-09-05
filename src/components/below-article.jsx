import { belowArticles } from "../data/data";
export default function BelowArticle() {
  return (
    <section className="pb-6">
      <ul className="space-y-6 md:flex md:gap-6">
        {belowArticles.map((article) => (
          <li key={article.rank} className="flex items-center gap-6">
            <div>
              <img src={article.image} alt={article.title} className="w-50  object-cover " />
            </div>
            <div className="space-y-2">
              <h2 className="text-soft-red text-3xl font-bold">
                {article.rank}
              </h2>
              <h3 className="text-very-dark-blue font-extrabold hover:text-soft-red">
                {article.title}
              </h3>
              <p className="text-dark-grayish-blue">{article.extract}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
