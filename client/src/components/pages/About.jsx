import React from 'react'
import { Container } from '../styles/Container'
import './about.css'

export const About = () => {
  return (
    <Container margin="8rem">
        <div className='about_hero'>
            <h2>About</h2>
        </div>
        <div className='about_text'>
            <h3>Know our work</h3>
            <p>We are a company dedicated to the sale and marketing of computer parts and equipment. We have 20 years of experience, distributing the best components and assembling powerful machines with the latest features. We create for you the best experience in performance and quality always at the best price. In addition, we advise you with our team of experts on any technical or commercial questions you may have.</p>
        </div>

        <div className='about_information'>
            <div className='about_information_box'>
                <div className='about_information_box_image'>
                    <img src="https://www.a1-electronics.net/wp-content/uploads/a-lot-of-pc-gaming-components-1.png" alt="" />
                </div>
                <div className='about_information_box_text'>
                    <h3>The ultimate experience</h3>
                    <ul>
                        <li>Best Quality Components</li>
                        <li>Secure guarantee</li>
                        <li>Latest Features</li>
                    </ul>
                </div>
            </div>
        </div>
    </Container>
  )
}
