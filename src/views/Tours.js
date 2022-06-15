import React, {useState} from "react";
import Singletour from "../component/Singletour.js";
import allTours from "../assets/data/Tours.json";
import { Card, Image, Space, Typography, Button, Drawer} from "antd";
const { Text, Title } = Typography;

const Tours = () => {
  const [showDrawer, setShowDrawer]=useState(false);
  const [selectedTour, setSelectedTour]=useState({});

  return (
    <>
    <div style={{ width: "100%", height: "auto", padding: "10px" }}>
      <Card>
        {allTours.map((Tours)=>
        (<Card.Grid style={{ width: "33.3%", minHeight: "30rem"}}>
        <Space direction="vertical">
          <Image preview={true} src="{Tours.picture}" style={{width: "40rem", height: "20rem"}} />
          <Title level={4} style={{ color: "#1976d1" }}>
            {Tours.title.toUpperCase()}
          </Title>
          <Text type="secondary" italic>
            Nyungwe National Park lies in southwest Rwanda, partly abutting
            the Burundi border. It's a vast area of mountain rainforest, home
            to many species of chimpanzees, plus owl-faced and colobus
            monkeys. The Canopy Walkway, part of the Igishigishigi Trail, is a
            high suspension bridge with views over the valley and surrounding
            forests. A trail runs to the Kamiranzovu Marsh, with its birdlife,
            orchids and waterfall
          </Text>
          <Space>
              <Text>DueDate:</Text>
              <Text strong> {Tours.dueDate} 10h00 am</Text>
          </Space>
          <Button onClick={()=>{
            setSelectedTour(Tours)
            setShowDrawer(true)}} 
          style={{color:"white",backgroundColor:"green",textAlign:"center"}}>Book Now!</Button>
        </Space>
      </Card.Grid>
        ))}
        
      </Card>
    </div>
    <Drawer title="Single Tour!" placement="right" visible={showDrawer}
    onClose={()=>{setShowDrawer(false)}}
    >
      <Singletour data={selectedTour} />
    </Drawer>
    </>
  );
};
export default Tours;
