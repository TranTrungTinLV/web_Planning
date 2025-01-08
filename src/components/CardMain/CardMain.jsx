import React, { useEffect } from 'react'
import hero from '../../assets/avatar.jpg'
import facebook from '../../assets/facebook.png'
import github from '../../assets/github.png'
import 'aos/dist/aos.css';
import AOS from 'aos';
const CardMain = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Thời gian hiệu ứng (ms)
    });
  }, []);
  return (


    <section className='relative' >
      <div className='max-w-7xl mx-auto'  data-aos="fade-right">
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between'>
          <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
            <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug text-white'>
              Xin Chào! <span className='text-indigo-600'>Đến với web của Tín</span>
            </h1>
            <p className='md:text-2xl text-xl mb-4 text-lime-500'>Web Developer & Designer</p>
          </div>
          <div className='md:w-1/2 flex justify-center '>
            <div>
              <img
                src={hero}
                alt="Avatar"
                className='w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover rounded-full shadow-lg'
              />
              <div className='flex justify-between mt-3 w-1/4 mx-auto'>
                <a href="https://www.facebook.com/" target='_blank'>
                  <img src={facebook} alt="" className='w-10' />
                </a>
                <a href="https://github.com/TranTrungTinLV" target='_blank'><img src={github} alt="" className='w-10' /></a>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>



  )
}

export default CardMain
