import React, { useState } from "react";
import Header from "../components/Header"
import { Typography, Card, Rate, Button } from 'antd';
import { Link } from "react-router-dom"
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { HeartOutlined, BarChartOutlined } from '@ant-design/icons';
import "../css/carousel.css"

const { Text } = Typography

export default function HomePage() {
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
    margin: '10px 0px', justifyContent: 'space-between', display: 'flex'
  }

  const [show, setShow] = useState("")
  const handleCard = (itemId, e) => {

  }

  return (
    <>
      <Header />
      <div style={{ margin: '0px 100px' }}>
        <div style={{ backgroundColor: 'lightgray', height: '410px', marginBottom: '40px' }}></div>
        <div style={productStyle}>
          <Text style={textStyle}>สินค้าขายดี</Text>
          <Link to="/home" style={{ textDecoration: 'underline' }}>สินค้าขายดีทั้งหมด</Link>
        </div>
        <OwlCarousel loop responsive={false} items={5}>
          {books.map((item) =>
            <Card hoverable style={{ width: '240px', height: '350px', border: '0px' }} key={item.id} id={item.id} className="card">
              <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }} id={item.id}>
                <div style={{ flexDirection: 'column', gap: '5px', position: 'absolute', right: 0 }} className="hover-button">
                  <Button icon={<HeartOutlined style={{ fontSize: '10px' }} />} shape="circle" size="small"></Button>
                  <Button icon={<BarChartOutlined style={{ fontSize: '10px' }} />} shape="circle" size="small"></Button>
                </div>
                <img src={item.img} alt={item.name} style={{ width: '100px', height: '150px', alignSelf: 'center' }} />
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
        <div style={productStyle}>
          <Text style={textStyle} >สินค้าแนะนำ</Text>
          <Link to="/home" style={{ textDecoration: 'underline' }}>สินค้าแนะนำทั้งหมด</Link>
        </div>
        <OwlCarousel loop responsive={false} items={5}>
          {books.map((item) =>
            <Card hoverable style={{ width: '240px', height: '350px', border: '0px' }} key={item.id} className="card">
              <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <div style={{ flexDirection: 'column', gap: '5px', position: 'absolute', right: 0 }} className="hover-button">
                  <Button icon={<HeartOutlined style={{ fontSize: '10px' }} />} shape="circle" size="small"></Button>
                  <Button icon={<BarChartOutlined style={{ fontSize: '10px' }} />} shape="circle" size="small"></Button>
                </div>
                <img src={item.img} alt={item.name} style={{ width: '100px', height: '150px', alignSelf: 'center' }} />
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
      </div >
    </>
  )
}