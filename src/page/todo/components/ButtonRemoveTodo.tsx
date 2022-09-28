import { Button, Popconfirm, message } from "antd";
import { FC } from "react";
import { useRemoveTodoAtom } from "../../../model";

interface ButtonRemoveTodoProps {
  id: string;
}

const ButtonRemoveTodo: FC<ButtonRemoveTodoProps> = ({ id }) => {
  const remove = useRemoveTodoAtom();

  const onConfirm = () => {
    remove(id);
    message.success("删除成功");
  };

  return (
    <Popconfirm
      placement="top"
      title="是否确定删除"
      okText="是"
      cancelText="否"
      onConfirm={onConfirm}
    >
      <Button danger type="text">
        删除
      </Button>
    </Popconfirm>
  );
};

export default ButtonRemoveTodo;
