import React from 'react';
import styled from 'styled-components';

 function Footer() {
    return (
        
        <FooterContainer className="main-footer">
        <div className="footer-middle">    
        <div className="container-fluid">
        <div className="row">
            {/* Column 1*/}
            <div className="col-md-4 col-sm-6">
            <h4>Contact</h4>
            <ul className="list-unstyled">
            <li>Anup Das</li>
                <li>Lane no.7,Gauri Apartment</li>
                <li>Flat no.103,Dhanori,</li>
                <li>Pune-411015</li>
                <li>MO-: +91-8605575578 </li>
            </ul>
            </div>

             {/* Column 2*/}
             <div className="col-md-4 col-sm-6">
            <h4>Services</h4>
            <ul className="list-unstyled">
               
                <li><a href="/Customised">Customized Development</a></li>
                <li><a href="/MobileApp">Mobile App Development</a></li>
                <li><a href="/Webpage">Webpage Development</a></li>
            </ul>
            </div>

           

        </div>
        {/* Footer Bottom */}
            <div className="footer-bottom">
                <p className= "text-xt-center">
                    &copy;{new Date().getFullYear} RetailClick - All Rights Reserved
                </p>

            </div>

        </div>
        </div>
        </FooterContainer>
    );
}
export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
    padding-top: 3rem;
    
}
.footer-bottom{
    padding-top: 1rem;
    margin-left:center;
    padding-bottom: 1rem
}


ul li a {
    color: var(--mainGray);
}

ul li a hover{
    color: var(--mainLightGray);
}
`;