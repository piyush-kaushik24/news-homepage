import { web3Desktop, web3Mobile } from "../assets";

export default function Hero() {
  return (
    <section className="space-y-6 md:flex-2 ">
      <div>
        <picture>
          <source srcSet={web3Desktop} media="(min-width : 768px)" />
          <img src={web3Mobile} alt="" />
        </picture>
      </div>
      <div className="md:flex space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold ">
          The Bright Future of Web 3.0?
        </h1>
        <div className="space-y-4 md:space-y-15">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>

          <button className="bg-soft-red text-lg font-bold px-6 py-2 hover:bg-very-dark-blue hover:text-white ">
            <a href="/article">READ MORE</a>
          </button>
        </div>
      </div>
    </section>
  );
}
