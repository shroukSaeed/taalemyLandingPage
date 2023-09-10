import React from 'react'
import './SecondSection.css'
import cap1 from '../../img/cap1.PNG'
import cap2 from '../../img/Cap2.PNG'
import cap3 from '../../img/Cap3.PNG'
import cap4 from '../../img/Cap4.PNG'
import VodafoneAdd from './VodafoneAdd'

export default function SecondSection() {
    return (
        <>
            <div className="first__part d-flex   justify-content-between align-items-center p-5">

                <div className="txt-new w-50 p-5">
                    <h1 className='fw-bolder'>دورات تدريبية لشرح المناهج الدراسية</h1>
                    <h5>من الصف الرابع الابتدائي حتي الثالث الثانوي</h5>
                    <p className='text-secondary'>تعرّف على دورات المناهج الدراسية واستكشفها بسهولة من خلال شرح مبسط من قِبل المعلمين في مقاطع فيديو مميزة.</p>
                </div>
                <div className="previewe ">
                    <img src={cap1} />
                </div>

            </div>
            <div className="sec__part d-flex   justify-content-between align-items-center p-5">
                <div className="txt-new w-50 p-4">
                    <h1 className='fw-bolder'>بنوك أسئلة و ملخصات</h1>
                    <p className='text-secondary'>تتيح المنصة بنوك أسئلة و ملخصات للعديد من المواد الدراسية لمساعدة الطلاب في رفع مستواهم الدراسي</p>
                </div>
                <div className="previewe ">
                    <img src={cap2} />
                </div>
            </div>
            <div className="thrd__part d-flex   justify-content-between align-items-center p-5">
                <div className="txt-new w-50 mx-5 p-5">
                    <h1 className='fw-bolder'>بناء القدرات وتطوير المهارات</h1>
                    <p className='text-secondary'>تهتم المنصة ببناء القدرات وتطوير المهارات لدي الطلاب والمعلمين و أولياء الأمور عن طريق تقديم دورات تدريبية متخصصة لمساعدتهم في تحقيق أهدافهم التعليمية والحياتية</p>
                </div>
                <div className="previewe ">
                    <img src={cap3} />
                </div>
            </div>
            <div className="forth__part d-flex   justify-content-between align-items-center p-5">
                <div className="txt-new w-50 p-5">
                    <h1 className='fw-bolder'>مسابقات تفاعلية</h1>
                    <p className='text-secondary'>توفر المنصة مسابقات تفاعلية تشجيعية تهدف الى تحفيز المشاركين و تعزيز معرفتهم في مختلف المجالات</p>
                </div>
                <div className="previewe ">
                    <img src={cap4} />
                </div>
            </div>
            <VodafoneAdd/>

        </>

    )
}
