import gamingGrowth from "../assets/image-gaming-growth.jpg";
import retroPcs from "../assets/image-retro-pcs.jpg";
import topLaptops from "../assets/image-top-laptops.jpg";

export const navLinks = [
  { label: "Home", href: "#" },
  { label: "New", href: "#" },
  { label: "Popular", href: "#" },
  { label: "Trending", href: "#" },
  { label: "Categories", href: "#" },
];
export const newArticles = [
  {
    title: " Hydrogen VS Electric Cars",
    extract: "hydrogen-fueled cars ever catch up to EVs?",
  },

  {
    title: " The Downsides of AI Artistry",
    extract:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: " Is VC Funding Drying Up?",
    extract:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];
export const belowArticles = [
  {
    rank: "01",
    title: "Reviving Retro PCs",
    extract: "What happens when old PCs are given modern upgrades?",
    image: retroPcs,
  },
  {
    rank: "02",
    title: "Top 10 Laptops of 2022",
    extract: "Our best picks for various needs and budgets.",
    image: topLaptops,
  },
  {
    rank: "03",
    title: "The Growth of Gaming",
    extract: "How the pandemic has sparked fresh opportunities.",
    image: gamingGrowth,
  },
];
