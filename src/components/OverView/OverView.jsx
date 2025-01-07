import React, { useState } from 'react'
import logo_app from '../../assets/logo_app.jpg'
import qr_app from '../../assets/qr_app.png'

const OverView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <div className='relative' id='overview'>
      <div className='bg-gray-200'>
        <h1 className='text-center text-red-500 text-3xl py-3'>
          Tổng Quan dự án
        </h1>
      </div>
      <section className=''>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between'>
            <div className='md:w-1/2 relative flex '>
              <img src={logo_app} alt="levi" className='lg:h-[60vh] h-96 rounded-2xl' />
            </div>
            <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
              <div className='mx-auto max-w-xl flex flex-col'>
                <p className='text-gray-100 mt-3 text-2xl text-justify'>
                  Ứng dụng đa năng hỗ trợ người dùng trong việc lập kế hoạch và quản lý sự kiện một cách dễ dàng và hiệu quả. Được phát triển với các tính năng mạnh mẽ, ứng dụng tập trung vào việc đơn giản hóa các công việc thường ngày liên quan đến lập kế hoạch sự kiện.
                </p>
                <div className='flex justify-start mt-5  md:mt-5 md:justify-end  w-1/3'>
                  <button onClick={handleOpenModal} className='bg-red-500 text-white px-3 py-2 w-max rounded-md' data-modal-target='modal' data-modal-toggle="modal"><a>
                    Tải App</a>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      {/* Modal */}
      {isModalOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
          onClick={handleCloseModal}
        >
          <div
            className='bg-white p-4 rounded-lg shadow-lg relative'
            onClick={(e) => e.stopPropagation()} // Ngăn đóng modal khi click vào bên trong
          >
            {/* Header */}
            <div className='flex items-center justify-between p-4 border-b'>

              <button
                className='text-gray-400 hover:text-gray-900'
                onClick={handleCloseModal}
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className='p-4 space-y-4'>
              <img src={qr_app} alt="" />
              <p className='text-base text-gray-500 ml-2'>
                Link app: <a href="http://surl.li/homybw" className='underline text-blue-400'>Tại đây</a>
              </p>
            </div>


          </div>
        </div>
      )}

    </div>


  )
}

export default OverView
