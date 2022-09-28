import { Button } from "antd";
import { useOpenEditTodoModal } from "../model";
import { todoState } from "../../../module";
import { FC } from "react";

interface ButtonEditTodoProps {
  todo: todoState;
}

const ButtonEditTodo: FC<ButtonEditTodoProps> = ({ todo }) => {
  const open = useOpenEditTodoModal();

  return (
    <Button
      type="link"
      onClick={() => {
        open(todo);
      }}
    >
      Edit Todo
    </Button>
  );
};

export default ButtonEditTodo;
