import React from 'react';
import { Navigation } from "../../components/navigation";
import Slider from "../../components/headerSlider/Slider";
import logo from "../../assets/images/logo.png"
import logoWht from "../../assets/images/Logo 2.png"
import { ReactComponent as Instagram } from '../../assets/images/instagram-sketched.svg'
import { ReactComponent as Facebook } from '../../assets/images/4202107-facebook-fb-logo-social-social-media 1.svg'
import { ReactComponent as Youtube} from '../../assets/images/youtube-black 1.svg'
import ScrollableAnchor from "react-scrollable-anchor";

const Header = () => {
    return (
        <ScrollableAnchor id={'header'}>
            <header className='header'>
                <div className="container">
                    <div className="row">
                        <nav className="col-12 col-md-7 mt-3">
                            <div className="row align-items-center">
                                <div className="col-2">
                                    <img className='logo d-none d-md-block' src={logo} alt=""/>
                                    <img className='logo d-block d-md-none' src={logoWht} alt=""/>
                                </div>
                                <div className="col-10">
                                    <Navigation/>
                                </div>
                                <div className="col-md-8 offset-md-1 blockArticle-header">
                                    <h1 className='header-title font-bold'>
                                        We catch your happy moments
                                    </h1>
                                    <p className='header-description font-light mt-4'>
                                        By choosing our agency you will obtain unforgetable memories and amazing experience. We will help you to make your dreams come true!
                                    </p>
                                    <div className="row align-items-center mt-5">
                                        <div className="col-6 col-md-5">
                                            <button className='btn-main w-100'>
                                                Contact us
                                            </button>
                                        </div>
                                        <div className="col-4">
                                            <div className="row">
                                                <div className="col-4">
                                                    <Facebook
                                                        className='svg-contacts'
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <Instagram
                                                        className='svg-contacts svg-inst'
                                                    />
                                                </div>
                                                <div className="col-4">
                                                    <Youtube
                                                        className='svg-contacts'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <Slider/>
                    </div>
                </div>
            </header>
        </ScrollableAnchor>
    );
}

export default Header;
