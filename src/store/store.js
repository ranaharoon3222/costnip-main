import { action, createStore } from 'easy-peasy';

export const store = createStore({
  results: [],
  saveResults: action((state, payload) => {
    state.results = payload;
  }),
});
