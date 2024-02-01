import React from 'react'
import "../styles/Footer.css";
import CopyrightIcon from '@mui/icons-material/Copyright';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function Footer() {
  return (
    <div className='footer'>
        <div className='footerCR'>
             <CopyrightIcon /><p> 2024. Ravi. All Rights Reserved</p>
        </div>
        <div className='footerContact'> 
            <InstagramIcon id='contact'/>
            <TwitterIcon id='contact'/>
            <FacebookIcon id='contact'/>
            <LinkedInIcon id='contact'/>
        </div>
    </div>
  )
}

export default Footer