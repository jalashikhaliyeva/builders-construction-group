import React, { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";
import { ROUTER } from "@/shared/constant/router";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { getSettingsInfo } from "@/services/settingsInfo";
import Image from "next/image";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// Add the icons you want to use to the library
library.add(faFacebookSquare, faInstagram, faLinkedin);

const MyFooter = () => {
  const { push } = useRouter();
  const { t } = useTranslation();
  const [footerLogo, setFooterLogo] = useState(null);
  const [title, setTitle] = useState("");
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    async function fetchSettings() {
      try {
        const settings = await getSettingsInfo();
        setFooterLogo(settings.main_information.footer_logo);
        setTitle(settings.main_information.title);
        setSocialLinks(settings.socialLinks);
      } catch (error) {
        console.error("Error fetching header logo:", error);
      }
    }
    fetchSettings();
  }, []);

  const getFontAwesomeIcon = (iconClass) => {
    const iconName = iconClass.split(" ")[1].replace("fa-", "");
    return ["fab", iconName];
  };

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
            {footerLogo && (
              <Image
                width={230}
                height={230}
                src={footerLogo}
                alt="Header Logo"
                onClick={() => push(ROUTER.HOME)}
                style={{ cursor: "pointer" }}
              />
            )}
            <div>
              <h1 className="font-mukta text-4xl font-extrabold text-white">
                {title}
                {/* <span className="text-orange">.</span> */}
              </h1>
            </div>
            <p className="text-gray400 mt-[10px]">
              Lorem ipsum is placeholder text commonly used in the graphic
            </p>
            <div className="flex space-x-4 mt-[20px]">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={`https://${link.link}`}
                  aria-label={link.name}
                  className="bg-orange flex items-center justify-center transition-colors duration-300"
                >
                  <FontAwesomeIcon
                    icon={getFontAwesomeIcon(link.icon)}
                    style={{ width: "20px", height: "20px" }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row lg:mt-0">
          <nav className="lg:ml-[460px] mb-8 lg:mb-0 mr-8 ">
            <ul>
              <li onClick={() => push(ROUTER.HOME)} className="group mb-3">
                <a className="text-white hover:underline hover:text-blue-300">
                  Ana səhifə
                </a>
              </li>
              <li onClick={() => push(ROUTER.ABOUT)} className="group mb-4">
                <a className="text-white hover:underline hover:text-blue-300">
                  Haqqımızda
                </a>
              </li>
              <li onClick={() => push(ROUTER.PRODUCTS)} className="group mb-4">
                <a className="text-white hover:underline hover:text-blue-300">
                  Məhsullar
                </a>
              </li>
              <li onClick={() => push(ROUTER.SERVICES)} className="group mb-4">
                <a className="text-white hover:underline hover:text-blue-300">
                  Xidmətlər
                </a>
              </li>
              <li onClick={() => push(ROUTER.PROJECTS)} className="group mb-4">
                <a className="text-white hover:underline hover:text-blue-300">
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
