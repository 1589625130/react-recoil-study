import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { todoState } from "../module";

export const todoAtom = atom<Array<todoState>>({
  key: "todoAtom",
  default: [],
});

export const useSetTodoAtom = () => useSetRecoilState(todoAtom);

export const useAddTodoAtom = () => {
  const setTodo = useSetTodoAtom();
  return (todo: todoState) => setTodo((prev) => [...prev, todo]);
};

export const useRemoveTodoAtom = () => {
  const setTodo = useSetTodoAtom();
  return (id: string) =>
    setTodo((prev) => prev.filter((todo) => todo.id !== id));
};

export const useEditTodoAtom = () => {
  const setTodo = useSetTodoAtom();
  return (todo: todoState) =>
    setTodo((prev) =>
      prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo))
    );
};

export const useTodoList = () => useRecoilValue(todoAtom);
