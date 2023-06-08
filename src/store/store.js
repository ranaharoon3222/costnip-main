import { action, createStore } from 'easy-peasy';

export const store = createStore({
    results:[],
    saveResults: action((state, payload) => {
        state.results = payload;
      }),


//   todos: [],
//   count: 1,
//   addTodo: action((state, payload) => {
//     state.todos.push({ text: payload.name, done: false });
//   }),
});
