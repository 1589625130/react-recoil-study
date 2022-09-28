import { List, Button } from "antd";
import { useTodoList } from "../../../model";
import ButtonEditTodo from "./ButtonEditTodo";
import ButtonRemoveTodo from "./ButtonRemoveTodo";

const TodoList = () => {
  const todoList = useTodoList();

  return (
    <List
      dataSource={todoList}
      renderItem={(todo) => (
        <List.Item
          actions={[
            <ButtonEditTodo todo={todo} />,
            <ButtonRemoveTodo id={todo.id} />,
          ]}
        >
          <List.Item.Meta title={todo.name} description={todo.text} />
        </List.Item>
      )}
    />
  );
};

export default TodoList;
