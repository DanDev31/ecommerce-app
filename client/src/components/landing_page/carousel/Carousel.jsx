import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import 'bootstrap/dist/css/bootstrap.min.css';

export const CarouselLandingPage = () => {
  return (
    <div>
        <Carousel touch={true}>
            <Carousel.Item className="">
                <img
                    className="d-block w-100"
                    src="https://images.ole.com.ar/2021/01/22/LSpcCMae5_1256x620__1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="">
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1626218174358-7769486c4b79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGMlMjBnYW1lcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="">
                <img
                    className="d-block w-100"
                    src="https://media.istockphoto.com/photos/latin-man-gaming-on-his-pc-during-a-live-stream-picture-id1305224036?b=1&k=20&m=1305224036&s=170667a&w=0&h=PWTdErLi0N_eExJjeILmN7OUlC5_2Eq38zqdQEM4uLE="
                    alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}
