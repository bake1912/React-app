import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Input } from '../component/Input'

type ModalButtonProps = {
    putArray: Function
}
export const ModalButton = (props: ModalButtonProps) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [array, setArray] = useState([{
        age: 0,
        name: 'text1',
        id: 1,
    },]);

    const showModal = () => {
        setIsModalOpen(true);
        props.putArray()
        
    };

    const handleOk = () => {
        setIsModalOpen(false);
      


        /* setArray(current => [...current, 'Carl']);
         localStorage.setItem("array",array );
         */
       
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
                <Input name='Name: ' />
                <Input name='Adress: ' />
                <Input name='Age: ' />
            </Modal>
        </>
    );
};
