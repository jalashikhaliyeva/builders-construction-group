import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaPhone } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";

const MyFooter = () => {
  return (
    <footer
      style={{
        paddingTop: "100px",
        backgroundColor: "var(--mainBlue)",
        marginTop: "90px",
      }}
      className="text-white p-8"
    >
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <div style={{ marginRight: "50px" }} className="mb-2">
            <svg
              className="mb-10"
              width="232"
              height="64"
              viewBox="0 0 232 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_28_574)">
                <path
                  d="M101.903 60.0019H73.6875V4.10205H99.9676C109.338 4.10205 115.88 10.3309 115.88 19.2482C115.88 24.761 113.422 29.1771 109.333 31.2853C114.489 33.3403 117.818 38.531 117.818 44.861C117.818 53.7784 111.274 60.0072 101.903 60.0046V60.0019ZM83.3673 26.7681H102.921C104.961 25.4451 106.123 23.116 106.123 20.0654C106.123 15.29 103.063 12.2049 98.3255 12.2049H83.3699V26.7681H83.3673ZM100.264 51.9017C105.073 51.9017 108.061 48.8619 108.061 43.9666C108.061 40.059 105.987 37.3145 102.647 36.4335H83.3673V51.9017H100.264Z"
                  fill="white"
                />
                <path
                  d="M58.9786 31.4344C55.7172 21.6094 44.0145 17.164 35.515 22.2695C30.3297 25.3866 27.8242 31.8231 29.3941 38.1744C29.8064 39.8487 30.4116 41.4725 31.0591 43.5381C26.0429 39.4334 21.3306 35.5817 16.6236 31.7246C11.9378 27.8915 7.25724 24.0503 2.39961 20.0708C2.10097 20.7522 1.84725 21.2314 1.67546 21.7398C-3.00774 35.7094 2.34147 50.5176 15.0379 58.7508C27.1793 66.6221 42.2729 65.6105 52.3053 55.9292C59.2825 49.1999 62.1474 40.9853 58.9786 31.4344ZM44.6013 44.6055C39.8123 44.6055 35.9299 40.6925 35.9299 35.8692C35.9299 31.0458 39.8123 27.1355 44.6013 27.1355C49.3902 27.1355 53.2752 31.0458 53.2752 35.8692C53.2752 40.6925 49.3928 44.6055 44.6013 44.6055Z"
                  fill="white"
                />
                <path
                  d="M62.9058 37.5967C65.2527 27.2446 61.2302 11.5847 46.7075 3.72141C34.1062 -3.1037 19.1475 0.191732 11.3906 7.68497C12.1306 7.90325 12.7755 8.10555 13.4256 8.2839C24.3593 11.3078 35.3035 14.2812 46.2133 17.3849C48.5417 18.0477 50.8701 18.9395 52.9659 20.14C58.7776 23.462 61.6927 28.7592 62.5014 35.3341C62.5702 35.8958 62.623 36.4601 62.697 37.0217C62.7155 37.1522 62.7869 37.2773 62.9058 37.5941V37.5967Z"
                  fill="white"
                />
                <path
                  d="M120.871 31.9852C120.871 16.5409 132.689 3.99805 147.191 3.99805C160.187 3.99805 170.995 14.0467 173.122 27.2258H163.634C161.71 19.2108 155.08 13.3014 147.191 13.3014C137.829 13.3014 130.188 21.673 130.188 31.9852C130.188 42.2974 137.829 50.6531 147.191 50.6531C155.034 50.6531 161.632 44.8076 163.589 36.8858H173.093C170.92 49.9877 160.142 59.9565 147.191 59.9565C132.686 59.9565 120.871 47.4136 120.871 31.9852Z"
                  fill="white"
                />
                <path
                  d="M221.643 59.9247L218.822 53.5016C218.755 53.5628 218.691 53.632 218.625 53.6906C214.106 57.6142 208.329 59.954 202.056 59.954C187.538 59.954 175.736 47.4112 175.736 31.9828C175.736 16.5544 187.538 3.99561 202.056 3.99561C213.298 3.99561 222.912 11.5155 226.668 22.0752H216.449C213.453 16.8047 208.127 13.2989 202.056 13.2989C192.678 13.2989 185.054 21.6706 185.054 31.9828C185.054 42.295 192.678 50.6507 202.056 50.6507C207.042 50.6507 211.512 48.2922 214.586 44.5416C214.653 44.4618 214.709 44.3713 214.775 44.2914L209.393 32.0467H219.75L232.002 59.9247H221.645H221.643Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_28_574">
                  <rect width="232" height="64" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div>
              <h1 className="font-mukta text-4xl font-extrabold text-white">
                Buildings construction group
                <span className="text-orange">.</span>
              </h1>
            </div>
            <p className="text-gray400 mt-[10px]">
              Lorem ipsum is placeholder text commonly used in the graphic
            </p>
            <div className="flex space-x-4 mt-[20px]">
              <a
                href="#"
                aria-label="Instagram"
                className="bg-orange flex items-center justify-center  hover:text-purple-400 transition-colors duration-300"
              >
                <FaInstagram style={{ width: "20px", height: "20px" }} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="bg-orange flex items-center justify-center hover:text-blue-400 transition-colors duration-300"
              >
                <FaFacebook style={{ width: "20px", height: "20px" }} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="bg-orange flex items-center justify-center hover:text-blue-400 transition-colors duration-300"
              >
                <FaLinkedin style={{ width: "20px", height: "20px" }} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="bg-orange flex items-center justify-center hover:text-blue-200 transition-colors duration-300"
              >
                <AiFillTwitterCircle
                  style={{ width: "20px", height: "20px" }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row lg:mt-0">
          <nav className="lg:ml-[460px] mb-8 lg:mb-0 mr-8 ">
            <ul>
              <li className="group mb-3">
                <a
                  href="#"
                  className="text-white hover:underline hover:text-blue-300"
                >
                  Ana səhifə
                </a>
              </li>
              <li className="group mb-4">
                <a
                  href="#"
                  className="text-white hover:underline hover:text-blue-300"
                >
                  Haqqımızda
                </a>
              </li>
              <li className="group mb-4">
                <a
                  href="#"
                  className="text-white hover:underline hover:text-blue-300"
                >
                  Məhsullar
                </a>
              </li>
              <li className="group mb-4">
                <a
                  href="#"
                  className="text-white hover:underline hover:text-blue-300"
                >
                  Xidmətlər
                </a>
              </li>
              <li className="group mb-4">
                <a
                  href="#"
                  className="text-white hover:underline hover:text-blue-300"
                >
                  Layihələr
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex-col gap-6 xl2:ml-12">
            <div className="flex items-center text-white mb-10 gap-3">
              <IoIosMail className="text-white text-5xl" />
              <div>
                <p className="text-xl">mail@bcgroupaz.com</p>
              </div>
            </div>
            <div className="flex items-center text-white mb-10 gap-3">
              <TbWorld className="text-white text-5xl" />
              <div>
                <p className="text-xl">www.bcgroupaz.com</p>
              </div>
            </div>
            <div className="flex items-center text-white mb-10 gap-3">
              <FaPhone className="text-white text-4xl" />
              <div>
                <p className="text-xl">+012 000 00 00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-xl text-center border-t border-gray-700 pt-4">
        <p>© 2023 bcgroupaz. All Rights Reserved. With love by Markup</p>
      </div>
    </footer>
  );
};

export default MyFooter;
