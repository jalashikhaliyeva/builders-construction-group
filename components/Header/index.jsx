import { useRouter } from "next/router";
import { ROUTER, updateRouter } from "../../shared/constant/router";
import React, { Fragment, useEffect, useState } from "react";
import style from "./header.module.css";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import FastContactModal from "../FastContact";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import LanguageSwitcher from "@/shared/LanguageSwitcher";
import { useTranslation } from "react-i18next";

function HeaderHome() {
  // const { t } = useTranslation();
  // const { push, pathname } = useRouter();
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [hydrated, setHydrated] = useState(false);
  const { t, ready } = useTranslation();
  const { push, pathname } = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);


  useEffect(() => {
    setHydrated(true);
    // updateRouter(); 
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  if (!hydrated) {
    return null; // or return a loading spinner
  }
  const isActive = (route) => pathname === route;
  return (
    <div
      style={{ width: "100%" }}
      className={`flex items-center justify-between ${style.nav}`}
    >
      <ul className="list-none list-inside flex gap-50">
        <li
          onClick={() => push(ROUTER.HOME)}
          className={`${style.headLi} ${
            isActive(ROUTER.HOME) ? style.active : ""
          }`}
        >
          {t("ana səhifə")}
        </li>
        <li
          onClick={() => push(ROUTER.ABOUT)}
          className={`${style.headLi} ${
            isActive(ROUTER.ABOUT) ? style.active : ""
          } `}
        >
          {t("haqqımızda")}
        </li>

        <div className="flex gap-0 pr-4">
          <Menu
            as="div"
            className="relative inline-block text-left flex gap-0 pr-4"
          >
            <Menu.Button
              className={`${style.headLiLast} inline-flex items-center gap-2 rounded-md  px-6 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white`}
            >
              {t("fəaliyyətimiz")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute z-25000 w-64 origin-top-left rounded-xl border border-white/5 bg-white p-3 text-sm/6 text-black [--anchor-gap:var(--spacing-1)] focus:outline-none shadow-md  mt-3"
                anchor="bottom-left"
              >
                <Menu.Item as="div" className="hover:bg-gray-200 ">
                  {({ active }) => (
                    <button
                      onClick={() => push(ROUTER.EQUIPMENTS)}
                      className={`group flex w-full items-center gap-2 rounded-lg py-3 px-6 data-[focus]:bg-white/10 ${
                        active ? "bg-gray-200" : ""
                      }`}
                    >
                      <span
                        style={{ paddingBottom: "10px", paddingTop: "10px", fontWeight:"600" }}
                        className={`${style.menuOptions} ${
                          active ? "text-blue-500" : ""
                        } text-lg`}
                      >
                        {t("avadanlıqlar")}
                      </span>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item as="div" className="hover:bg-gray-200">
                  {({ active }) => (
                    <button
                      onClick={() => push(ROUTER.PRODUCTS)}
                      className={`group flex w-full items-center gap-2 rounded-lg py-3 px-6 data-[focus]:bg-white/10 ${
                        active ? "bg-gray-200" : ""
                      }`}
                    >
                      <span
                        style={{ paddingBottom: "10px" ,fontWeight:"600" }}
                        className={`${style.menuOptions}  ${
                          active ? "text-blue-500" : ""
                        } text-lg`}
                      >
                        {t("məhsullar")}
                      </span>
                    </button>
                  )}
                </Menu.Item>
                <div className="my-1 h-px bg-white/5" />
                <Menu.Item as="div" className="hover:bg-gray-200">
                  {({ active }) => (
                    <button
                      onClick={() => push(ROUTER.SERVICES)}
                      className={`group flex w-full items-center gap-2 rounded-lg py-3 px-6 data-[focus]:bg-white/10 ${
                        active ? "bg-gray-200" : ""
                      }`}
                    >
                      <span
                        style={{ paddingBottom: "10px" ,fontWeight:"600"}}
                        className={`${style.menuOptions}  ${
                          active ? "text-blue-500" : ""
                        } text-lg`}
                      >
                        {t("xidmətlər")}
                      </span>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item as="div" className="hover:bg-gray-200">
                  {({ active }) => (
                    <button
                      onClick={() => push(ROUTER.PROJECTS)}
                      className={`group flex w-full items-center gap-2 rounded-lg py-3 px-6 data-[focus]:bg-white/10 ${
                        active ? "bg-gray-200" : ""
                      }`}
                    >
                      <span
                        style={{ paddingBottom: "10px" ,fontWeight:"600"}}
                        className={`${style.menuOptions} ${
                          active ? "text-blue-500" : ""
                        } text-lg`}
                      >
                        {t("layihələr")}
                      </span>
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </ul>

      <svg
        className={style.logoIcon}
        onClick={() => push(ROUTER.HOME)}
        style={{ cursor: "pointer" }}
        width="232"
        height="54"
        viewBox="0 0 232 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M101.903 60.0019H73.6873V4.10205H99.9675C109.338 4.10205 115.88 10.3309 115.88 19.2482C115.88 24.761 113.422 29.1771 109.333 31.2853C114.488 33.3403 117.818 38.531 117.818 44.861C117.818 53.7784 111.273 60.0072 101.903 60.0046V60.0019ZM83.3671 26.7681H102.921C104.961 25.4451 106.123 23.116 106.123 20.0654C106.123 15.29 103.063 12.2049 98.3253 12.2049H83.3698V26.7681H83.3671ZM100.263 51.9017C105.073 51.9017 108.061 48.8619 108.061 43.9666C108.061 40.059 105.987 37.3145 102.647 36.4335H83.3671V51.9017H100.263Z"
          fill="#27343F"
        />
        <path
          d="M58.9785 31.4344C55.7171 21.6094 44.0144 17.164 35.5149 22.2695C30.3296 25.3866 27.8241 31.8231 29.394 38.1744C29.8063 39.8487 30.4115 41.4725 31.059 43.5381C26.0428 39.4334 21.3305 35.5817 16.6235 31.7246C11.9377 27.8915 7.25714 24.0503 2.39951 20.0708C2.10086 20.7522 1.84714 21.2314 1.67536 21.7398C-3.00784 35.7094 2.34136 50.5176 15.0378 58.7508C27.1792 66.6221 42.2728 65.6105 52.3052 55.9292C59.2824 49.1999 62.1473 40.9853 58.9785 31.4344ZM44.6011 44.6055C39.8122 44.6055 35.9298 40.6925 35.9298 35.8692C35.9298 31.0458 39.8122 27.1355 44.6011 27.1355C49.3901 27.1355 53.2751 31.0458 53.2751 35.8692C53.2751 40.6925 49.3927 44.6055 44.6011 44.6055Z"
          fill="#27343F"
        />
        <path
          d="M62.9058 37.5967C65.2527 27.2446 61.2302 11.5847 46.7075 3.72141C34.1062 -3.1037 19.1475 0.191732 11.3906 7.68497C12.1306 7.90325 12.7755 8.10555 13.4256 8.2839C24.3593 11.3078 35.3035 14.2812 46.2133 17.3849C48.5417 18.0477 50.8701 18.9395 52.9659 20.14C58.7776 23.462 61.6927 28.7592 62.5014 35.3341C62.5701 35.8958 62.623 36.4601 62.697 37.0217C62.7155 37.1522 62.7869 37.2773 62.9058 37.5941V37.5967Z"
          fill="#27343F"
        />
        <path
          d="M120.871 31.9852C120.871 16.5409 132.688 3.99805 147.191 3.99805C160.187 3.99805 170.994 14.0467 173.122 27.2258H163.634C161.709 19.2108 155.079 13.3014 147.191 13.3014C137.828 13.3014 130.188 21.673 130.188 31.9852C130.188 42.2974 137.828 50.6531 147.191 50.6531C155.034 50.6531 161.632 44.8076 163.588 36.8858H173.092C170.92 49.9877 160.141 59.9565 147.191 59.9565C132.686 59.9565 120.871 47.4136 120.871 31.9852Z"
          fill="#27343F"
        />
        <path
          d="M221.643 59.9247L218.823 53.5016C218.756 53.5628 218.692 53.632 218.625 53.6906C214.107 57.6142 208.33 59.954 202.057 59.954C187.539 59.954 175.737 47.4112 175.737 31.9828C175.737 16.5544 187.539 3.99561 202.057 3.99561C213.299 3.99561 222.912 11.5155 226.668 22.0752H216.45C213.454 16.8047 208.127 13.2989 202.057 13.2989C192.678 13.2989 185.054 21.6706 185.054 31.9828C185.054 42.295 192.678 50.6507 202.057 50.6507C207.042 50.6507 211.513 48.2922 214.587 44.5416C214.653 44.4618 214.709 44.3713 214.776 44.2914L209.393 32.0467H219.75L232.003 59.9247H221.646H221.643Z"
          fill="#27343F"
        />
      </svg>

      <ul className="md:display-none flex space-x-4 gap-30">
        {/* <li style={{ cursor: "pointer" }} className={style.headLiFirst}>
          KORPARATİV
        </li> */}
        <div className="flex gap-0 pr-4 ">
          <Menu
            style={{ paddingLeft: "20px" }}
            as="div"
            className={`relative ${style.menuNavHeader}  inline-block text-left flex gap-0 pr-4`}
          >
            <Menu.Button
              style={{
                boxShadow: "none",
              }}
              className={`${style.headLiLast} inline-flex items-center gap-2 rounded-md  px-6 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white`}
            >
              {t("korporativ")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute z-25000  origin-top-left rounded-xl border border-white/5 bg-white p-3 text-sm/6 text-black [--anchor-gap:var(--spacing-1)] focus:outline-none shadow-md  mt-3"
                anchor="bottom-left"
              >
                <Menu.Item as="div" className="hover:bg-gray-200 ">
                  {({ active }) => (
                    <button
                      onClick={() => push(ROUTER.TEAM)}
                      className={`group flex w-full items-center gap-2 rounded-lg py-3 px-6 data-[focus]:bg-white/10 ${
                        active ? "bg-gray-200" : ""
                      }`}
                    >
                      <span
                        style={{ paddingBottom: "10px", paddingTop: "10px" ,fontWeight:"600" }}
                        className={`${style.menuOptions} ${
                          active ? "text-blue-500" : ""
                        } text-lg`}
                      >
                        {t("rəhbərlik")}
                      </span>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item as="div" className="hover:bg-gray-200">
                  {({ active }) => (
                    <button
                      onClick={() => push(ROUTER.VACANCY)}
                      className={`group flex w-full items-center gap-2 rounded-lg py-3 px-6 data-[focus]:bg-white/10 ${
                        active ? "bg-gray-200" : ""
                      }`}
                    >
                      <span
                        style={{ paddingBottom: "10px",fontWeight:"600" }}
                        className={`${style.menuOptions}  ${
                          active ? "text-blue-500" : ""
                        } text-lg`}
                      >
                        {t("vakansiya")}
                      </span>
                    </button>
                  )}
                </Menu.Item>
                <div className="my-1 h-px bg-white/5" />
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="flex gap-0 pr-4">
          <Menu
            as="div"
            className="relative inline-block text-left flex gap-0 pr-4"
          >
            <Menu.Button
              className={`${style.headLiLast} inline-flex items-center gap-2 rounded-md  px-2 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white`}
            >
              {t("media")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute z-25000  w-64 origin-top-left rounded-xl border border-white/5 bg-white p-3 text-sm/6 text-black [--anchor-gap:var(--spacing-1)] focus:outline-none shadow-md  mt-3"
                anchor="bottom-left"
              >
                <Menu.Item as="div" className="hover:bg-gray-200 ">
                  {({ active }) => (
                    <button
                      onClick={() => push(ROUTER.NEWS)}
                      className={`group flex w-full items-center gap-2 rounded-lg py-3 px-6 data-[focus]:bg-white/10 ${
                        active ? "bg-gray-200" : ""
                      }`}
                    >
                      <span
                        style={{ paddingBottom: "10px", paddingTop: "10px" ,fontWeight:"600" }}
                        className={`${style.menuOptions} ${
                          active ? "text-blue-500" : ""
                        } text-lg`}
                      >
                        {t("xəbərlər")}
                      </span>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item as="div" className="hover:bg-gray-200">
                  {({ active }) => (
                    <button
                      onClick={() => push(ROUTER.PHOTOS)}
                      className={`group flex w-full items-center gap-2 rounded-lg py-3 px-6 data-[focus]:bg-white/10 ${
                        active ? "bg-gray-200" : ""
                      }`}
                    >
                      <span
                        style={{ paddingBottom: "10px" ,fontWeight:"600"}}
                        className={`${style.menuOptions}  ${
                          active ? "text-blue-500" : ""
                        } text-lg`}
                      >
                        {t("foto")}
                      </span>
                    </button>
                  )}
                </Menu.Item>
                <div className="my-1 h-px bg-white/5" />
                <Menu.Item as="div" className="hover:bg-gray-200">
                  {({ active }) => (
                    <button
                      onClick={() => push(ROUTER.VIDEOS)}
                      className={`group flex w-full items-center gap-2 rounded-lg py-3 px-6 data-[focus]:bg-white/10 ${
                        active ? "bg-gray-200" : ""
                      }`}
                    >
                      <span
                        style={{ paddingBottom: "10px" ,fontWeight:"600" }}
                        className={`${style.menuOptions}  ${
                          active ? "text-blue-500" : ""
                        } text-lg`}
                      >
                        {t("video")}
                      </span>
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <li onClick={() => push(ROUTER.CONTACT)} className={style.headLi}>
          {t("əlaqə")}
        </li>
      </ul>
      <button
        onClick={handleButtonClick}
        style={{ paddingLeft: "13px" }}
        className={style.blueBox}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.4089 0.00244225C21.9464 -0.0954973 15.7168 2.75991 11.7735 7.18934C8.00521 7.26046 4.33597 8.80534 1.63447 11.5068C1.47707 11.6619 1.4211 11.8939 1.48989 12.1038C1.55985 12.3148 1.74174 12.4676 1.96094 12.4991L6.4545 13.1427L5.89951 13.7641C5.69313 13.995 5.70363 14.3459 5.92283 14.5651L13.4164 22.0587C13.5295 22.1718 13.6787 22.2289 13.8291 22.2289C13.9679 22.2289 14.1066 22.1799 14.2174 22.0808L14.8388 21.5258L15.4824 26.0194C15.5139 26.2386 15.6865 26.3995 15.8952 26.4694C15.9488 26.4869 16.0048 26.4951 16.0619 26.4951C16.2275 26.4951 16.3965 26.4228 16.5131 26.3074C19.1773 23.6432 20.7222 19.974 20.7933 16.2056C25.2274 12.2542 28.1061 6.02689 27.9791 0.571425C27.9709 0.261283 27.7202 0.0106039 27.4089 0.00244225ZM22.0362 10.0669C21.4684 10.6347 20.7222 10.9192 19.9748 10.9192C19.2275 10.9192 18.4812 10.6347 17.9134 10.0669C16.7778 8.9301 16.7778 7.08091 17.9134 5.94411C19.0502 4.80731 20.8994 4.80731 22.0362 5.94411C23.173 7.08091 23.173 8.93127 22.0362 10.0669Z"
            fill="white"
          />
          <path
            d="M3.17611 19.709C1.92854 20.9566 0.215767 26.5928 0.0245518 27.2306C-0.0372434 27.4358 0.019888 27.6585 0.170295 27.8101C0.282226 27.922 0.430302 27.9814 0.583041 27.9814C0.639006 27.9814 0.694972 27.9733 0.750937 27.957C1.38871 27.7657 7.0249 26.053 8.27246 24.8054C9.67743 23.4004 9.67743 21.114 8.27246 19.709C6.86633 18.3041 4.58107 18.3052 3.17611 19.709Z"
            fill="#313D49"
          />
        </svg>
      </button>
      {isModalOpen && <FastContactModal onClose={handleCloseModal} />}
      {/* Menu Icon */}
      {isMenuOpen ? (
        <IoClose className={style.closeIconMob} onClick={toggleMenu} />
      ) : (
        <IoIosMenu className={style.mobMenu} onClick={toggleMenu} />
      )}

      {/* Menu Modal */}
      {isMenuOpen && (
        <div className={style.menuModal}>
          {/* Menu Options */}
          <ul className={style.menuOptionsMob}>
            <li onClick={() => push(ROUTER.HOME)}>Ana səhifə</li>
            <li onClick={() => push(ROUTER.ABOUT)}>Haqqımızda</li>
            <div className={style.mobilemenuSect}>
              <Menu
                as="div"
                className="relative inline-block text-left flex gap-0 pr-4"
              >
                <Menu.Button
                  className={`${style.mobMenuButton} inline-flex gap-4 rounded-md  text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white`}
                >
                  Fəaliyyətimiz
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-8 h-8 mt-1 ml-16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-150"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className="absolute z-25000 w-80 origin-top-left rounded-xl border border-white/5 bg-white  p-3 text-sm/6 text-mainBlue [--anchor-gap:var(--spacing-1)] focus:outline-none shadow-md  mt-3"
                    anchor="bottom-left"
                  >
                    <Menu.Item
                      as="div"
                      className="hover:bg-gray-200 border-b border-gray-300"
                    >
                      {({ active }) => (
                        <button
                          onClick={() => push(ROUTER.EQUIPMENTS)}
                          className={`group flex w-full items-center gap-2 rounded-lg py-3 px-6 data-[focus]:bg-white/10 ${
                            active ? "bg-gray-200" : ""
                          }`}
                        >
                          <span
                            style={{
                              paddingBottom: "10px",
                              paddingTop: "10px",
                        fontWeight:"600"
                            }}
                            className={`${style.menuOptions} ${
                              active ? "text-blue-500" : ""
                            } text-lg`}
                          >
                            AVADANLIQLAR
                          </span>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item
                      as="div"
                      className="hover:bg-gray-200  border-b border-gray-300"
                    >
                      {({ active }) => (
                        <button
                          onClick={() => push(ROUTER.PRODUCTS)}
                          className={`group flex w-full items-center gap-2 rounded-lg py-3 px-6 data-[focus]:bg-white/10 ${
                            active ? "bg-gray-200" : ""
                          }`}
                        >
                          <span
                            style={{ paddingBottom: "10px" ,fontWeight:"600" }}
                            className={`${style.menuOptions}  ${
                              active ? "text-blue-500" : ""
                            } text-lg`}
                          >
                            MƏHSULLAR
                          </span>
                        </button>
                      )}
                    </Menu.Item>
                    <div className="my-1 h-px bg-white/5" />
                    <Menu.Item
                      as="div"
                      className="hover:bg-gray-200  border-b border-gray-300"
                    >
                      {({ active }) => (
                        <button
                          onClick={() => push(ROUTER.SERVICES)}
                          className={`group flex w-full items-center gap-2 rounded-lg py-3 px-6 data-[focus]:bg-white/10 ${
                            active ? "bg-gray-200" : ""
                          }`}
                        >
                          <span
                            style={{ paddingBottom: "10px" ,fontWeight:"600" }}
                            className={`${style.menuOptions}  ${
                              active ? "text-blue-500" : ""
                            } text-lg`}
                          >
                            XİDMƏTLƏR
                          </span>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item as="div" className="hover:bg-gray-200">
                      {({ active }) => (
                        <button
                          onClick={() => push(ROUTER.PROJECTS)}
                          className={`group flex w-full items-center gap-2 rounded-lg py-3 px-6 data-[focus]:bg-white/10 ${
                            active ? "bg-gray-200" : ""
                          }`}
                        >
                          <span
                            style={{ paddingBottom: "10px"  ,fontWeight:"600"}}
                            className={`${style.menuOptions} ${
                              active ? "text-blue-500" : ""
                            } text-lg`}
                          >
                            LAYİHƏLƏR
                          </span>
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div className={style.mobilemenuSect}>
              <Menu as="div" className="relative inline-block flex">
                <Menu.Button
                  className={`${style.mobMenuButton} inline-flex gap-6 rounded-md  text-white`}
                >
                  Korporativ
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-8 h-8 mt-1 ml-24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-150"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className="absolute z-25000 w-80 origin-top-left rounded-xl border border-white/5 bg-white p-3 text-sm/6 text-black [--anchor-gap:var(--spacing-1)] focus:outline-none shadow-md  mt-3"
                    anchor="bottom-left"
                  >
                    <Menu.Item
                      as="div"
                      className="hover:bg-gray-200  border-b border-gray-300 "
                    >
                      {({ active }) => (
                        <button
                          onClick={() => push(ROUTER.TEAM)}
                          className={`group flex w-full items-center gap-2 rounded-lg py-3 px-6 data-[focus]:bg-white/10 ${
                            active ? "bg-gray-200" : ""
                          }`}
                        >
                          <span
                            style={{
                              paddingBottom: "10px",
                              paddingTop: "10px"
                              ,fontWeight:"600"
                            }}
                            className={`${style.menuOptions} ${
                              active ? "text-blue-500" : ""
                            } text-lg`}
                          >
                            REHBERLIK
                          </span>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item as="div" className="hover:bg-gray-200  ">
                      {({ active }) => (
                        <button
                          onClick={() => push(ROUTER.VACANCY)}
                          className={`group flex w-full items-center gap-2 rounded-lg py-3 px-6 data-[focus]:bg-white/10 ${
                            active ? "bg-gray-200" : ""
                          }`}
                        >
                          <span
                            style={{ paddingBottom: "10px",fontWeight:"600" }}
                            className={`${style.menuOptions}  ${
                              active ? "text-blue-500" : ""
                            } text-lg`}
                          >
                            VAKANSIYA
                          </span>
                        </button>
                      )}
                    </Menu.Item>
                    <div className="my-1 h-px bg-white/5" />
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div className={style.mobilemenuSect}>
              <Menu
                as="div"
                className="relative inline-block text-left flex gap-0 pr-4"
              >
                <Menu.Button
                  className={`${style.mobMenuButton} inline-flex gap-4 rounded-md  text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white`}
                >
                  Media
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-8 h-8 mt-1 ml-40"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-150"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className="absolute z-25000 w-80 origin-top-left rounded-xl border border-white/5 bg-white p-3 text-sm/6 text-black [--anchor-gap:var(--spacing-1)] focus:outline-none shadow-md  mt-3"
                    anchor="bottom-left"
                  >
                    <Menu.Item
                      as="div"
                      className="hover:bg-gray-200  border-b border-gray-300 "
                    >
                      {({ active }) => (
                        <button
                          onClick={() => push(ROUTER.NEWS)}
                          className={`group flex w-full items-center gap-2 rounded-lg py-3 px-6 data-[focus]:bg-white/10 ${
                            active ? "bg-gray-200" : ""
                          }`}
                        >
                          <span
                            style={{
                              paddingBottom: "10px",
                              paddingTop: "10px",fontWeight:"600"
                            }}
                            className={`${style.menuOptions} ${
                              active ? "text-blue-500" : ""
                            } text-lg`}
                          >
                            XƏBƏRLƏR
                          </span>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item
                      as="div"
                      className="hover:bg-gray-200  border-b border-gray-300 "
                    >
                      {({ active }) => (
                        <button
                          onClick={() => push(ROUTER.PHOTOS)}
                          className={`group flex w-full items-center gap-2 rounded-lg py-3 px-6 data-[focus]:bg-white/10 ${
                            active ? "bg-gray-200" : ""
                          }`}
                        >
                          <span
                            style={{ paddingBottom: "10px" ,fontWeight:"600"}}
                            className={`${style.menuOptions}  ${
                              active ? "text-blue-500" : ""
                            } text-lg`}
                          >
                            Foto
                          </span>
                        </button>
                      )}
                    </Menu.Item>
                    <div className="my-1 h-px bg-white/5" />
                    <Menu.Item as="div" className="hover:bg-gray-200 ">
                      {({ active }) => (
                        <button
                          onClick={() => push(ROUTER.VIDEOS)}
                          className={`group flex w-full items-center gap-2 rounded-lg py-3 px-6 data-[focus]:bg-white/10 ${
                            active ? "bg-gray-200" : ""
                          }`}
                        >
                          <span
                            style={{ paddingBottom: "10px" ,fontWeight:"600"}}
                            className={`${style.menuOptions}  ${
                              active ? "text-blue-500" : ""
                            } text-lg`}
                          >
                            Video
                          </span>
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <li onClick={() => push(ROUTER.CONTACT)}>Əlaqə</li>
            {/* Add more menu options */}
          </ul>
        </div>
      )}
      {/* LANGUAGES  */}

      <LanguageSwitcher />
    </div>
  );
}

export default HeaderHome;
{
  /* <li className={style.headLiLast}>FƏALİYYƏTİMİZ</li> */
}
{
  /* <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-4 h-4 mt-1"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg> */
}
