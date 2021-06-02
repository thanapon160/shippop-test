import React, { useState } from "react";
import Header from "../components/Header"
import { Button, Typography, Input, Radio, Space } from 'antd';
import { LockOutlined, CreditCardOutlined, DollarOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
export default function PaymentPage() {
  const [shipping, setShipping] = useState('free')
  const [payment, setPayment] = useState('cash')
  const handleShipping = (e) => {
    console.log('Shipping: ', e.target.value);
    setShipping(e.target.value)
  }
  const handlePayment = (e) => {
    console.log('Payment: ', e.target.value);
    setPayment(e.target.value)
  }

  const textResult = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '20px 10px'
  }
  const radio = {
    width: '780px', height: '110px', borderRadius: '8px', border: '1px solid lightgray', alignItems: 'center', padding: '0px 0px 0px 30px'
  }

  return (
    <>
      <Header />
      <div style={{ margin: '0px 100px', height: '100vh', width: 'calc(100vw - 200px)', display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '62vw', padding: '50px 20px 0px 0px' }}>
          <Title level={1}>ชำระเงิน</Title>
          <Text strong>ที่อยู่ในการจัดส่ง</Text>
          <hr style={{ width: '780px', margin: '15px 0px 30px 0px', border: '1px solid', color: '#f6f6f6' }} />
          <div>
            <Input addonBefore="test" />
          </div>
          <div style={{ marginTop: '50px' }}>
            <Text strong >เลือกขนส่ง</Text>
            <hr style={{ width: '780px', margin: '15px 0px 30px 0px', border: '1px solid', color: '#f6f6f6' }} />
            <Radio.Group onChange={handleShipping} value={shipping} >
              <Space direction="vertical" >
                <Radio value={'free'} style={radio}>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '680px' }}>
                    <Title level={3} style={{ margin: '0px 0px 0px 20px' }}>Free Shipping</Title>
                    <Text style={{ fontSize: '20px', fontWeight: '700' }}>THB</Text>
                  </div>
                </Radio>
                <Radio value={'kerry'} style={radio}>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '680px' }}>
                    <Title level={3} style={{ margin: '0px 0px 0px 20px' }}>Kerry Express</Title>
                    <Text style={{ fontSize: '20px', fontWeight: '700' }}>THB</Text>
                  </div>
                </Radio>
              </Space>
            </Radio.Group>
          </div>
          <div style={{ marginTop: '50px' }}>
            <Text strong>วิธีการชำระเงิน</Text>
            <hr style={{ width: '780px', margin: '15px 0px 30px 0px', border: '1px solid', color: '#f6f6f6' }} />
            <Radio.Group onChange={handlePayment} value={payment} >
              <Space direction="vertical" >
                <Radio value={'cash'} style={radio}>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '680px' }}>
                    <Title level={3} style={{ margin: '0px 0px 0px 20px' }}><DollarOutlined style={{ marginRight: '10px' }} />Cash</Title>
                  </div>
                </Radio>
                <Radio value={'debitCredit'} style={radio}>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '680px' }}>
                    <Title level={3} style={{ margin: '0px 0px 0px 20px' }}><CreditCardOutlined style={{ marginRight: '10px' }} />Debit/Credit</Title>
                  </div>
                </Radio>
              </Space>
            </Radio.Group>
          </div>
        </div>
        <div style={{ padding: '120px 20px 0px 20px', width: '24vw', }}>
          <div style={{ backgroundColor: '#f5f9ff', padding: '20px 10px', height: '380px', width: '360px' }}>
            <Title level={2} style={{ margin: '0px 0px 30px 10px' }}>สรุปคำสั่งซื้อ</Title>
            <div style={textResult}>
              <Text strong>ยอดรวม</Text>
              <Text strong>THB</Text>
            </div>
            <div style={textResult}>
              <Text strong>ค่าส่ง</Text>
              <Text strong>THB</Text>
            </div>
            <hr style={{ width: '95%', margin: '30px auto' }} />
            <div style={textResult}>
              <Text strong>ยอดสุทธิ</Text>
              <Title level={3} style={{ margin: '0' }}>THB</Title>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
              <Button style={{ width: '90%', height: '50px', backgroundColor: '#0156ff', color: 'white', borderRadius: '50px' }}><LockOutlined />
                <Text strong style={{ color: 'white' }}>ชำระเงิน</Text>
              </Button></div>
          </div>
        </div>
      </div>
    </>
  )
}