import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */



export const products = [
  {
    _id: uuid(),
    categoryName: "Action",
    name: "DOOM Eternal",
    url:"https://images7.alphacoders.com/111/1117602.jpg",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/782330/header.jpg?t=1661971606",
    description: "Experience the ultimate combination of speed and power as you battle through dimensions to stop the forces of Hell from devouring Earth.",
    studio: "id Software",
    rating: 4.5,
    price: 1800,
    originalPrice:2400,
    discount:33
  },
  {
    _id: uuid(),
    categoryName: "Action",
    name: "Assassin's Creed Valhalla",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/2208920/header.jpg?t=1671135934",
    description: "Become Eivor, a legendary Viking raider, and lead your clan to settle in the rich lands of England's Dark Ages in this open-world action RPG.",
    studio: "Ubisoft Montreal",
    rating: 4.0,
    price: 3000,
    originalPrice:3300,
    discount:10
  },
  {
    _id: uuid(),
    categoryName: "Action",
    name: "Red Dead Redemption 2",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1671485009",
    description: "Immerse yourself in an epic tale set in America's unforgiving heartland. Play as Arthur Morgan, a notorious outlaw, and experience the fading of the Wild West era.",
    studio: "Rockstar Games",
    rating: 5,
    price: 3200,
    originalPrice:6400,
    discount:50
  },
  {
    _id: uuid(),
    categoryName: "Action",
    name: "Cyberpunk 2077",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg?t=1680026109",
    description: "Enter the dystopian Night City as V, a mercenary outlaw equipped with cybernetic enhancements. Navigate through a sprawling metropolis, make choices, and uncover the dark secrets of the future",
    studio: "CD Projekt RED",
    rating: 4,
    price: 3000,
    originalPrice:3300,
    discount:10
  },
  {
    _id: uuid(),
    categoryName: "Adventure",
    name: "The Witcher 3: Wild Hunt",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg?t=1675178392",
    description: "Embark on a dark fantasy adventure as Geralt of Rivia, a monster hunter. Traverse a vast open world, make impactful choices, and face formidable enemies.",
    studio: "CD Projekt",
    rating: 4,
    price: 800,
    originalPrice:2400,
    discount:66
  },
  {
    _id: uuid(),
    categoryName: "Adventure",
    name: "Uncharted 4: A Thief's End",
    thumbnail: "https://cdn.ndtv.com/tech/gadgets/uc_4_thiefs_end.jpg",
    description: "Join Nathan Drake on his greatest adventure yet. Explore exotic locations, solve intricate puzzles, and engage in thrilling third-person action.",
    studio: "Naughty Dog",
    rating: 3.5,
    price: 3000,
    originalPrice:3300,
    discount:10
  },
  {
    _id: uuid(),
    categoryName: "Adventure",
    name: "Life is Strange",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/319630/header.jpg?t=1662395426",
    description: "Play as Max Caulfield, a high school student with the ability to rewind time. Make choices that alter the narrative and unravel the mysteries of Arcadia Bay.",
    studio: "Dontnod Entertainment",
    rating: 2.5,
    price: 565,
    originalPrice:1130,
    discount:50
  },
  {
    _id: uuid(),
    categoryName: "Adventure",
    name: "The Last of Us Part I",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1888930/header.jpg?t=1683913536",
    description: "Embark on an emotional journey as Ellie in a post-apocalyptic world ravaged by infected creatures. Face challenging moral dilemmas, engage in intense combat, and survive at any cost.",
    studio: "Naughty Dog",
    rating: 4,
    price: 4500,
    originalPrice:6000,
    discount:33
  },
  {
    _id: uuid(),
    categoryName: "Strategy",
    name: "Civilization VI",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/289070/header.jpg?t=1680898825",
    description: "Lead your civilization from the Stone Age to the Information Age in this turn-based strategy game. Wage war, conduct diplomacy, and build a powerful empire.",
    studio: "Firaxis Games",
    rating: 2.5,
    price: 2500,
    originalPrice:5000,
    discount:50
  },
  {
    _id: uuid(),
    categoryName: "Strategy",
    name: "Total War: Warhammer II",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/594570/header.jpg?t=1668768624",
    description: "Engage in epic real-time battles and turn-based strategy as you lead one of the many factions in the Warhammer Fantasy Battles world.",
    studio: "Creative Assembly",
    rating: 3,
    price: 3000,
    originalPrice:3300,
    discount:10
  },
  {
    _id: uuid(),
    categoryName: "Strategy",
    name: "Stellaris",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/281990/header.jpg?t=1683647820",
    description: "Explore and conquer the vastness of space in this grand strategy game. Build your interstellar empire, interact with alien civilizations, and shape the fate of the galaxy.",
    studio: "Paradox Development Studio",
    rating: 3.5,
    price: 500,
    originalPrice:1500,
    discount:66
  },
  {
    _id: uuid(),
    categoryName: "Strategy",
    name: "Crusader Kings III",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1158310/header.jpg?t=1683820745",
    description: "Seize control of medieval dynasties in this grand strategy game. Expand your realm, manage diplomacy, conduct warfare, and ensure the legacy of your dynasty for generations to come.",
    studio: "Paradox Development Studio",
    rating:2,
    price: 1000,
    originalPrice:4000,
    discount:75
  },
  {
    _id: uuid(),
    categoryName: "RPG",
    name: "The Elder Scrolls V: Skyrim",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/489830/header.jpg?t=1650909796",
    description: "Embark on an epic journey in the vast world of Skyrim. Customize your character, slay dragons, and uncover the secrets of the ancient Elder Scrolls.",
    studio: "Bethesda Game Studios",
    rating:5,
    price: 1800,
    originalPrice:3600,
    discount:50
  },
  {
    _id: uuid(),
    categoryName: "RPG",
    name: "Fallout 4",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/377160/header.jpg?t=1650909928",
    description: "Enter the post-apocalyptic wasteland of Boston, where every decision you make affects the outcome. Build settlements, engage in intense combat, and shape the future of the Commonwealth.",
    studio: "Bethesda Game Studios",
    rating:1,
    price: 1000,
    originalPrice:3000,
    discount:66
  },
  {
    _id: uuid(),
    categoryName: "Sports",
    name: "FIFA 21",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1811260/header.jpg?t=1682117049",
    description: "Experience the thrill of football with realistic gameplay, authentic teams, and immersive modes. Compete online or take your favorite club to glory in career mode.",
    studio: "EA Vancouver",
    rating: 1.5,
    price: 1100,
    originalPrice:1650,
    discount:33
  },
  {
    _id: uuid(),
    categoryName: "Sports",
    name: "NBA 2K23",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1919590/header.jpg?t=1677540477",
    description: "Step onto the court and showcase your skills in the most realistic basketball simulation game. Play in NBA games, create your player, and dominate the league.",
    studio: "Visual Concepts",
    rating: 3,
    price: 600,
    originalPrice:1200,
    discount:50
  },
  {
    _id: uuid(),
    categoryName: "Sports",
    name: "Forza Horizon 4",
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg?t=1667326422",
    description: "Race through a stunning open-world recreation of Britain. Collect, modify, and drive over 450 cars in dynamic seasons and thrilling multiplayer races.",
    studio: "Playground Games",
    rating: 3.5,
    price: 1300,
    originalPrice:2600,
    discount:50
  }
]
