/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import img from "../../assets/images/About Us Image.png"
import ScrollableAnchor from "react-scrollable-anchor";
import React from "react";

const SectionAbout = () => {
    return (
        <ScrollableAnchor id={'section-about'}>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="blockPhoto-left">
                            <div css={ImageCSS}></div>
                        </div>
                        <div className="col-12 offset-md-4 col-md-8 block-about">
                            <div className='block-about-border'>
                                <p className='main-color'>WEDDING PHOTO VIDEO</p>
                                <h2 className='text-uppercase'>Why do we differ from others?</h2>
                                <p className='block-about-description font-light mt-3'>
                                    On your wedding day, the photographer and cinematographer can become interlopers to your day. We do things differently.
                                    <br/>
                                    Your relationship and your wedding day are entirely unique.
                                    We are there to blend so seamlessly in to the defining moments that you are always at ease, always natural.
                                    The result is that we capture the essence which makes your special day what it is in a story-telling style.
                                    We feel honoured to fulfil this role.
                                    We care deeply that we preserve a true and inspiring portrayal of your day.
                                </p>
                                <button className='btn-bordered'>
                                    Check our blog
                                </button>
                            </div>
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
    height: 600px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

export default SectionAbout