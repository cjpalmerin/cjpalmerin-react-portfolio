import React from 'react';
import '../App.css';

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Design() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 project-header">
                        <h2 className="project-headline">Design</h2>
                        <p>Here is a sample of some of the design projects that I worked on as a freelancer. Here I have branding, marketing, and product design projects.
                </p>
                        <p>For animation and video I will be linking to a youtube channel shortly.
        <br />
                            <br />
                            <br />
                            <h4 className="design-title">Branding</h4>
                        </p>
                    </div>
                    <div className="col-sm-12 projects-div relative">
                        <img src="../assets/images/design/branding/cjpalme-currentmedia_brand_identity-01.png" className="design-pic" alt="design" />
                        <img src="../assets/images/design/branding/intake_logo_copy-01.png" className="design-pic" alt="design" />
                        <img src="../assets/images/design/branding/PVSTCK-intake_logo-01.png" className="design-pic" alt="design" />
                        <img src="../assets/images/design/branding/moskatolife.png" className="design-pic" alt="design" />
                    </div>
                    <br />
                    <br />
                    <div className="col-sm-12 project-header">
                        <br />
                        <br />
                        <br />
                        <h4 className="design-title">Marketing</h4>
                    </div>
                    <div className="col-sm-12 projects-div relative">
                        <img src="../assets/images/design/marketing/FOURLOKO-musicfestPOS-01.png" className="design-pic" alt="design" />
                        <img src="../assets/images/design/marketing/HARDFRESCOS-POS2.png" className="design-pic" alt="design" />
                        <img src="../assets/images/design/marketing/andbmarketing.png" className="design-pic" alt="design" />
                    </div>
                    <div className="col-sm-12 project-header">
                    <br />
                    <br />
                    <br />
                        <h4 className="design-title">Product Design</h4>
                    </div>
                    <div className="col-sm-12 projects-div relative">
                        <img src="../assets/images/design/product/FOURLOKO-fourty_v3-02.png" className="design-pic" alt="design" />
                        <img src="../assets/images/design/product/FOURLOKO-fourty_v4-04.png" className="design-pic" alt="design" />
                    </div>
                    <div className="col-sm-12 projects-div relative">
                        <img src="../assets/images/design/product/dura.png" className="design-pic" alt="design" />
                        <img src="../assets/images/design/product/not-finished-yet.png" className="design-pic" alt="design" />
                        <img src="../assets/images/design/product/roheagle.png" className="design-pic" alt="design" />
                        <img src="../assets/images/design/product/teamusa.png" className="design-pic" alt="design" />

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

