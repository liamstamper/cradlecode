const Features = () => {
  return (
    <div>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
          <div>
            <svg
              class="shrink-0 size-9 text-gray-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="10" height="14" x="3" y="8" rx="2" />
              <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
              <path d="M8 18h.01" />
            </svg>
            <div class="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6 dark:from-neutral-700 dark:via-neutral-900">
              <div class="bg-gray-400 w-9 h-0.5 dark:bg-neutral-600"></div>
            </div>
            <div class="mt-5">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                Python
              </h3>
              <p class="mt-1 text-gray-600 dark:text-neutral-400">
                Responsive, and mobile-first project on the web
              </p>
            </div>
          </div>

          <div>
            <svg
              class="shrink-0 size-9 text-gray-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20 7h-9" />
              <path d="M14 17H5" />
              <circle cx="17" cy="17" r="3" />
              <circle cx="7" cy="7" r="3" />
            </svg>
            <div class="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6 dark:from-neutral-700 dark:via-neutral-900">
              <div class="bg-gray-400 w-9 h-0.5 dark:bg-neutral-600"></div>
            </div>
            <div class="mt-5">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                JavaScript
              </h3>
              <p class="mt-1 text-gray-600 dark:text-neutral-400">
                Components are easily customized and extendable
              </p>
            </div>
          </div>
          <div>
            <svg
              class="shrink-0 size-9 text-gray-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <div class="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6 dark:from-neutral-700 dark:via-neutral-900">
              <div class="bg-gray-400 w-9 h-0.5 dark:bg-neutral-600"></div>
            </div>
            <div class="mt-5">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                C++
              </h3>
              <p class="mt-1 text-gray-600 dark:text-neutral-400">
                Every component and plugin is well documented
              </p>
            </div>
          </div>
          <div>
            <svg
              class="shrink-0 size-9 text-gray-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
            </svg>
            <div class="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6 dark:from-neutral-700 dark:via-neutral-900">
              <div class="bg-gray-400 w-9 h-0.5 dark:bg-neutral-600"></div>
            </div>
            <div class="mt-5">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                24/7 Support
              </h3>
              <p class="mt-1 text-gray-600 dark:text-neutral-400">
                Contact us 24 hours a day, 7 days a week
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
