import React from 'react'
import './Recomended.css'

const Recomended = () => {
    return (
        <div className='container__recomended'>
            <h2>Basics Protective Frequently</h2>
           <div className='card__button'>
               <div className='listing__recomended'>
                   <figure><img className='img__recomended' src='https://www.flaticon.es/svg/static/icons/svg/3181/3181989.svg'></img></figure>
                   <div className='container__recomended'>
                       <h3>1. Wash your hands frequently</h3>
                       <p>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water..</p>
                   </div>
               </div>
           </div>
           <div className='card__button'>
               <div className='listing__recomended'>
                   <figure><img className='img__recomended' src='https://www.flaticon.es/svg/static/icons/svg/3181/3181862.svg'></img></figure>
                   <div className='container__recomended'>
                       <h3>2. Maintain social distancing</h3>
                       <p>Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.</p>
                   </div>
               </div>
           </div>
           <div className='card__button'>
               <div className='listing__recomended'>
                   <figure><img className='img__recomended' src='https://www.flaticon.es/svg/static/icons/svg/3182/3182079.svg'></img></figure>
                   <div className='container__recomended'>
                       <h3>3. Avoid touching eyes, nose and mouth</h3>
                       <p>Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.</p>
                   </div>
               </div>
           </div>
           <div className='card__button'>
               <div className='listing__recomended'>
                   <figure><img className='img__recomended' src='https://www.flaticon.es/svg/static/icons/svg/3181/3181868.svg'></img></figure>
                   <div className='container__recomended'>
                       <h3>4. If you have fever, cough and difficulty breathing, seek medical care early</h3>
                       <p>Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.</p>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Recomended
