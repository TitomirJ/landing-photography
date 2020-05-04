/** @jsx jsx */
import { useState } from 'react'
import { css, jsx } from '@emotion/core'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrows'
import img from "../../assets/images/frans-hulet--o59Ym-DrV4-unsplash 1.png"
import imgTwo from "../../assets/images/Wedding-Photographer.jpg"
import imgThree from "../../assets/images/DSC_3098.jpg"
import imgFour from "../../assets/images/wedding-instagram-captions.jpg"
import zoom from "../../assets/images/full-screen-arrow-expand-maximize-enlarge 1.png"

const Slider = () => {
    const images = [
        img,
        imgTwo,
        imgThree,
        imgFour
    ];

    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45,
        width: 800,
        fullScreen: false
    });

    const { translate, transition, activeIndex } = state

    const nextSlide = () => {
        // if (activeIndex === images.length - 1) {
        //     return setState({
        //         ...state,
        //         translate: 0,
        //         activeIndex: 0
        //     })
        // }

        if (activeIndex === images.length - 1) {
            return null
        }

        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * state.width
        })
    };

    const prevSlide = () => {
        // if (activeIndex === 0) {
        //     return setState({
        //         ...state,
        //         translate: (images.length - 1) * state.width,
        //         activeIndex: images.length - 1
        //     })
        // }

        if (activeIndex === 0) {
            return null
        }

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * state.width
        })
    };

    const fullScreen = () => {
        const widthAllowed = state.fullScreen === false ? window.innerWidth : 800;
        setState({
            ...state,
            fullScreen: !state.fullScreen,
            width: widthAllowed,
            translate: activeIndex * widthAllowed,
        })
    }

    return (
        <div className={state.fullScreen ? "header-slide-blockActive" : "header-slide-block"}>
            <div css={SliderCSS}>
                <SliderContent
                    translate={translate}
                    transition={transition}
                    width={state.width * images.length}
                >
                    {images.map((slide, i) => (
                        <Slide key={slide + i} content={slide} />
                    ))}
                </SliderContent>
                <div className='pagination-slider'>
                    <Arrow 
                        direction="left" 
                        handleClick={prevSlide} 
                    />
                    <p>{state.activeIndex + 1}/{images.length}</p>
                    <Arrow 
                        direction="right" 
                        handleClick={nextSlide} 
                    />
                    <img className='svg-fullScreen' src={zoom} alt="" onClick={fullScreen}/>
                </div>
            </div>
        </div>
    )
};

const SliderCSS = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`
export default Slider