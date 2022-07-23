type ThisProps = {
  isEditing: boolean;
  done: boolean;
  title: string;
  editedTodoTitle: string;
  setEditedTodoTitle: React.Dispatch<React.SetStateAction<string>>;
};

export function TodoTitle(props: ThisProps) {
  const { isEditing, done, title, editedTodoTitle, setEditedTodoTitle } = props;

  function onTodoTitleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newTodoTitle = e.target.value;
    setEditedTodoTitle(newTodoTitle);
  }

  return (
    <div className="todo-title">
      <span>{done ? `✔️` : `❌`}</span>
      {isEditing ? (
        <input
          className="edit-todo"
          type="text"
          value={editedTodoTitle}
          onChange={onTodoTitleChange}
        />
      ) : (
        <div className={`${done && 'todo-done'}`}>{title}</div>
      )}
    </div>
  );
}
