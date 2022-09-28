import { PageContainer } from "@ant-design/pro-components";
import TodoModal from "./components/TodoModal";
import ButtonAddTodo from "./components/ButtonAddTodo";
import TodoList from "./components/TodoList";

const TodoPage = () => {
  return (
    <PageContainer>
      <ButtonAddTodo />
      <TodoModal />
      <TodoList />
    </PageContainer>
  );
};

export default TodoPage;
