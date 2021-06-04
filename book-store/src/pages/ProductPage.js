import React, { useState } from "react";
import Header from "../components/Header"
import { Typography, InputNumber, Button, Tabs } from 'antd'
import { HeartFilled } from '@ant-design/icons'

const { Title, Text } = Typography
const { TabPane } = Tabs

const product = [
  {
    name: 'Hello World',
    author: 'JavaScript',
    publisher: 'React',
    category: 'Technology',
    productType: 'Books',
    price: 999.99,
    discount: 0.05,
    barcode: 55555555,
    images: [{ id: 1, imgUrl: "https://picsum.photos/id/100/320/465" }, { id: 2, imgUrl: "https://picsum.photos/id/220/320/465" }]
  }
]
const images = product[0].images;


export default function ProductPage() {
  const [showImage, setShowImage] = useState(images[0].imgUrl)
  const handleShowImage = (e) => {
    setShowImage(e.target.currentSrc)
  }
  return (
    <>
      <Header />
      <div style={{ margin: '50px 100px 0px', height: '100vh', width: 'calc(100vw - 200px)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: '640px', display: 'flex', flexDirection: 'row' }}>
          <div style={{ display: 'flex', flexDirection: 'column', margin: '0px 40px 10px 0px' }}>
            <img alt="book" width='320px' height='465px' src={showImage} />
            <div style={{ margin: '10px 0px 0px' }}>
              {images.map((item) => 
                <img key={item.id} id={item.id} src={item.imgUrl} width="100" height="150" style={{ marginRight: '10px', opacity: showImage === item.imgUrl && 0.5 }} onClick={handleShowImage} />
              )}
            </div>
          </div>
          <div style={{ width: '610px', display: 'flex', flexDirection: 'column', lineHeight: '1.5', margin: '20px 0px' }}>
            <Title level={2} style={{ margin: '20px 0px' }}>{product[0].name}</Title>
            <Text strong>
              ผู้เขียน : &nbsp;&nbsp;{product[0].author}<br />
              สำนักพิมพ์ : &nbsp;&nbsp;{product[0].publisher}<br />
              หมวดหมู่ : &nbsp;&nbsp;{product[0].category}<br />
              ประเภทของสินค้า : &nbsp;&nbsp;{product[0].productType}<br />
              บาร์โค้ด : &nbsp;&nbsp;{product[0].barcode}
            </Text>
            <div style={{ flexDirection: 'row', display: 'flex', margin: '40px 0px 20px', alignItems: 'center', justifyContent: 'space-between', width: '400px' }}>
              <Title level={4} style={{ margin: '0' }}>ราคา</Title>
              <Title style={{ margin: '0' }}>THB{product[0].price}</Title>
              <Title level={3} style={{ textDecoration: 'line-through', margin: '0', color: 'lightgray' }}>THB{((product[0].price * (1 - product[0].discount))).toFixed(2)}</Title>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px', margin: '20px 0px' }}>
              <InputNumber size="large" style={{ height: '40px', width: '100px', backgroundColor: 'lightgray', paddingLeft: '20px' }} defaultValue={5} />
              <Button style={{ width: '200px', height: '50px', backgroundColor: '#0656fb', color: 'white', borderRadius: '50px' }}>
                <Text strong style={{ color: 'white' }}>Add</Text>
              </Button>
              <Button style={{ width: '200px', height: '50px', backgroundColor: '#f39c4d', color: 'white', borderRadius: '50px' }}>
                <Text strong style={{ color: 'white' }}><HeartFilled style={{ marginRight: '10px' }} />Wishlist</Text>
              </Button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '240px', alignItems: 'center', marginTop: '10px' }}>
              <Text strong>แชร์ : </Text>
              <Button style={{ width: '40px', height: '40px', backgroundColor: 'red', borderRadius: '50%' }}>A</Button>
              <Button shape="circle" style={{ width: '40px', height: '40px', backgroundColor: 'pink' }}>B</Button>
              <Button shape="circle" style={{ width: '40px', height: '40px', backgroundColor: 'green' }}>C</Button>
              <Button shape="circle" style={{ width: '40px', height: '40px', backgroundColor: 'blue' }}>D</Button>
            </div>
          </div>
        </div>
        <div style={{ margin: '20px 0px' }}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="เกี่ยวกับสินค้า" key="1">
              <Text strong>เกี่ยวกับสินค้า : {product[0].name}</Text>
            </TabPane>
            <TabPane tab="รายละเอียด" key="2">
              รายละเอียด :
            </TabPane>
          </Tabs>
        </div>
      </div>
    </>
  )
}