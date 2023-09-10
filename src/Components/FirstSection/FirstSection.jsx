import React from 'react';
import './FirstSection.css'
import { Col, Container, Row } from 'react-bootstrap';
import first from '../../img/why-us-1.webp'
import second from '../../img/why-us-2.webp'
import third from '../../img/why-us-3.webp'

export default function FirstSection() {
    return (
        <div className='to__who '>
            <div className="describtion text-center p-5">
                <h2> من المستفيدين من تعليمي ؟</h2>
                <p>الطلاب ، المعلمين و أولياء الامور من خلال دورات تعليمية مخصصة لكل فئة</p>
            </div>
            <Container className='d-flex flex-wrap justify-content-between '>


                <div className="holder holder-b">
                    <div className="pic pic-b  " >
                        <img src={second} alt="" />
                        <div className="txt txt-b">
                            <h3>معلم</h3>
                        </div>
                    </div>

                </div>
                <div className="holder  holder-a">
                    <div className="pic pic-a   ">
                        <img src={first} alt="" width={'100%'} />
                        <div className="txt txt-a">
                            <h3>طالب</h3>
                        </div>
                    </div>

                </div>
                <div className="holder flex-grow-5 holder-c">
                    <div className="pic pic-c ">
                        <img src={third} alt="" />
                        <div className="txt txt-c">
                            <h3>ولي امر </h3>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}
