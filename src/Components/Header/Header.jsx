import './Header.css';

export default function Header() {
  return (
    <div className='header py-5 '>
      <div className="description pt-5 mt-5 text-center ">
      <h1 className='fw-bolder'>أول منصة تعليمية تفاعلية للطلاب وأولياء الأمور و المعلمين</h1>
      <p className='text-secondary fs-5'>تتيح محتوى تفاعلي مجاني لإعداد كوادر ناجحة تواكب التطور التكنولوجي لدعم مستقبل مصر الرقمي</p>
      <button  className='rounded border-0 fs-4  btn-red px-5 fw-bolder'>ابدأ الآن</button>
      </div>
    </div>
  )
}
