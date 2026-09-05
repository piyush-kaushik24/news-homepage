import { newArticles } from "../data/data";
export default function NewArticle() {
  return (
    <aside
      className="bg-very-dark-blue space-y-6 
     px-6 md:flex-1"
    >
      <h2 className="text-soft-orange text-3xl md:text-5xl font-bold pt-6">New</h2>
      <ul>
        {newArticles.map((article) => (
          <li key={article.title} className="py-6 space-y-4  border-b-2 border-b-dark-grayish-blue last:border-0">
            <h3 className="text-off-white font-bold text-xl md:text-2xl hover:text-soft-orange ">
              <a href="#">{article.title}</a>
            </h3>
            <p className="text-grayish-blue">{article.extract}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
