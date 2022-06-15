import React from "react";
import Footer from "../component/footer";
import Nav from "../component/navbar";
import s1 from "../assets/images/slide1.jpg"
import s2 from "../assets/images/slide2.jpg"
import s3 from "../assets/images/gollila.jpg"
import s4 from "../assets/images/slide4.jpg"
import s5 from "../assets/images/lakekivu.jpg"
import s6 from "../assets/images/akagera.jpg"
import "./Home.css";
import 'antd/dist/antd.css';
import {Carousel} from 'antd';
import {AudioOutlined} from '@ant-design/icons';
import {Input, Space} from 'antd';

const {Search}=Input;
const suffix =(
   < AudioOutlined
   style={{
       fontSize:16,
       color:'green',
   }}
   />
);
const onSearch =(value) => console.log(value);
const Home = () =>{
    return(
        <div className="home-container">
  <div className="home-content">
      <h1 className="heading-title">Rwanda Booking Tour</h1>
      <div className="carousel-img">
    <Carousel autoplay>
    <img src={s1} alt="slides" />
    <img src={s2} alt="slides" />
    <img src={s3} alt="slides" />
    <img src={s4} alt="slides" />
    <img src={s5} alt="slides" />
    <img src={s6} alt="slides" />
    </Carousel>
    <Search 
    placeholder="search tour"
    enterButton="Search"
    size="large"
    suffix={suffix}
    onSearch={onSearch}
    />
    </div>
    <h3 className="toptour">Top Tour</h3>
    <hr className="align"></hr>
    </div>
    </div>
    );
    
};
export default Home;