import BelowArticle from "./components/below-article";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import NewArticle from "./components/new-article";

export default function App() {
  return (
    <div className="w-[90%] max-w-7xl mx-auto">
      <Header />
      <main className="space-y-10">
        <div className="space-y-10 md:flex md:gap-4 ">
          <Hero />
          <NewArticle />
        </div>
        <BelowArticle />
      </main>
      <Footer />
    </div>
  );
}
