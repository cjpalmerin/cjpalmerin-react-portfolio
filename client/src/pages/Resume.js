import React from 'react';
import '../App.css';

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Resume() {
    return (
        <>
        <Navbar />
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <img src='../assets/images/palmerinwanekCJ-resume_2020-02.png' alt="CJ Resume" id="resume" />
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
