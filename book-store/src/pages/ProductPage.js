import React, { useState, useRef } from "react";
import Header from "../components/Header"
import { Typography, InputNumber, Button, Tabs, Card, Rate } from 'antd'
import { HeartFilled, HeartOutlined, BarChartOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom"
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "../css/carousel.css"

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

const buttonShare = {
  width: '40px', height: '40px'
}

export default function ProductPage() {
  const [showImage, setShowImage] = useState(images[0].imgUrl)
  const handleShowImage = (e) => {
    setShowImage(e.target.currentSrc)
  }
  const books = [
    { id: 1, name: 'test1', price: 599.00, discount: 0.05, img: "https://picsum.photos/id/101/100/150" },
    { id: 2, name: 'test2', price: 599.00, discount: 0.05, img: "https://picsum.photos/id/111/100/150" },
    { id: 3, name: 'test3', price: 599.00, discount: 0.05, img: "https://picsum.photos/id/121/100/150" },
    { id: 4, name: 'test4', price: 699.00, discount: 0.05, img: "https://picsum.photos/id/131/100/150" },
    { id: 5, name: 'test5', price: 699.00, discount: 0.05, img: "https://picsum.photos/id/141/100/150" },
    { id: 6, name: 'test6', price: 699.00, discount: 0.05, img: "https://picsum.photos/id/151/100/150" },
    { id: 7, name: 'test7', price: 999.00, discount: 0.05, img: "https://picsum.photos/id/161/100/150" },
    { id: 8, name: 'test8', price: 999.00, discount: 0.05, img: "https://picsum.photos/id/171/100/150" },
    { id: 9, name: 'test9', price: 999.00, discount: 0.05, img: "https://picsum.photos/id/181/100/150" },
    { id: 10, name: 'test10', price: 1299.00, discount: 0.05, img: "https://picsum.photos/id/191/100/150" },
  ]

  const textStyle = {
    fontWeight: '800', fontSize: '20px'
  }
  const productStyle = {
    margin: '100px 0px', justifyContent: 'space-between', display: 'flex'
  }

  const cardRef = useRef()

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
              <Button shape="circle" style={{ backgroundColor: 'red', ...buttonShare }}>A</Button>
              <Button shape="circle" style={{ backgroundColor: 'pink', ...buttonShare }}>B</Button>
              <Button shape="circle" style={{ backgroundColor: 'green', ...buttonShare }}>C</Button>
              <Button shape="circle" style={{ backgroundColor: 'blue', ...buttonShare }}>D</Button>
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
        <div style={productStyle}>
          <Text style={textStyle}>สินค้าที่เกี่ยวข้อง</Text>
          <Link to="/home" style={{ textDecoration: 'underline' }}>ดูสินค้าทั้งหมด</Link>
        </div>
        <OwlCarousel loop responsive={false} items={5}>
          {books.map((item) =>
            <Card hoverable style={{ width: '240px', height: '350px', border: '0px' }} key={item.id} ref={cardRef} className="card">
              <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <div style={{ flexDirection: 'column', gap: '5px', position: 'absolute', right: 0 }} className="hover-button">
                  <Button icon={<HeartOutlined style={{ fontSize: '10px' }} />} shape="circle" size="small"></Button>
                  <Button icon={<BarChartOutlined style={{ fontSize: '10px' }} />} shape="circle" size="small"></Button>
                </div>
                <img src={item.img} style={{ width: '100px', height: '150px', alignSelf: 'center' }} />
                <div className="hover-button" style={{ justifyContent: 'center' }}>
                  <Button shape="round" style={{ fontWeight: '700', color: '#0156ff', borderColor: '#0156ff', marginBottom: '10px', width: '190px' }} >Add to Cart</Button>
                </div>
                <Rate style={{ fontSize: '15px' }} />
                <Text style={{ fontSize: '14px', margin: '5px 0px' }}>{item.name}</Text>
                <Text style={{ fontSize: '18px' }}>THB{item.price}</Text>
                <Text style={{ textDecoration: 'line-through', fontSize: '20px', fontWeight: '700' }}>THB{((item.price * (1 - item.discount))).toFixed(2)}</Text>
              </div>
            </Card>)}
        </OwlCarousel>
      </div>
    </>
  )
}