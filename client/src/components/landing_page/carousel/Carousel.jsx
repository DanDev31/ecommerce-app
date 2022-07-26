import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'
import { Arrow, Slider, Slide, Image, Wrapper } from '../../styles/Slider';



const imagesSources = [
    "https://ae01.alicdn.com/kf/H23b17c8ac090456d9e1a061f7ce46ced0/PC-GAMER-S5-Ordenador-de-juegos-Core-i5-E5-2650-CPU-con-GTX1050-GTX750-m-quina.jpg_Q90.jpg_.webp",
    "https://www.destreaming.es/wp-content/uploads/2020/11/pc_para_streaming_gaming.jpg",
    "https://controltechinc.co/wp-content/uploads/2021/11/PC-COMPUMAX-24.png",
    "https://www.gamespot.com/a/uploads/screen_kubrick/1551/15511094/3667472-gaming-pc-build-2020--how-to-build-a-gaming-pc-from-scratch-promothumb2.jpg",
    "https://hardzone.es/app/uploads-hardzone.es/2019/05/CORSAIR-VENGEANCE-5180-Gaming-PC.jpg"
]



export const CarouselLandingPage = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4);
      } else {
        setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0);
      }
    };

  return (
    <Slider>

        <Arrow direction="left" onClick={() => handleClick("left")}>
            <IoIosArrowBack />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {
                imagesSources.map((source, i) => (
                    <Slide key={i}>
                        <Image src={source}/>
                    </Slide>
                ))
            }
            
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <IoIosArrowForward />
        </Arrow>

    </Slider>
  )
}
