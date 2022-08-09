import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {IoLogoYoutube} from 'react-icons/io'
import { FooterContainer } from '../styles/Footer'
import { Button } from '../styles/Buttons'
import { Container } from '../styles/Container'

export const Footer = () => {
  return (
    <FooterContainer>
        <Container>
        <div className='footer_info_container'>
            <div className='footer_newsletter'>
                <h4 className='mb_1'>Subscribe to our Newsletter</h4>
                <form>
                    <input type="email" placeholder='Your email...'/>
                    <Button bgColor="#f5a131" fontSize="1.4rem">Submit</Button>
                </form>
                <div className='social_media'>
                    <BsFacebook />
                    <FaLinkedin />
                    <RiInstagramFill />
                    <IoLogoYoutube />
                </div>
            </div>
            <div>
                <h4 className='mb_1'>Resources</h4>
                <div className='footer_resources'>
                    <a href="/"><span>Terms</span></a>
                    <a href="/"><span>Privacy</span></a>
                    <a href="/"><span>Support</span></a>
                </div>
            </div>
            <div>
                <h4 className='mb_1'>Contact Us</h4>
                <p style={{marginBottom:"1rem"}}>example-email@email.com</p>
                <p>01-8000-234-3241</p>
            </div>
        </div>
    
        <div className='all_right'>
            <p>DanDev. &copy; All right reserved </p>
        </div>
        </Container>
    </FooterContainer>
  )
}
