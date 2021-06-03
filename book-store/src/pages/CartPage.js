import React from "react";
import Header from "../components/Header"
import { Typography, Button, InputNumber } from 'antd';
import OrderResult from '../components/OrderResult'
import { CloseOutlined, EditOutlined } from '@ant-design/icons';

import "../css/payment.css"

const { Title, Text } = Typography;

export default function CartPage() {
  return (
    <>
      <Header />
      <div style={{ margin: '0px 100px', height: '100vh', width: 'calc(100vw - 200px)', display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '62vw', padding: '50px 20px 0px 0px' }}>
          <Title>ตระกร้าสินค้า</Title>
          <div style={{ display: 'grid', gridTemplateColumns: '40% 19% 19% 22%', width: '780px' }}>
            <div><Text strong>สินค้า</Text> </div>
            <div><Text strong>ราคา</Text> </div>
            <div><Text strong>จำนวน</Text> </div>
            <div><Text strong>ยอดรวม</Text></div>
          </div>
          <hr />
          <div style={{ display: 'grid', gridTemplateColumns: '40% 19% 19% 22%', width: '780px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <img src="https://picsum.photos/65/100" />
              <Text strong style={{ verticalAlign: 'top', marginRight: '50px' }}>Book of Shadow</Text>
            </div>
            <Text style={{ fontWeight: '700' }}>THB999.99</Text>
            <InputNumber size="large" style={{ height: '40px' }} defaultValue={5} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text strong style={{ verticalAlign: 'top' }}>THB999.99</Text>
              <div style={{ display: 'grid' }}>
                <Button icon={<CloseOutlined />} shape="circle"></Button>
                <Button icon={<EditOutlined />} shape="circle"></Button>
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '40% 19% 19% 22%', width: '780px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <img src="https://picsum.photos/65/100" />
              <Text strong style={{ verticalAlign: 'top', marginRight: '50px' }}>Book of Shadow</Text>
            </div>
            <Text style={{ fontWeight: '700' }}>THB999.99</Text>
            <InputNumber size="large" style={{ height: '40px' }} defaultValue={5}/>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text strong style={{ verticalAlign: 'top' }}>THB999.99</Text>
              <div style={{ display: 'grid' }}>
                <Button icon={<CloseOutlined />} shape="circle"></Button>
                <Button icon={<EditOutlined />} shape="circle"></Button>
              </div>
            </div>
          </div>
          <hr />
          <Button style={{ backgroundColor: 'white', borderRadius: '50px', width: '200px', height: '35px', color: 'gray', marginRight: '10px', border: '2px solid gray' }}>ซื้อสินค้าต่อไป</Button>
          <Button style={{ backgroundColor: 'black', borderRadius: '50px', width: '200px', height: '35px', color: 'white' }}>ล้างตระกร้าสินค้า</Button>
        </div>
        <OrderResult />
      </div>
    </>
  )
}