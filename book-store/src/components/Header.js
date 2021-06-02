import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Badge } from 'antd';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const useStyles = makeStyles({
  text: {
    padding: '6px 16px'
  },
}, { name: 'MuiButton' })

export default function Header() {
  const classes = useStyles();
  return (
    <div style={{
      width: 'calc(100vw - 17px)',
      height: '50px',
      position: 'sticky',
      backgroundColor: 'white',
      top: '0px', left: '0px',
      padding: '40px 0px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0px 6px 10px -3px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '100px' }}>
        <div style={{ fontWeight: '700', fontSize: '35px', cursor: 'pointer', marginRight: '40px' }}>Book</div>
        <div>
          <Button type="text">สินค้าใหม่</Button>
          <Button type="text">สินค้าขายดี</Button>
          <Button type="text">สินค้าลดราคา</Button>
          <Button type="text">สินค้าแนะนำ</Button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: '100px' }}>
        <Button style={{ borderRadius: '50%', margin: '0px 10px' }} type="text" icon={<SearchOutlined style={{ fontSize: '22px' }} />}></Button>
        <Badge count={4} offset={[0,5]}>
          <Button style={{ borderRadius: '50%' }} type="text" icon={<ShoppingCartOutlined style={{ fontSize: '25px' }} />}></Button>
        </Badge>
        <img
          alt="profileImage"
          src="https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"
          style={{
            width: "40px",
            height: "40px",
            overflow: "hidden",
            objectFit: "cover",
            objectPosition: "50% 50%",
            borderRadius: "50%",
            margin: '12px 12px 12px 20px'
          }}
        />
      </div>
    </div>
  )
}