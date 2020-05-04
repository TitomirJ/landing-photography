import React from 'react';
import { Navigation } from "../../components/navigation";
import logo from "../../assets/images/Logo 2.png"
import { ReactComponent as Instagram } from '../../assets/images/instagram-sketched.svg'
import { ReactComponent as Facebook } from '../../assets/images/4202107-facebook-fb-logo-social-social-media 1.svg'
import { ReactComponent as Youtube} from '../../assets/images/youtube-black 1.svg'

export const Footer = () => (
    <footer className='footer'>
        <div className="container">
            <div className="row pt-5">
                <div className="col-4">
                    <img className='logo' src={logo} alt=""/>
                </div>
                <div className="col-8 d-flex align-items-center justify-content-end">
                    <div className='footer-nav'>
                        <Navigation/>
                    </div>
                </div>
                <div className="col-4 mt-5 mb-3">
                    <p className='footer-rights'>2019 © Apiko. All rights reserved.</p>
                </div>
                <div className="col-8 mt-5 mb-3 d-flex align-items-center justify-content-end">
                    <div className="footer-icons">
                        <Facebook
                            className='svg-contacts'
                        />
                        <Instagram
                            className='svg-contacts svg-inst'
                        />
                        <Youtube
                            className='svg-contacts'
                        />
                    </div>
                </div>
            </div>
        </div>
    </footer>
);