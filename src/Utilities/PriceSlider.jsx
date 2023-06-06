
const Slider = (array,value) => {
    const filteredArray=array.filter(item=>item.price<value)
    return filteredArray;
};

export default Slider;
