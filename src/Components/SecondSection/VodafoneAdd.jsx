import React from 'react'
import './SecondSection.css'
import voda from '../../img/voda.PNG'
import router from '../../img/router.PNG'
import wifi from '../../img/wifi.PNG'
import { Container } from 'react-bootstrap'

export default function VodafoneAdd() {
    return (
        <Container>
            <div className='voda pt-3 d-flex justify-content-between'>
            <div className=''>
                <img src={wifi} alt="" />

            </div>
            <div className='text-center '>
                <img src={router} alt="" />
                <h3 className='text-light'>إستخدام الموقع لن يحسب من باقة الانترنت لعملاء ڤودافون</h3>
            </div>
            <div className=''>
                <img src={voda} alt="" />

            </div>
        </div>
        </Container>
    )
}
