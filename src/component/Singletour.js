import { Button, Card ,Space , Form, Input} from "antd";
import React from "react";
import photo from "../assets/images/nyungwe.jpg";

const Singletour=({data})=>{
    return(
        <>
<h1>{data.title}</h1>
<img src="https://www.rwandasafaritour.com/wp-content/uploads/2020/02/akagera-national-park-1.jpg" style={{width:"30rem",height:"20rem"}}/>
<h3>prepared by:{data.preparedby}</h3>
<h3>about our tour</h3>
<p>{data.description}</p>

{/* <Carousel autoplay>{data.slide}</Carousel> */}
<Space direction="vertical">
<Card>
    <h3 style={{color:"green",fontSize:"20px"}}>Application Information</h3>
    <Form.Item label="Username" name="username" >
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email"
        rules={[{ type: 'email',},]}>
        <Input />
      </Form.Item>
      
    <Button style={{marginLeft:"7rem"}}>Submit</Button>
</Card>
</Space>
</>
    )
}
export default Singletour;