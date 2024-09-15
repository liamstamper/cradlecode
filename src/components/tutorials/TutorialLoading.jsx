import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";

const TutorialLoading = ({ onRegisterClick }) => {
  useEffect(() => {
    setTimeout(() => {
      onRegisterClick();
    }, 100);
  }, [onRegisterClick]);
  return (
    <body className="dark:bg-black transition-all duration-300 lg:hs-overlay-layout-open:ps-[260px] min-h-screen">
      <button
        data-drawer-target="cta-button-sidebar"
        data-drawer-toggle="cta-button-sidebar"
        aria-controls="cta-button-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="cta-button-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <div class="w-full h-0.4 bg-gray-600"></div>
            <Link
              class="flex items-center justify-left font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
              to="/"
              aria-label="Home"
            >
              <FontAwesomeIcon
                icon={faMicrochip}
                size="lg"
                className="pr-[7px]"
              />
              CradeCode
            </Link>
            <li>
              {" "}
              <div role="status" class="max-w-[360px] pt-20 animate-pulse">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
              </div>
            </li>
          </ul>
          <div class="w-full h-0.4 bg-gray-600"></div>
        </div>
      </aside>

      <div class="p-4 sm:ml-64 max-w-[1000px] mx-auto"> </div>
    </body>
  );
};

export default TutorialLoading;
