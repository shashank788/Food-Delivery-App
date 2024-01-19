import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
    name:"category",
    initialState : {
        category:"All",
    },
    reducer:{
        setCategory:(state,action)=>{
            state.category=action.payload;
        }
    }
})

export const {setCategory} = CategorySlice.actions;
export default CategorySlice.reducer;