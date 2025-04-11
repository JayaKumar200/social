import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	count:0,
}

const PostCount = createSlice({
	name:'count',
	initialState,
	reducers:{
		setIncrease:(state,action)=>{
			state.count += 1;
		},
		setDescrease:(state,action)=>{
			state.count -= 1;
		},
	}
});

export const {setIncrease,setDescrease} = PostCount.actions;
export default PostCount.reducer;