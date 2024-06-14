import { useState, useEffect } from "react";

export default function VideoModal({ modalOpen, setModalOpen, modalImg , modalLink}) {
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

      {/* {modalOpen && (
        <div
          style={{ backgroundColor: "rgb(0 0 0 / 44%)" }}
          className="fixed inset-0 z-[99999] transition-opacity"
          onClick={handleCloseModal}
          aria-hidden="true"
        ></div>
      )} */}

      {modalOpen && (
        <div
          style={{ backgroundColor: "rgb(0 0 0 / 10%)" }}
          id="modal"
          className="fixed inset-0 z-[99999] flex p-6"
          role="dialog"
          aria-modal="true"
        >
          <div
            style={{
              width: "900px",
              height: "500px",
              position: "absolute",
              bottom: "190px",
              left: "280px",
            }}
            className="mx-auto flex "
          >
            <div
              className="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ position: "absolute", right: "1px" }}>
                <button
                  onClick={handleCloseButtonClick}
                  className=" text-white rounded-full p-2 bg-red-800 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-400"
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
              </div>

              <iframe
                width="100%"
                height="100%"
                // src="https://www.youtube.com/embed/jhak5jvO-ro?si=d13uGFHHOPMQb1Qe"
                src={modalLink}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
