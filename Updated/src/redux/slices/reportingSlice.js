import { createSlice } from "@reduxjs/toolkit";

const reportingSlice=createSlice({
    name:"reporting",
    initialState:{
        reportingData:[],
        Loading:true,
        isSaved:false,
        activeTabKey:null,
        formData: {},
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
        },
        setFormData: (state, action) => {
            const { pillarName, questionId, inputId, value } = action.payload;
            if (!state.formData[pillarName]) {
              state.formData[pillarName] = {};
            }
            if (!state.formData[pillarName][questionId]) {
              state.formData[pillarName][questionId] = {};
            }
            state.formData[pillarName][questionId][inputId] = value;
          }, 
    }
})

export const {setreportingData,setactiveTabKey,setLoading,setisSaved,setFormData}=reportingSlice.actions;
export default reportingSlice.reducer;