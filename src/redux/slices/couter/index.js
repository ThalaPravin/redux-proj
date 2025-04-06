import { createSlice } from "@reduxjs/toolkit";

export const couterSlice = createSlice({
    initialState : {
        count:0,
        todos: [
            {
                id: 0,
                title: "go to gym",
                completed: false
            }
        ]
    },
    name :'count' ,
    reducers:{
        increment : (state,action)=>  {
            state.count +=action.payload.three
        },
        decrement : (state, action)=>{
            state.count -=1;
        },
        add: (state, action) => {
            state.todos.push(action.payload.todo);
        },
        remove: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id != action.payload.id);
        },
        markDone: (state, action) => {
            state.todos = state.todos.map(todo => todo.id == action.payload.id ? {...todo, completed: !todo.completed} : todo);
        },
        
    }

});

export const {increment,decrement, add, remove, markDone} = couterSlice.actions;
export default couterSlice.reducer;