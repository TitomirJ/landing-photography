import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import arrow from '../../assets/images/arrow-testi.png'
import img from '../../assets/images/Mask Group.png'
import img2 from '../../assets/images/Mask Group (3).png'
import img3 from '../../assets/images/Mask Group (1).png'
import imgGreen from '../../assets/images/Intersect.png'
import dots from "../../assets/images/_.png"

const TestimonialsSlider = () => {

    const [swiper, updateSwiper] = useState(null);

    const [state, setState] = useState({
        activeIndex: 1,
    });

    const { activeIndex } = state;

    const params = {
        slidesPerView: 3,
        spaceBetween: 15,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        breakpoints: {
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    };

    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
            setState({
                ...state,
                activeIndex: swiper.realIndex + 1,
            })
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
            setState({
                ...state,
                activeIndex: swiper.realIndex + 1,
            })
        }
    };

    return (
        <>
            <Swiper id='foo' getSwiper={updateSwiper} {...params}>
                <div className='slide-testimonials'>
                    <div>
                        <img className='w-100' src={img} alt=""/>
                    </div>
                    <div className='mt-3'>
                        <div className='testimonials-dots d-flex justify-content-center'>
                            <img src={dots} alt=""/>
                        </div>
                        <div className='d-flex justify-content-center position-relative mt-2'>
                            <div className='circle-photo circle-photo-left'>
                            </div>
                            <div className='circle-photo circle-photo-right'>
                            </div>
                            <img className='circle-photo-green' src={imgGreen} alt=""/>
                        </div>
                    </div>
                    <div className="mt-3 testimonials-text">
                        <h5>Angelina + John</h5>
                        <p className='testimonials-date font-light'>23/02/2019</p>
                        <p className='testimonials-description font-light'>
                            Thank you Apiko and whole team for such amazing result,
                            I am really happy to have such brilliant memories about that amazing day!
                        </p>
                    </div>
                </div>
                <div className='slide-testimonials'>
                    <div>
                        <img className='w-100' src={img2} alt=""/>
                    </div>
                    <div className='mt-3'>
                        <div className='testimonials-dots d-flex justify-content-center'>
                            <img src={dots} alt=""/>
                        </div>
                        <div className='d-flex justify-content-center position-relative mt-2'>
                            <div className='circle-photo circle-photo-left'>
                            </div>
                            <div className='circle-photo circle-photo-right'>
                            </div>
                            <img className='circle-photo-green' src={imgGreen} alt=""/>
                        </div>
                    </div>
                    <div className="mt-3 testimonials-text">
                        <h5>Angelina + John</h5>
                        <p className='testimonials-date font-light'>23/02/2019</p>
                        <p className='testimonials-description font-light'>
                            Thank you Apiko and whole team for such amazing result,
                            I am really happy to have such brilliant memories about that amazing day!
                        </p>
                    </div>
                </div>
                <div className='slide-testimonials'>
                    <div>
                        <img className='w-100' src={img3} alt=""/>
                    </div>
                    <div className='mt-3'>
                        <div className='testimonials-dots d-flex justify-content-center'>
                            <img src={dots} alt=""/>
                        </div>
                        <div className='d-flex justify-content-center position-relative mt-2'>
                            <div className='circle-photo circle-photo-left'>
                            </div>
                            <div className='circle-photo circle-photo-right'>
                            </div>
                            <img className='circle-photo-green' src={imgGreen} alt=""/>
                        </div>
                    </div>
                    <div className="mt-3 testimonials-text">
                        <h5>Angelina + John</h5>
                        <p className='testimonials-date font-light'>23/02/2019</p>
                        <p className='testimonials-description font-light'>
                            Thank you Apiko and whole team for such amazing result,
                            I am really happy to have such brilliant memories about that amazing day!
                        </p>
                    </div>
                </div>
            </Swiper>
            <div className='d-flex justify-content-center align-items-center mt-3'>
                <button className='arrow-testimonials' onClick={goPrev}>
                    <img className='leftArrow' src={arrow} alt="arrow"/>
                </button>
               <div>
                   { activeIndex }/{swiper !== null ? ( <>{swiper.params.children.length}</> ) : ( <div> null </div> )}
               </div>
                <button className='arrow-testimonials' onClick={goNext}>
                    <img src={arrow} alt="arrow"/>
                </button>
            </div>
        </>
    )
};

export default TestimonialsSlider;