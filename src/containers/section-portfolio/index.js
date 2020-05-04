import React from 'react';
import TabsBlock from "../../components/tabs";
import ScrollableAnchor from "react-scrollable-anchor";

const SectionPortfolio = () => {
    return (
        <ScrollableAnchor id={'section-portfolio'}>
            <section className='mt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className='font-light text-uppercase'>Portfolio</h2>
                        </div>
                        <div className="col-12 mt-3">
                            <TabsBlock/>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollableAnchor>
    );
}

export default SectionPortfolio
