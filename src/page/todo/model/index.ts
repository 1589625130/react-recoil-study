import { atom, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import { todoState, ActionType } from '../../../module'

const todoModalAtom = atom<{
  visible: boolean
  actionType: ActionType
  data?: todoState
}>({
  key: 'todoModalAtom',
  default: {
    visible: false,
    actionType: 'add',
  },
})

// 打开添加
export const useOpenAddTodoModal = () => {
  const useSetTodoModal = useSetRecoilState(todoModalAtom)
  return () => useSetTodoModal({ visible: true, actionType: 'add' })
}

// 打开编辑
export const useOpenEditTodoModal = () => {
  const useSetTodoModal = useSetRecoilState(todoModalAtom)
  return (record: todoState) =>
    useSetTodoModal({
      visible: true,
      actionType: 'edit',
      data: record,
    })
}

export const useHideTodoModal = () => useResetRecoilState(todoModalAtom)

export const useTodoModalAtomValue = () => useRecoilValue(todoModalAtom)
