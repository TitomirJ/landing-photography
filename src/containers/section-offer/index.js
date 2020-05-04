/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import img from "../../assets/images/What we offer image (1).png"
import icon from "../../assets/images/camera-photo-gallery-photography-picture 1.png"
import iconSec from "../../assets/images/shape-circle 1.png"
import iconThr from "../../assets/images/tap-hand-gesture-touch-double-tap 1.png"
import iconFour from "../../assets/images/video-camera 1.png"
import iconFive from "../../assets/images/laugh 1.png"
import { ReactComponent as Youtube} from '../../assets/images/youtube-black 1.svg'
import ScrollableAnchor from "react-scrollable-anchor";
import React from "react";

const SectionOffer = () => {
    return (
        <ScrollableAnchor id={'section-offer'}>
            <section className='position-relative'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7 mt-5">
                            <h2 className='text-uppercase text-center font-light'>What we offer</h2>
                            <div className="row">
                                <div className="col-12 col-md-6 mt-5">
                                    <div className="row">
                                        <div className="col-2 d-flex align-items-center flex-column">
                                            <img className='offer-icon' src={icon} alt=""/>
                                            <div className='offer-line'>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <p className='font-bold offer-article'>Modern Photo and Video</p>
                                            <p className='font-light offer-description'>We offer high-quality video and photo in order  to capture every detail of your  perfect wedding day.</p>
                                            <div className='d-flex'>
                                                <Youtube
                                                    className='offer-youtube-icon'
                                                />
                                                <p className='offer-youtube-text'>Check our Youtube</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 mt-5">
                                    <div className="row">
                                        <div className="col-2 d-flex align-items-center flex-column">
                                            <img className='offer-icon' src={iconSec} alt=""/>
                                            <div className='offer-line'>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <p className='font-bold offer-article'>Air-drone photography</p>
                                            <p className='font-light offer-description'>We offer high-quality video and photo in order  to capture every detail of your  perfect wedding day.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 mt-5">
                                    <div className="row">
                                        <div className="col-2 d-flex align-items-center flex-column">
                                            <img className='offer-icon' src={iconThr} alt=""/>
                                            <div className='offer-line'>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <p className='font-bold offer-article'>Professional retoushing</p>
                                            <p className='font-light offer-description'>We offer high-quality video and photo in order  to capture every detail of your  perfect wedding day.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 mt-5">
                                    <div className="row">
                                        <div className="col-2 d-flex align-items-center flex-column">
                                            <img className='offer-icon offer-icon-last' src={iconFour} alt=""/>
                                            <div className='offer-line'>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <p className='font-bold offer-article'>Actual Equipment</p>
                                            <p className='font-light offer-description'>We offer high-quality video and photo in order  to capture every detail of your  perfect wedding day.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 offer-block">
                            <div className="row">
                                <div className="col-2 col-md-1 d-flex align-items-center flex-column">
                                    <div className='offer-line'></div>
                                    <img className='offer-icon offer-icon-fun' src={iconFive} alt=""/>
                                    <div className='offer-line'></div>
                                </div>
                                <div className="col-10 col-md-11">
                                    <p className='font-bold'>Travel wedding photography</p>
                                    <p className='font-light'>
                                        We believe that your wedding is one of the most important days in your life,
                                        that's why our company will do our best to make it unforgetable and peculiar.
                                        Our team can organize an extraordinary ceremony for you.
                                        If case you do not know exactly what you want - why don't you consider choosing
                                        to make your wedding ceremony outside. You can choose any place you like - from the park in your city to the bank of the seaside.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-5 mb-3 d-flex justify-content-center">
                            <button className='btn-offer'>
                                Contact us
                            </button>
                        </div>
                        <div className="blockPhoto-right">
                            <div css={ImageCSS}></div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollableAnchor>
    )
}

const ImageCSS = css`
    background-image: url('${img}');
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

export default SectionOffer