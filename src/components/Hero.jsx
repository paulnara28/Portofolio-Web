import React from "react";
import hero from "../assets/images/gambar1.png";

const Hero = () => {
  const social_media = [
    { icon: "logo-instagram", url: "https://www.instagram.com/paul_nara28" },
    { icon: "logo-linkedin", url: "https://www.linkedin.com/in/paul-nara123/" },
    { icon: "logo-github", url: "https://github.com/paulnara28" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Halo
              <br />
            </span>
            Saya <span>Paul Nara</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Mahasiswa Informatika | Web Dev & UI/UX Design
          </h4>

          <a
            href="https://wa.me/6285337318761"
            className="btn-primary mt-8 hover:bg-white hover:text-cyan-600 inline-block"
            style={{ maxWidth: "144px", width: "100%" }}
          >
            Contact Me
          </a>

          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media.map((media) => (
              <a
                key={media.icon}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <ion-icon name={media.icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
