import React, { createContext, useContext, useReducer, } from "react";
import { filterReducer } from "../reducers/FilterReducer";
const FilterContext=createContext()
export const useFilter=()=>useContext(FilterContext);

export function FilterProvider({children}){
    const [stateFilter, dispatchFilter] = useReducer(filterReducer,{
        priceFilter:"",
        categoryFilter:[],
        ratingFilter:0
      });


return(
    <div>
        <FilterContext.Provider value={{stateFilter,dispatchFilter}}>
            {children}
        </FilterContext.Provider>
    </div>
)
}