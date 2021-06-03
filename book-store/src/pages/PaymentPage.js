import React, { useState } from "react";
import Header from "../components/Header"
import { Typography, Input, Radio, Space } from 'antd';
import { CreditCardOutlined, DollarOutlined } from '@ant-design/icons';
import "../css/payment.css"
import OrderResult from '../components/OrderResult'

const { Title, Text } = Typography;

export default function PaymentPage() {
  const [shipping, setShipping] = useState('free')
  const [payment, setPayment] = useState('cash')
  const [country, setCountry] = useState('')
  const handleShipping = (e) => {
    console.log('Shipping: ', e.target.value);
    setShipping(e.target.value)
  }
  const handlePayment = (e) => {
    console.log('Payment: ', e.target.value);
    setPayment(e.target.value)
  }
  const handleCountry = (e) => {
    console.log('Country: ', e.target.value);
    setCountry(e.target.value)
  }

  // css style
  const text = {
    margin: '5px 0px'
  }

  return (
    <>
      <Header />
      <div style={{ margin: '0px 100px', height: '100vh', width: 'calc(100vw - 200px)', display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '62vw', padding: '50px 20px 0px 0px' }}>
          <Title level={1}>ชำระเงิน</Title>
          <Text strong>ที่อยู่ในการจัดส่ง</Text>
          <hr />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row', width: '780px', margin: '5px 0px' }}>
              <div style={{ width: '40%', marginRight: '20px' }}>
                <Text>ชื่อ</Text>
                <Input className="input2" />
              </div>
              <div style={{ width: '40%' }}>
                <Text>นามสกุล</Text>
                <Input className="input2" />
              </div>
            </div>
            <Text style={text}>ประเทศ</Text>
            <select onChange={handleCountry}>
              <option value='thailand'>Thailand</option>
              <option value='japan'>Japan</option>
              <option value='usa'>USA</option>
            </select>
            <Text style={text}>ที่อยู่</Text>
            <Input className="input1" />
            <div style={{ display: 'flex', flexDirection: 'row', width: '780px', margin: '5px 0px' }}>
              <div style={{ width: '40%', marginRight: '20px' }}>
                <Text>แขวง/ตำบล</Text>
                <Input className="input2" />
              </div>
              <div style={{ width: '40%' }}>
                <Text>เขต/อำเถอ</Text>
                <Input className="input2" />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', width: '780px' }}>
              <div style={{ width: '40%', marginRight: '20px' }}>
                <Text>จังหวัด</Text>
                <Input className="input2" />
              </div>
              <div style={{ width: '40%' }}>
                <Text>รหัสไปรษณีย์</Text>
                <Input className="input2" />
              </div>
            </div>
            <Text style={text}>เบอร์ติดต่อ (กรุณาระบุหมายเลขโทรศัพท์ เฉพาะตัวเลขเท่านั้น)</Text>
            <Input className="input1" />
          </div>
          <div style={{ marginTop: '50px' }}>
            <Text strong >เลือกขนส่ง</Text>
            <hr />
            <Radio.Group onChange={handleShipping} value={shipping} >
              <Space direction="vertical" >
                <Radio value={'free'} className="radio">
                  <div className="radio-option">
                    <Title level={3} style={{ margin: '0px 0px 0px 20px' }}>Free Shipping</Title>
                    <Text style={{ fontSize: '20px', fontWeight: '700' }}>THB</Text>
                  </div>
                </Radio>
                <Radio value={'kerry'} className="radio">
                  <div className="radio-option">
                    <Title level={3} style={{ margin: '0px 0px 0px 20px' }}>Kerry Express</Title>
                    <Text style={{ fontSize: '20px', fontWeight: '700' }}>THB</Text>
                  </div>
                </Radio>
              </Space>
            </Radio.Group>
          </div>
          <div style={{ marginTop: '50px' }}>
            <Text strong>วิธีการชำระเงิน</Text>
            <hr />
            <Radio.Group onChange={handlePayment} value={payment} >
              <Space direction="vertical" >
                <Radio value={'cash'} className="radio">
                  <div className="radio-option">
                    <Title level={3} style={{ margin: '0px 0px 0px 20px' }}><DollarOutlined style={{ marginRight: '10px' }} />Cash</Title>
                  </div>
                </Radio>
                <Radio value={'debitCredit'} className="radio">
                  <div className="radio-option">
                    <Title level={3} style={{ margin: '0px 0px 0px 20px' }}><CreditCardOutlined style={{ marginRight: '10px' }} />Debit/Credit</Title>
                  </div>
                </Radio>
              </Space>
            </Radio.Group>
          </div>
        </div>
        <OrderResult />
      </div>
    </>
  )
}