import React, { createContext, useContext, useEffect, useReducer, } from "react";
import { ProductReducer } from "../reducers/ProductReducer";
import { productService } from "../services/Product/ProductService";
import { allCategoryService } from "../services/Category/AllCategory";
const ProductContext=createContext()
export const useProduct=()=>useContext(ProductContext);

export function ProductProvider({children}){
    const [stateProduct, dispatchProduct] = useReducer(ProductReducer, {
        loading: false,
        product: [],
        category: [],
        clickedCategory:[],
      });

      useEffect(() => {
        productService(dispatchProduct)
        allCategoryService(dispatchProduct)
      }, [])

return(
    <div>
        <ProductContext.Provider value={{stateProduct,dispatchProduct}}>
            {children}
        </ProductContext.Provider>
    </div>
)
}