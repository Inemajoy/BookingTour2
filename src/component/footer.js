import React from "react";
import logofooter from "../assets/images/logotour.png"
import { FacebookOutlined,TwitterOutlined,InstagramOutlined } from "@ant-design/icons";
import "./footer.css";

const Footer=()=>{
    const d=new Date();
    let year=d.getFullYear();
return(
    <div className="footer-container">
        <div className="logo-column">
            <img src={logofooter} alt="logo footer" className="logo-img"></img><br/><br/>
            <div className="icons">
                <FacebookOutlined/>
                <TwitterOutlined/>
               <InstagramOutlined/>
            </div>
<p className="copyright">copyright &copy; {year} by sheCanCode 
<span>Inc.All right reserved</span> {""}
</p>
        </div>
        <div className="contact-column">
            <h3 className="footer-title">contact-us</h3>
            <p>623 kaacyiru ST., 2nd floor, <span>Kigali Rwanda</span></p>
            <p><a href="tel:+250-788-737-287">tel:+250-788-737-287</a></p>
            <p><a hreff="mailto:webmaster@example.com">angejoy@gmail.com</a></p>
        </div>
        <div className="account-column">
        <h3 className="footer-title">account</h3>
        <p><a href="#">Create Account</a></p>
        <p><a href="#">Sign Up</a></p>
        </div>
        
        <div className="company-column">
        <h3 className="footer-title">Company</h3>
        <p><a href="#">About me</a></p>
        <p><a href="#">Career</a></p>
        <p><a href="#">partner</a></p>
        </div>
        <div className="company-column">
        <h3 className="footer-title">Resources</h3>
        <p><a href="#">About me for directory</a></p>
        <p><a href="#">Help Center</a></p>
        <p><a href="#">privacy</a></p>
        </div>
    </div>
)
}
export default Footer;

