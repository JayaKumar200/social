import {createSlice} from '@reduxjs/toolkit';

const initialState={
	follower:180,
}

const FollowSlice= createSlice({
	name:'follower',
	initialState, 
	reducers:{
     setFollow:(state,action)=>{
     	state.follower +=1;
     },
     setDisconnect:(state,action)=>{
     	state.follower-=1;
     }
		}
})

export const {setFollow,setDisconnect} = FollowSlice.actions;
export default FollowSlice.reducer;