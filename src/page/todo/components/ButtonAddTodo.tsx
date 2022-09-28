import { Button } from "antd";
import { useOpenAddTodoModal } from "../model";
const ButtonAddTodo = () => {
  const open = useOpenAddTodoModal();

  return (
    <Button type="primary" onClick={open}>
      Add Todo
    </Button>
  );
};

export default ButtonAddTodo;
