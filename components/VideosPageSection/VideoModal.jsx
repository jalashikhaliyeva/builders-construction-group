import { useState, useEffect } from "react";

export default function VideoModal({
  modalOpen,
  setModalOpen,
  modalImg,
  modalLink,
}) {
  useEffect(() => {
    const closeModal = (event) => {
      if (event.keyCode === 27) {
        setModalOpen(false);
      }
    };

    if (modalOpen) {
      document.addEventListener("keydown", closeModal);
    } else {
      document.removeEventListener("keydown", closeModal);
    }

    return () => {
      document.removeEventListener("keydown", closeModal);
    };
  }, [modalOpen]);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCloseButtonClick = (event) => {
    event.stopPropagation();
    handleCloseModal();
  };

  return (
    <div>
      <button
        className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
        onClick={() => setModalOpen(true)}
        aria-controls="modal"
        aria-label="Watch the video"
      >
        {/* {modalImg && (
        <img
        style={{
            width: "700px",
            height: "300px",
        }}
        className="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out"
        src={modalImg}
        width="500"
        height="289"
        alt="Modal video thumbnail"
        />
        )} */}

        {/* <svg
          className="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out"
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="72"
        >
          <circle
            className="fill-black"
            cx="36"
            cy="36"
            r="36"
            fillOpacity=".8"
          />
          <path
            className="fill-indigo-500 drop-shadow-2xl"
            d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z"
          />
        </svg> */}
      </button>

      {modalOpen && (
        <div
          style={{ backgroundColor: "rgb(0 0 0 / 10%)" }}
          id="modal"
          className="fixed inset-0 z-[99999] flex items-center justify-center p-6"
          role="dialog"
          aria-modal="true"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-4xl md:max-w-3xl lg:max-w-6xl aspect-video bg-black rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseButtonClick}
              className="absolute top-2 right-2 text-white rounded-full p-2 bg-red-800 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <iframe
              width="100%"
              height="100%"
              src={modalLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
