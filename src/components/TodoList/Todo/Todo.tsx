import { useState } from 'react';
import { TodoButtons } from './TodoButtons';
import { TodoTitle } from './TodoTitle';

type Todo3 = {
  id: string;
  title: string;
  done: boolean;
};
type TodoProps = {
  todo: Todo3;
  updateTodo: (id: string, newTodo: Todo3) => void;
  deleteTodo: (id: string) => void;
};
export function Todo(props: TodoProps) {
  const { todo, updateTodo, deleteTodo } = props;
  const { title, done } = todo;

  const [isEditing, setIsEditing] = useState(false);
  const [editedTodoTitle, setEditedTodoTitle] = useState(title);

  function onClickToggle() {
    const updatedTodo = { ...todo, done: !todo.done };
    updateTodo(todo.id, updatedTodo);
  }

  function onClickEdit() {
    setIsEditing(!isEditing);
  }

  function onClickDelete() {
    deleteTodo(todo.id);
  }

  function onClickDone() {
    const updatedTodo = { ...todo, title: editedTodoTitle };
    updateTodo(todo.id, updatedTodo);
    setIsEditing(false);
  }

  return (
    <div className="todo">
      <TodoTitle
        title={title}
        done={done}
        isEditing={isEditing}
        editedTodoTitle={editedTodoTitle}
        setEditedTodoTitle={setEditedTodoTitle}
      />
      <TodoButtons
        done={done}
        isEditing={isEditing}
        onClickToggle={onClickToggle}
        onClickEditOrDone={isEditing ? onClickDone : onClickEdit}
        onClickDelete={onClickDelete}
      />
    </div>
  );
}
