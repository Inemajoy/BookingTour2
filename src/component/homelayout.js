import React from "react";
import Nav from "./navbar";
import Footer from "./footer";

const Homelayout =({children})=>{
    return(
<>
<Nav/>
<div style={{minHeight:"100vh"}}>{children}</div>
<Footer/>
</>
    )
}
export default Homelayout;