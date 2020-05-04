import React from 'react';
import { Input } from 'antd';

export const SectionSubscribe = () => (
    <section className='mt-5 subscribe'>
        <div className="container">
            <div className="row">
                <div className="col-12 mt-5 d-flex justify-content-center">
                    <div className='subscribe-block'>
                        <h5 className='font-bold'>Subscribe for updates</h5>
                        <div className="row mt-4 mb-3">
                            <div className="col-12 col-md-8">
                                <Input placeholder='Your Email'/>
                            </div>
                            <div className="col-12 col-md-4 mt-2 mt-md-0">
                                <button type="submit" className='btn-main w-100 text-uppercase'>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <p className='subscribe-description font-light'>We value your privacy. None of the details supplied will be shared with external parties</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
