import { Modal } from "antd";
import { useTodoModalAtomValue, useHideTodoModal } from "../model";
import { ProForm, ProFormText } from "@ant-design/pro-components";
import type { ProFormInstance } from "@ant-design/pro-components";
import { useRef, useEffect } from "react";
import { todoState } from "../../../module";
import { useAddTodoAtom, useEditTodoAtom } from "../../../model";
import _ from "lodash";

const TodoModal = () => {
  const { visible, actionType, data } = useTodoModalAtomValue();

  const formRef = useRef<ProFormInstance<todoState>>();

  const hide = useHideTodoModal();
  const add = useAddTodoAtom();
  const edit = useEditTodoAtom();
  const onCancel = () => {
    hide();
    formRef.current?.resetFields();
  };

  const onOk = async () => {
    const values = await formRef.current?.validateFields();
    if (actionType === "add" && values) {
      add({ ...values, id: _.uniqueId() });
    }
    if (actionType === "edit" && values && data) {
      edit({ ...values, id: data?.id });
    }
    onCancel();
  };

  useEffect(() => {
    if (actionType === "edit" && data && formRef.current?.setFieldsValue) {
      formRef.current.setFieldsValue(data);
    }
  }, [actionType, formRef.current?.setFieldsValue]);

  return (
    <Modal
      onCancel={onCancel}
      open={visible}
      title={actionType === "add" ? "添加todo" : "修改todo"}
      okText="提交"
      onOk={onOk}
    >
      <ProForm<todoState> submitter={false} formRef={formRef}>
        <ProFormText required name="text" label="内容" />
        <ProFormText required name="name" label="昵称" />
      </ProForm>
    </Modal>
  );
};

export default TodoModal;
