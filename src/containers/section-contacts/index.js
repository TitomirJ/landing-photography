/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import FormContact from "./Form";
import { ReactComponent as Location } from '../../assets/images/pin.svg'
import { ReactComponent as Phone } from '../../assets/images/phone.svg'
import { ReactComponent as Mail } from '../../assets/images/mail.svg'
import img from "../../assets/images/Rectangle 35 (2).png";

const SectionContacts = () => {
    return (
        <section className='mt-5 position-relative'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 d-flex justify-content-center flex-column mt-5 mt-md-0">
                        <h2 className='font-bold'>Please contact us</h2>
                        <p className='mt-4 mb-3'>We appreciate every client and can make your dreams come true!
                            Do not hesitate to contact us.</p>
                        <div className='contacts-border'>
                            <div className='contacts-links'>
                                <Location
                                    className='contacts-icon'
                                />
                                <p>385 Noah Place Suite 878</p>
                            </div>
                            <div className='contacts-links mt-4'>
                                <Phone
                                    className='contacts-icon'
                                />
                                <p>877-255-7945</p>
                            </div>
                            <div className='contacts-links mt-4'>
                                <Mail
                                    className='contacts-icon'
                                />
                                <p>info@form.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 offset-md-1">
                        <div className='contacts-formBlock'>
                            <p className='font-bold mt-3 mb-3'>SEND US MESSAGE</p>
                            <FormContact/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contacts-bg'>
                <div css={ImageCSS}></div>
            </div>
        </section>
    );
}

const ImageCSS = css`
    background-image: url('${img}');
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`


export default SectionContacts
