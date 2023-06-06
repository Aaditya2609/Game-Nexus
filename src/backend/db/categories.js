import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Action",
    url:"https://wallpapercave.com/wp/wp2621389.jpg",
    description:
      "Fast-paced games with intense combat and physical challenges.",
  },
  {
    _id: uuid(),
    categoryName: "Adventure",
    url:"https://p4.wallpaperbetter.com/wallpaper/37/96/888/uncharted-4-jump-adventure-games-games-wallpaper-preview.jpg",
    description:
      "Immersive games that focus on exploration and storytelling.",
  },
  {
    _id: uuid(),
    categoryName: "RPG",
    url:"https://c4.wallpaperflare.com/wallpaper/951/583/798/fantasy-art-warrior-dark-souls-iii-dark-souls-wallpaper-preview.jpg",
    description:
      "Games that allow players to create and develop a character while embarking on quests and making impactful choices.",
  },
  {
    _id: uuid(),
    categoryName: "Strategy",
    url:"https://p4.wallpaperbetter.com/wallpaper/306/301/73/gsc-game-world-computer-game-the-real-time-strategy-the-napoleonic-wars-wallpaper-preview.jpg",
    description:
      "Games that require strategic thinking, planning, and resource management to achieve victory.",
  },
  {
    _id: uuid(),
    categoryName: "Sports",
    url:"https://p4.wallpaperbetter.com/wallpaper/196/606/477/champions-league-stadium-football-sports-game-soccer-stadium-wallpaper-preview.jpg",
    description:
      "Games that simulate real-life sports and allow players to participate in various sports activities.",
  },
];
