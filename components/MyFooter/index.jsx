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
import style from './myfooter.module.css'

library.add(faFacebookSquare, faInstagram, faLinkedin);

const MyFooter = () => {
  const { push } = useRouter();
  const { t } = useTranslation();
  const [footerLogo, setFooterLogo] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [socialLinks, setSocialLinks] = useState([]);
  const [contact, setContact] = useState({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    async function fetchSettings() {
      try {
        const settings = await getSettingsInfo();
        setFooterLogo(settings.main_information.footer_logo);
        setTitle(settings.main_information.title);
        setDescription(settings.main_information.desc); 
        setSocialLinks(settings.socialLinks);
        setContact(settings.contact); 
      } catch (error) {
        console.error("Error fetching settings info:", error);
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
      className={`${style.footerMg} text-white p-8 footer-margin-left`}
    >
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <div style={{ marginRight: "50px" }} className="mb-2">
            {footerLogo && (
              <Image
                width={100}
                height={100}
                src={footerLogo}
                alt="Footer Logo"
                onClick={() => push(ROUTER.HOME)}
                style={{
                  cursor: "pointer",
                  marginBottom: "14px",
                  filter: "brightness(0) invert(1)"
                }}
                
              />
            )}
            <div>
              <h1 className="font-mukta text-4xl font-extrabold text-white">
                {title}
              </h1>
            </div>
            <p className="text-gray400 mt-[10px]">{description}</p>
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
              <li
                style={{ cursor: "pointer" }}
                onClick={() => push(ROUTER.HOME)}
                className="group mb-3"
              >
                <a className="text-white hover:underline hover:text-blue-300 ">
                  {t("ana səhifə")}
                </a>
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => push(ROUTER.ABOUT)}
                className="group mb-4"
              >
                <a className="text-white hover:underline hover:text-blue-300">
                  {t("haqqımızda")}
                </a>
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => push(ROUTER.PRODUCTS)}
                className="group mb-4"
              >
                <a className="text-white hover:underline hover:text-blue-300">
                  {t("məhsullar")}
                </a>
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => push(ROUTER.SERVICES)}
                className="group mb-4"
              >
                <a className="text-white hover:underline hover:text-blue-300">
                  {t("xidmətlər")}
                </a>
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => push(ROUTER.PROJECTS)}
                className="group mb-4"
              >
                <a className="text-white hover:underline hover:text-blue-300">
                  {t("layihələr")}
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex-col gap-6 xl2:ml-12">
            <div className="flex items-center text-white mb-10 gap-3">
              <IoIosMail className="text-white text-4xl" />
              <div>
                <p className="text-xl">{contact.email}</p>
              </div>
            </div>
            <div className="flex items-center text-white mb-10 gap-3">
              <TbWorld className="text-white text-6xl" />
              <div>
                <p className="text-xl">{contact.address}</p>
              </div>
            </div>
            <div className="flex items-center text-white mb-10 gap-3">
              <FaPhone className="text-white text-3xl" />
              <div>
                <p className="text-xl">{contact.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-xl text-center border-t border-gray-700 pt-4">
        <p>© 2024 bcgroupaz. All Rights Reserved. With love by Markup</p>
      </div>
    </footer>
  );
};

export default MyFooter;
