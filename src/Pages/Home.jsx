
import Carousel from "../componenets/Carousel/carousel";
import { Category } from "../componenets/Category/Category";

export function Home()
{
   const images=[
    {
        url:"https://images7.alphacoders.com/111/1117602.jpg",
        name:"Assassin's Creed Valhalla",
        description:"Become Eivor, a legendary Viking raider, and lead your clan to settle in the rich lands of England's Dark Ages in this open-world action RPG.",
        category:"Action"
    },
    {
        url:"https://images8.alphacoders.com/958/958091.jpg",
        name:"Red Dead Redemption 2",
        description:"Immerse yourself in an epic tale set in America's unforgiving heartland. Play as Arthur Morgan, a notorious outlaw, and experience the fading of the Wild West era.",
        category:"Action"
    },
    {
        url:"https://images6.alphacoders.com/111/1118544.jpg",
        name:"Cyberpunk 2077",
        description:"Enter the dystopian Night City as V, a mercenary outlaw equipped with cybernetic enhancements. Navigate through a sprawling metropolis, make choices, and uncover the dark secrets of the future",
        category:"Action"
    },
   ]

    return(
        <div>
            <h2 style={{fontSize:"3rem"}}>Featured Products</h2>
            <Carousel images={images} />
            <Category/>
        </div>
    )
}