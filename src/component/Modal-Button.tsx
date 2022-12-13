import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import {Input} from '../component/Input'

export const ModalButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
       Add
      </Button>
      <Modal title="Adding a new user" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Input name='Name: '/>
        <Input name='Adress: '/>
        <Input name='Age: '/>
      </Modal>
    </>
  );
};
