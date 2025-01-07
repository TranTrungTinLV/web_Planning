import React, { useState } from 'react'
import Flutter from '../../assets/flutter.png'
import Dart from '../../assets/dart.jpg'
import Firebase from '../../assets/firebase.png'
import Stringee from '../../assets/stringee.png'
import OSM from '../../assets/osm.png'



const About = () => {
  const techDetails = {
    Flutter: {
      title: "Flutter",
      description:
        "Framework mã nguồn mở dùng để phát triển ứng dụng cho các nền tảng iOS và Android. Nó hoạt động bằng cách sử dụng Dart, một ngôn ngữ lập trình của Google, để xây dựng các giao diện người dùng và tích hợp các chức năng. Flutter cung cấp một cấu trúc mã để tạo ra các giao diện người dùng đẹp và trải nghiệm tốt, cùng với các công cụ và tài nguyên để tối ưu hóa hiệu suất và tốc độ phát triển.",
    },
    Dart: {
      title: "Dart",
      description:
        "Dart là một ngôn ngữ lập trình hướng đối tượng (OOP) với đầy đủ các đặc điểm như class-based, tính kế thừa và đa hình. Điều này giúp các lập trình viên tổ chức mã nguồn một cách rõ ràng và dễ quản lý. Lập trình hướng đối tượng cũng giúp tái sử dụng mã và phát triển các ứng dụng phức tạp hơn một cách hiệu quả.",
    },
    Firebase: {
      title: "Firebase",
      description:
        "Firebase là một nền tảng để phát triển ứng dụng di động và trang web, bao gồm các API đơn giản và mạnh mẽ mà không cần backend hay server.",
    },
    Stringee: {
      title: "Stringee",
      description:
        "Stringee là nền tảng (SDK/API) cung cấp tính năng Nghe - Gọi - Chat - SMS, có thể tích hợp nhanh vào các ứng dụng web.",
    },
    OSM: {
      title: "OpenStreetMap",
      description:
        "OpenStreetMap là một nền tảng bản đồ mã nguồn mở, cho phép tùy chỉnh và tích hợp bản đồ trong ứng dụng của bạn.",
    },
  };

  const [selectedTech, setSelectedTech] = useState(null);


  return (
    <div className='relative' id='about'>
      <div className='bg-gray-200'>
        <h1 className='text-center text-red-500 text-3xl py-3'>
          Về dự án
        </h1>
      </div>
      <section className=''>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row justify-center items-center lg:h-[80vh]'>
            <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
              <div className='items-center flex'>
                {selectedTech &&
                  (<div>
                    <h3 className='text-2xl font-semibold text-blue-500'> {techDetails[selectedTech].title}</h3>
                    <p className='mt-4 text-lg text-white font-thin text-justify'>
                      {techDetails[selectedTech].description}
                    </p>
                  </div>)
                }

              </div>
              <div className=' border border-red-200 bg-gray-800 rounded-lg p-8 flex flex-col gap-8 items-center shadow-lg shadow-gray-700'>
                <h3 className='text-2xl font-bold text-indigo-400'>Công Nghệ Chính Trong Phát Triển Ứng Dụng</h3>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-6'>
                  {Object.keys(techDetails).map((tech) => (
                    <div
                      key={tech}
                      className="flex flex-col items-center justify-center w-32 h-32 border border-gray-500 rounded-lg shadow-md shadow-gray-600 bg-black cursor-pointer"
                      onClick={() => setSelectedTech(tech)}
                    >
                      <img
                        src={
                          tech === "Flutter"
                            ? Flutter
                            : tech === "Dart"
                              ? Dart
                              : tech === "Firebase"
                                ? Firebase
                                : tech === "Stringee"
                                  ? Stringee
                                  : OSM
                        }
                        alt={tech}
                        className="w-14 h-14 object-contain"
                      />
                      <span className="font-semibold text-sm lg:text-base text-white mt-2">
                        {techDetails[tech].title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>


    </div>


  )
}

export default About
