import React, { useState } from 'react';

// the shape of the function props passed to AddTodo Component
type AddTodoProps = {
  addTodo: (newTitle: string) => void;
};

export function AddTodo(props: AddTodoProps) {
  const { addTodo } = props;

  const [todoTitle, setTodoTitle] = useState('');

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setTodoTitle(e.target.value);
  }

  function onClickAdd(): void {
    if (todoTitle.replace(/^\s+|\s+$/g, '') === '') {
      return;
    }
    addTodo(todoTitle);
    setTodoTitle('');
  }

  return (
    <div className="add-todo">
      <span className="add-todo-prefix">👉</span>
      <input
        type="text"
        placeholder="I need to ..."
        value={todoTitle}
        onChange={onChange}
      />
      <button className="add-todo-add" onClick={onClickAdd}>
        Add
      </button>
    </div>
  );
}
