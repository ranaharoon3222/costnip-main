import { action, createStore } from 'easy-peasy';
import { persist } from 'easy-peasy';

export const store = createStore(
  persist(
    {
      results: [],
      user: {},
      saveUser: action((state, payload) => {
        state.user = payload;
      }),
      removeUser: action((state, payload) => {
        state.user = {};
      }),
      saveResults: action((state, payload) => {
        state.results = payload;
      }),
    },
    {
      storage: 'localStorage',
    }
  )
);
