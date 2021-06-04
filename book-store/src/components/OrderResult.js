import React from 'react'
import { Button, Typography } from 'antd';
import '../css/payment.css'
import { LockOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export default function OrderResult({ onClick, icon }) {
  return (
    <div style={{ padding: '120px 20px 0px 20px', width: '24vw', }}>
      <div style={{ backgroundColor: '#f5f9ff', padding: '20px 10px', height: '380px', width: '360px' }}>
        <Title level={2} style={{ margin: '0px 0px 30px 10px' }}>สรุปคำสั่งซื้อ</Title>
        <div className="text-result">
          <Text strong>ยอดรวม</Text>
          <Text strong>THB</Text>
        </div>
        <div className="text-result">
          <Text strong>ค่าส่ง</Text>
          <Text strong>THB</Text>
        </div>
        <hr style={{ width: '95%', margin: '30px auto', color: 'black' }} />
        <div className="text-result">
          <Text strong>ยอดสุทธิ</Text>
          <Title level={3} style={{ margin: '0' }}>THB</Title>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <Button style={{ width: '90%', height: '50px', backgroundColor: '#0156ff', color: 'white', borderRadius: '50px' }} onClick={onClick}>
            {icon ? <LockOutlined /> : null}
            <Text strong style={{ color: 'white' }}>ชำระเงิน</Text>
          </Button>
        </div>
      </div>
    </div>
  )
}