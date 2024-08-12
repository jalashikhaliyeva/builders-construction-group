import { useRouter } from "next/router";
import { ROUTER, updateRouter } from "../../shared/constant/router";
import React, { Fragment, useEffect, useState } from "react";
import style from "./headerMain.module.css";
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
import { getSettingsInfo } from "@/services/settingsInfo";
import Image from "next/image";

function HeaderHome({ teamInfo }) {
  const { t, ready } = useTranslation();
  const { push, pathname } = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [headerLogo, setHeaderLogo] = useState(null);

  useEffect(() => {
    setHydrated(true);
    async function fetchSettings() {
      try {
        const settings = await getSettingsInfo();
        setHeaderLogo(settings.main_information.header_logo_2);
      } catch (error) {
        console.error("Error fetching header logo:", error);
      }
    }
    fetchSettings();
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
      className={`flex fixed items-center justify-between   ${style.nav} ${
        isMenuOpen ? style.menuOpen : ""
      }`}
    >
      {headerLogo && (
        <Image
          width={110}
          height={120}
          src={headerLogo}
          alt="Header Logo"
          className={style.logoIcon}
          onClick={() => push(ROUTER.HOME)}
          style={{ cursor: "pointer" }}
        />
      )}

      <ul className="list-none list-inside flex gap-12 justify-end">
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

        <Menu as="div" className="relative inline-block text-left flex gap-0">
          <Menu.Button
            className={`${style.headLiLast} inline-flex items-center  rounded-md text-sm/6 font-semibold text-white  focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white`}
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
              className="absolute z-25000 w-64 origin-top-left rounded-xl border border-white/5 bg-white p-3 text-sm/6 text-black [--anchor-gap:var(--spacing-1)] focus:outline-none  mt-3"
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
                      style={{
                        paddingBottom: "10px",
                        paddingTop: "10px",
                        fontWeight: "600",
                      }}
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
                      style={{ paddingBottom: "10px", fontWeight: "600" }}
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
                      style={{ paddingBottom: "10px", fontWeight: "600" }}
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
                      style={{ paddingBottom: "10px", fontWeight: "600" }}
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

        <Menu
          as="div"
          className={`relative ${style.menuNavHeader}  inline-block text-left flex gap-0`}
        >
          <Menu.Button
            style={{
              boxShadow: "none",
            }}
            className={`${style.headLiLast} inline-flex items-center gap-2 rounded-md  text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white`}
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
              {teamInfo?.teams?.length > 0 && (
                <Menu.Item as="div" className="hover:bg-gray-200 ">
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
                          paddingTop: "10px",
                          fontWeight: "600",
                        }}
                        className={`${style.menuOptions} ${
                          active ? "text-blue-500" : ""
                        } text-lg`}
                      >
                        {t("rəhbərlik")}
                      </span>
                    </button>
                  )}
                </Menu.Item>
              )}

              <Menu.Item as="div" className="hover:bg-gray-200">
                {({ active }) => (
                  <button
                    onClick={() => push(ROUTER.VACANCY)}
                    className={`group flex w-full items-center gap-2 rounded-lg py-3 px-6 data-[focus]:bg-white/10 ${
                      active ? "bg-gray-200" : ""
                    }`}
                  >
                    <span
                      style={{ paddingBottom: "10px", fontWeight: "600" }}
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

        <Menu as="div" className="relative inline-block text-left flex gap-0">
          <Menu.Button
            className={`${style.headLiLast} inline-flex items-center gap-2 rounded-md  px-2 text-sm/6 font-semibold text-white focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white`}
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
                      style={{
                        paddingBottom: "10px",
                        paddingTop: "10px",
                        fontWeight: "600",
                      }}
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
                      style={{ paddingBottom: "10px", fontWeight: "600" }}
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
                      style={{ paddingBottom: "10px", fontWeight: "600" }}
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

        <li onClick={() => push(ROUTER.CONTACT)} className={style.headLi}>
          {t("əlaqə")}
        </li>
      </ul>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <div className={style.mainLanguageSwithcer}>
          <LanguageSwitcher />
        </div>
        <button
          className={style.fastContactIcon}
          onClick={handleButtonClick}
          style={{ paddingLeft: "13px" }}
          // className={style.blueBox}
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
      </div>
      {isModalOpen && <FastContactModal onClose={handleCloseModal} />}
      {/* Menu Icon */}
      {isMenuOpen ? (
        <IoClose className={style.closeIconMob} onClick={toggleMenu} />
      ) : (
        <IoIosMenu className={style.mobMenu} onClick={toggleMenu} />
      )}

      {/* MOBILE MENU  */}
      {isMenuOpen && <div className={style.overlay}></div>}
      {isMenuOpen && (
        <div className={style.menuModal}>
          {/* Menu Options */}
          <ul className={style.menuOptionsMob}>
            <div className={style.mobileLanguageSwitcher}>
              <LanguageSwitcher />
            </div>
            <li onClick={() => push(ROUTER.HOME)}>{t("ana səhifə")}</li>
            <li onClick={() => push(ROUTER.ABOUT)}>{t("haqqımızda")}</li>
            <div className={style.mobilemenuSect}>
              <Menu
                as="div"
                className="relative inline-block text-left flex gap-0"
              >
                <Menu.Button
                  className={`${style.mobMenuButton} inline-flex gap-4 rounded-md text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white`}
                >
                  {t("fəaliyyətimiz")}
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
                    className="absolute z-25000 w-80 origin-top-left rounded-xl border border-white/5 bg-white p-3 text-sm/6 text-mainBlue [--anchor-gap:var(--spacing-1)] focus:outline-none shadow-md mt-3"
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
                              fontWeight: "600",
                            }}
                            className={`${style.menuOptions} ${
                              active ? "text-blue-500" : ""
                            } text-lg`}
                          >
                            {t("avadanlıqlar")}
                          </span>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item
                      as="div"
                      className="hover:bg-gray-200 border-b border-gray-300"
                    >
                      {({ active }) => (
                        <button
                          onClick={() => push(ROUTER.PRODUCTS)}
                          className={`group flex w-full items-center gap-2 rounded-lg py-3 px-6 data-[focus]:bg-white/10 ${
                            active ? "bg-gray-200" : ""
                          }`}
                        >
                          <span
                            style={{ paddingBottom: "10px", fontWeight: "600" }}
                            className={`${style.menuOptions} ${
                              active ? "text-blue-500" : ""
                            } text-lg`}
                          >
                            {t("məhsullar")}
                          </span>
                        </button>
                      )}
                    </Menu.Item>
                    <div className="my-1 h-px bg-white/5" />
                    <Menu.Item
                      as="div"
                      className="hover:bg-gray-200 border-b border-gray-300"
                    >
                      {({ active }) => (
                        <button
                          onClick={() => push(ROUTER.SERVICES)}
                          className={`group flex w-full items-center gap-2 rounded-lg py-3 px-6 data-[focus]:bg-white/10 ${
                            active ? "bg-gray-200" : ""
                          }`}
                        >
                          <span
                            style={{ paddingBottom: "10px", fontWeight: "600" }}
                            className={`${style.menuOptions} ${
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
                            style={{ paddingBottom: "10px", fontWeight: "600" }}
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
            <div className={style.mobilemenuSect}>
              <Menu as="div" className="relative inline-block flex">
                <Menu.Button
                  className={`${style.mobMenuButton} inline-flex gap-6 rounded-md text-white`}
                >
                  {t("korporativ")}
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
                    className="absolute z-25000 w-80 origin-top-left rounded-xl border border-white/5 bg-white p-3 text-sm/6 text-black [--anchor-gap:var(--spacing-1)] focus:outline-none shadow-md mt-3"
                    anchor="bottom-left"
                  >
                    {teamInfo?.teams?.length > 0 && (
                      <Menu.Item as="div" className="hover:bg-gray-200">
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
                                paddingTop: "10px",
                                fontWeight: "600",
                              }}
                              className={`${style.menuOptions} ${
                                active ? "text-blue-500" : ""
                              } text-lg`}
                            >
                              {t("rəhbərlik")}
                            </span>
                          </button>
                        )}
                      </Menu.Item>
                    )}
                    <Menu.Item as="div" className="hover:bg-gray-200">
                      {({ active }) => (
                        <button
                          onClick={() => push(ROUTER.VACANCY)}
                          className={`group flex w-full items-center gap-2 rounded-lg py-3 px-6 data-[focus]:bg-white/10 ${
                            active ? "bg-gray-200" : ""
                          }`}
                        >
                          <span
                            style={{ paddingBottom: "10px", fontWeight: "600" }}
                            className={`${style.menuOptions} ${
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
            <div className={style.mobilemenuSect}>
              <Menu
                as="div"
                className="relative inline-block text-left flex gap-0"
              >
                <Menu.Button
                  className={`${style.mobMenuButton} inline-flex gap-4 rounded-md text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white`}
                >
                  {t("media")}
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
                    className="absolute z-25000 w-80 origin-top-left rounded-xl border border-white/5 bg-white p-3 text-sm/6 text-black [--anchor-gap:var(--spacing-1)] focus:outline-none shadow-md mt-3"
                    anchor="bottom-left"
                  >
                    <Menu.Item
                      as="div"
                      className="hover:bg-gray-200 border-b border-gray-300"
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
                              paddingTop: "10px",
                              fontWeight: "600",
                            }}
                            className={`${style.menuOptions} ${
                              active ? "text-blue-500" : ""
                            } text-lg`}
                          >
                            {t("xəbərlər")}
                          </span>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item
                      as="div"
                      className="hover:bg-gray-200 border-b border-gray-300"
                    >
                      {({ active }) => (
                        <button
                          onClick={() => push(ROUTER.PHOTOS)}
                          className={`group flex w-full items-center gap-2 rounded-lg py-3 px-6 data-[focus]:bg-white/10 ${
                            active ? "bg-gray-200" : ""
                          }`}
                        >
                          <span
                            style={{ paddingBottom: "10px", fontWeight: "600" }}
                            className={`${style.menuOptions} ${
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
                            style={{ paddingBottom: "10px", fontWeight: "600" }}
                            className={`${style.menuOptions} ${
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
            <li onClick={() => push(ROUTER.CONTACT)}> {t("əlaqə")}</li>
            {/* Add more menu options */}
          </ul>
        </div>
      )}
      {/* MOBILE MENU  END */}

      {/* LANGUAGES  */}
    </div>
  );
}

export default HeaderHome;
