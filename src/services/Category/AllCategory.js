import axios from "axios";

export const allCategoryService=async(dispatchProduct)=>{
    try{
        const res =await axios({
            method: 'GET',
            url: '/api/categories',
          });
          if(res.status===200)
          {
            const data=await res.data.categories
            dispatchProduct({
                type: "GET_CATEGORY_LOADED",
                payload: data,
              });
        }
    }
    catch(e)
    {
        console.error(e)
    }
}