import { createSlice } from "@reduxjs/toolkit";

const reportingSlice=createSlice({
    name:"reporting",
    initialState:{
        reportingData:[],
        Loading:true,
        isSaved:false,
        activeTabKey:null
    },
    reducers:{
        setactiveTabKey(state,action){
            state.activeTabKey=action.payload;
        },
        setreportingData(state,action){
            state.reportingData=action.payload;
            const energyTab=action.payload.find((data)=>data.pillarName === "Energy");
            state.activeTabKey= energyTab ? energyTab.pillarName : action.payload[0].pillarName;
            state.Loading=false;
        },
        setLoading(state,action)
        {
            state.Loading=action.payload;
        },
        setisSaved(state,action)
        {
            state.isSaved=action.payload;
        }
    }
})

export const {setreportingData,setactiveTabKey,setLoading,setisSaved}=reportingSlice.actions;
export default reportingSlice.reducer;