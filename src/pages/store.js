import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

const Store = () => {
  const todos = useStoreState((state) => state.todos);
  const addTodo = useStoreActions((action) => action.addTodo);
  return (
    <div>
      <button onClick={() => addTodo({name: 'Umr inf'})}>Add Todo</button>
      {todos.map((todo,i) => (
        <li key={i}>{todo?.text}</li>
      ))}
    </div>
  );
};

export default Store;
