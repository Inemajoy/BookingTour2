import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import allTours from "../../assets/data/Tours.json" ;
const columns = [

  {
    title:'name',
    dataIndex:'title'
  },
  {
    title:'description',
    dataIndex:"description",
  },
  {
    title:'date',
    dataIndex:"dueDate",
  }
];

const Tables = () =>
      <Table columns={columns} dataSource={allTours} />
 

export default Tables;