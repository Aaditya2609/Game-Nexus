
const Sort = (array,value) => {
    if(value==="lowToHigh")
    {
        const filteredArray=array.filter((a,b)=>a.price-b.price);
        return filteredArray;
    }
    else if(value==="highToLow")
    {
        const filteredArray=array.filter((a,b)=>b.price-a.price);
        console.log("here")
        return filteredArray;
    }
};

export default Sort;