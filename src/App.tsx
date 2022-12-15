import React, { Component, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ModalButton } from './component/Modal-Button';




type DataType = {
  key: string;
  name: string;
  age: number;
  address: string;


}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },


  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a >Edit  {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: ' NewYork No. 1 Lake Park,'


  },


]
let dataNew = {
  key: '1',
  name: 'John Brown',
  age: 32,
  address: ' NewYork No. 1 Lake Park,'
}


const addUser = () => {




}

const App = () => {
  
  return (
    <>
      <Table columns={columns} dataSource={data} />
      <ModalButton putArray={addUser} />
    </>
  )
}



export default App;