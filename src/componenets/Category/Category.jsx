import "./Styles.css"
import { useNavigate } from "react-router-dom";
import { useFilter } from "../../contexts/FilterContext";
import { useProduct } from "../../contexts/ProductContext";


export function Category()
{
    const{stateProduct}=useProduct();
    const {dispatchFilter}=useFilter();
    const navigate=useNavigate();
    const handleClick=(item)=>
    {   
        const action = {
            type: "SET_CATEGORY_FILTER",
            payload: item
          };
        dispatchFilter(action);
        navigate("/productlist")
    }

return(
    <div>
        <h1 id="category-heading">Shop By Category</h1>
        <div className="category-container">
        {stateProduct.category?.map((item)=>{
            return(<div className="category-card" key={item._id}onClick={()=>handleClick(item.categoryName)}>
                <img className="category-card-image" src={item.url} alt="category"/>
                <div className="Category-card-text-overlay">
                <h2>{item.categoryName}</h2>
                    <p>{item.description}</p>
                </div>
                
            </div>)
        })}
        </div>
    </div>
)
}