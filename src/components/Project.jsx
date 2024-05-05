import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/labborrow.png";
import project2 from "../assets/images/bookstore.png";
import project3 from "../assets/images/petshop.png";
import project4 from "../assets/images/barkas.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "LabBorrow Web",
      github_link: "https://github.com/paulnara28/Aplikasi-Labborrow",
      description: "Website Peminjaman Barang Lab Kampus",
    },
    {
      img: project2,
      name: "BookStore App",
      github_link: "https://github.com/paulnara28/bookstore",
      description: "Website Penjualan Buku Online",
    },
    {
      img: project3,
      name: "Petshop App",
      github_link: "https://github.com/paulnara28/Petshop-App",
      description: "Aplikasi Petshop Mobile Prototype",
    },
    {
      img: project4,
      name: "Barkas App",
      github_link: "https://github.com/paulnara28/Barkas-App",
      description: "Aplikasi Penjualan Barang Bekas Mobile Prototype",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold mt-10">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 mb-7 text-lg">
          Project Yang Telah Dikerjakan
        </p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="mb-10 h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img
                    src={project_info.img}
                    alt=""
                    className="rounded-lg mb-5 w-full lg:w-auto"
                  />
                  <h3 className="text-xl mb-5">{project_info.name}</h3>
                  <p className="text-sm mb-5">{project_info.description}</p>
                  <div className="flex gap-4 mb-10">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-4 py-2 inline-block rounded-md hover:bg-white hover:text-cyan-600 transition-colors duration-300"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
