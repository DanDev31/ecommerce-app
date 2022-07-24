import React from 'react'
import { Container } from '../../styles/Container';
import Carousel from 'nuka-carousel'

import './carousel.css'

export const CarouselLandingPage = () => {
  return (
    <Container>

        <Carousel
            slidesToShow={1} 
            cellAlign="center"
            adaptiveHeight={true}
            autoplay={true}
            wrapAround={true}
            className="carousel"
        >
            <div>
                <img src="https://ae01.alicdn.com/kf/H23b17c8ac090456d9e1a061f7ce46ced0/PC-GAMER-S5-Ordenador-de-juegos-Core-i5-E5-2650-CPU-con-GTX1050-GTX750-m-quina.jpg_Q90.jpg_.webp" />
            </div>
            <div>
                <img src="https://www.destreaming.es/wp-content/uploads/2020/11/pc_para_streaming_gaming.jpg" />
            </div>
            <div>
                <img src="https://controltechinc.co/wp-content/uploads/2021/11/PC-COMPUMAX-24.png" />
            </div>
            <div>
                <img src="https://www.gamespot.com/a/uploads/screen_kubrick/1551/15511094/3667472-gaming-pc-build-2020--how-to-build-a-gaming-pc-from-scratch-promothumb2.jpg" />
            </div>
            <div>
                <img src="https://hardzone.es/app/uploads-hardzone.es/2019/05/CORSAIR-VENGEANCE-5180-Gaming-PC.jpg" />
            </div>
        </Carousel>
        
    </Container>
  )
}
