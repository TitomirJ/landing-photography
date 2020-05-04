import React, {Component} from 'react';
import TestimonialsSlider from "../../components/testimonialsSlider";
import ScrollableAnchor from "react-scrollable-anchor";

class SectionTestimonials extends Component{
    render() {
        return (
            <ScrollableAnchor id={'section-testimonials'}>
                <section className='mt-5 testimonials'>
                    <div className='testimonials-bg'></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2 className='font-light text-uppercase p-4'>Testimonials</h2>
                            </div>
                            <div className="col-12">
                                <TestimonialsSlider/>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>
        );
    }
}

export default SectionTestimonials