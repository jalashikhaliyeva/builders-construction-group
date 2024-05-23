import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
const MyFooter = () => {
  return (
    <footer
      style={{
        padding: "100px",
        backgroundColor: "var(--mainBlue)",
        marginTop: "90px",
      }}
      className=" text-white p-8"
    >
      <div className="container mx-auto flex">
        <div className="w-1/3">
          <div style={{ marginRight: "50px" }} className="mb-4">
            <div>
              <h1 className="font-mukta text-4xl font-extrabold text-white ">
                Buildings construction group
                <span className="text-orange">.</span>
              </h1>
            </div>
            <p className="text-gray400  mt-[10px]">
              Lorem ipsum is placeholder text commonly used in the graphic
            </p>
            <div
              style={{ marginTop: "45px" }}
              className="flex space-x-4 mt-[20px] "
            >
              <a
                href="#"
                aria-label="Facebook"
                className="bg-orange  flex items-center justify-center "
              >
                <FaInstagram style={{ width: "30px", height: "30px" }} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="bg-orange  flex items-center justify-center"
              >
                <FaFacebook style={{ width: "30px", height: "30px" }} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="bg-orange flex items-center justify-center"
              >
                <FaLinkedin style={{ width: "30px", height: "30px" }} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="bg-orange flex items-center justify-center"
              >
                <AiFillTwitterCircle
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="w-2/3 flex ">
          <div>
            <nav class="ml-[460px]">
              <ul>
                <li class="group mb-3">
                  <a
                    href="#"
                    class="text-white hover:underline hover:text-blue-300"
                  >
                    Ana səhifə
                  </a>
                </li>
                <li class="group mb-4">
                  <a
                    href="#"
                    class="text-white hover:underline hover:text-blue-300"
                  >
                    Haqqımızda
                  </a>
                </li>
                <li class="group mb-4">
                  <a
                    href="#"
                    class="text-white hover:underline hover:text-blue-300"
                  >
                    Məhsullar
                  </a>
                </li>
                <li class="group mb-4">
                  <a
                    href="#"
                    class="text-white hover:underline hover:text-blue-300"
                  >
                    Xidmətlər
                  </a>
                </li>
                <li class="group mb-4">
                  <a
                    href="#"
                    class="text-white hover:underline hover:text-blue-300"
                  >
                    Layihələr
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div
            style={{ marginLeft: "150px" }}
            class="flex-col grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div class="flex items-center text-white mb-10 gap-3">
              <IoIosMail class="text-white text-4xl" />
              <div>
                <p class="text-xl">mail@bcgroupaz.com</p>
              </div>
            </div>
            <div class="flex items-center text-white mb-10 gap-3">
              <TbWorld  class="text-white text-4xl" />
              <div>
                <p  class="text-xl">www.bcgroupaz.com</p>
              </div>
            </div>
            <div class="flex items-center text-white mb-10 gap-3">
              <FaPhone class="text-white text-3xl" />
              <div>
                <p class="text-xl">+012 000 00 00</p>
              </div>
            </div>
        
          </div>
        </div>
      </div>
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p>© 2023 bcgroupaz. All Rights Reserved. With love by Markup</p>
      </div>
    </footer>
  );
};

export default MyFooter;
