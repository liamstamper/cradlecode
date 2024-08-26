const Pricing = () => {
  return (
    <div className="dark:bg-black min-h-screen">
      <div class="relative">
        <div aria-hidden="true" class="flex -z-[1] absolute -top-48 start-0">
          <div class="bg-purple-200 opacity-30 blur-3xl w-[1036px] h-[600px] dark:bg-purple-900 dark:opacity-20"></div>
          <div class="bg-gray-200 opacity-90 blur-3xl w-[577px] h-[300px] transform translate-y-32 dark:bg-neutral-800/60"></div>
        </div>

        <div class="max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto">
          <div class="max-w-2xl mx-auto text-center mb-10">
            <h2 class="text-3xl leading-tight font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-fuchsia-600 text-transparent">
              Simple, transparent pricing
            </h2>
            <p class="mt-2 lg:text-lg text-gray-800 dark:text-neutral-200">
              Whatever your status, our offers evolve according to your needs.
            </p>
          </div>

          <div class="flex justify-center items-center">
            <label
              for="pricing-switch"
              class="min-w-14 text-sm text-gray-600 me-3 dark:text-neutral-400"
            >
              Monthly
            </label>
            x
            <input
              type="checkbox"
              id="pricing-switch"
              className="relative w-[3.25rem] h-7 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-purple-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-purple-600 checked:border-purple-600 focus:checked:border-purple-600 dark:bg-neutral-800 dark:border-neutral-800 dark:checked:bg-purple-500 dark:checked:border-purple-500 dark:focus:ring-offset-gray-600

          before:inline-block before:size-6 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-white"
              checked
            />
            <label
              for="pricing-switch"
              class="min-w-14 text-sm text-gray-600 ms-3 dark:text-neutral-400"
            >
              Annually
            </label>
          </div>

          <div class="mt-6 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-3 xl:gap-6 lg:items-center">
            <div class="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-neutral-800">
              <h4 class="font-medium text-lg text-gray-800 dark:text-neutral-200">
                Free
              </h4>
              <span class="mt-7 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-neutral-200">
                Free
              </span>
              <p class="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                Get started with basic features
              </p>

              <ul class="mt-7 space-y-2.5 text-sm">
                <li class="flex gap-x-2">
                  <svg
                    class="shrink-0 mt-0.5 size-4 text-blue-900"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span class="text-gray-800 dark:text-neutral-400">
                    1 user
                  </span>
                </li>

                <li class="flex gap-x-2">
                  <svg
                    class="shrink-0 mt-0.5 size-4 text-blue-900"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span class="text-gray-800 dark:text-neutral-400">
                    Plan features
                  </span>
                </li>

                <li class="flex gap-x-2">
                  <svg
                    class="shrink-0 mt-0.5 size-4 text-blue-900"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span class="text-gray-800 dark:text-neutral-400">
                    Product support
                  </span>
                </li>
              </ul>

              <a
                class="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 focus:outline-none focus:border-blue-500 focus:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400 dark:focus:text-blue-400 dark:focus:border-blue-400"
                href="#"
              >
                Get started
              </a>
            </div>

            <div class="flex flex-col bg-white border-2 border-blue-900 text-center shadow-xl rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-blue-700">
              <p class="mb-3">
                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-white">
                  Most popular
                </span>
              </p>
              <h4 class="font-medium text-lg text-gray-800 dark:text-neutral-200">
                Startup
              </h4>
              <span class="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-neutral-200">
                $39
              </span>
              <p class="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                All the basics for starting a new business
              </p>

              <ul class="mt-7 space-y-2.5 text-sm">
                <li class="flex gap-x-2">
                  <svg
                    class="shrink-0 mt-0.5 size-4 text-blue-900"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span class="text-gray-800 dark:text-neutral-400">
                    2 users
                  </span>
                </li>

                <li class="flex gap-x-2">
                  <svg
                    class="shrink-0 mt-0.5 size-4 text-blue-900"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span class="text-gray-800 dark:text-neutral-400">
                    Plan features
                  </span>
                </li>

                <li class="flex gap-x-2">
                  <svg
                    class="shrink-0 mt-0.5 size-4 text-blue-900"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span class="text-gray-800 dark:text-neutral-400">
                    Product support
                  </span>
                </li>
              </ul>

              <a
                class="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html"
              >
                Get started
              </a>
            </div>

            <div class="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-neutral-800">
              <h4 class="font-medium text-lg text-gray-800 dark:text-neutral-200">
                Team
              </h4>
              <span class="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-neutral-200">
                $89
              </span>
              <p class="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                Everything you need for a growing business
              </p>

              <ul class="mt-7 space-y-2.5 text-sm">
                <li class="flex gap-x-2">
                  <svg
                    class="shrink-0 mt-0.5 size-4 text-blue-900"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span class="text-gray-800 dark:text-neutral-400">
                    5 users
                  </span>
                </li>

                <li class="flex gap-x-2">
                  <svg
                    class="shrink-0 mt-0.5 size-4 text-blue-900"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span class="text-gray-800 dark:text-neutral-400">
                    Plan features
                  </span>
                </li>

                <li class="flex gap-x-2">
                  <svg
                    class="shrink-0 mt-0.5 size-4 text-blue-900"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span class="text-gray-800 dark:text-neutral-400">
                    Product support
                  </span>
                </li>
              </ul>

              <a
                class="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 focus:outline-none focus:border-blue-500 focus:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400 dark:focus:text-blue-400 dark:focus:border-blue-400"
                href="#"
              >
                Get started
              </a>
            </div>

            <div class="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-neutral-800">
              <h4 class="font-medium text-lg text-gray-800 dark:text-neutral-200">
                Enterprise
              </h4>
              <span class="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-neutral-200">
                $149
              </span>
              <p class="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                Advanced features for scaling your business
              </p>

              <ul class="mt-7 space-y-2.5 text-sm">
                <li class="flex gap-x-2">
                  <svg
                    class="shrink-0 mt-0.5 size-4 text-blue-900"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span class="text-gray-800 dark:text-neutral-400">
                    10 users
                  </span>
                </li>

                <li class="flex gap-x-2">
                  <svg
                    class="shrink-0 mt-0.5 size-4 text-blue-900"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span class="text-gray-800 dark:text-neutral-400">
                    Plan features
                  </span>
                </li>

                <li class="flex gap-x-2">
                  <svg
                    class="shrink-0 mt-0.5 size-4 text-blue-900"
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
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span class="text-gray-800 dark:text-neutral-400">
                    Product support
                  </span>
                </li>
              </ul>

              <a
                class="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 focus:outline-none focus:border-blue-500 focus:text-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:border-blue-500 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400 dark:focus:text-blue-400 dark:focus:border-blue-400"
                href="#"
              >
                Get started
              </a>
            </div>
          </div>

          <div class="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mt-10 md:mt-14 mb-6 lg:mt-24">
            <h2 class="text-gray-600 dark:text-neutral-400">
              Trusted by Open Source, enterprise, and more than 99,000 of you
            </h2>
          </div>
        </div>

        <div class="absolute top-1/2 start-1/2 -z-[1] transform -translate-y-1/2 -translate-x-1/2 w-[340px] h-[340px] border border-dashed border-blue-200 rounded-full dark:border-blue-900/60"></div>
        <div class="absolute top-1/2 start-1/2 -z-[1] transform -translate-y-1/2 -translate-x-1/2 w-[575px] h-[575px] border border-dashed border-blue-200 rounded-full opacity-80 dark:border-blue-900/60"></div>
        <div class="absolute top-1/2 start-1/2 -z-[1] transform -translate-y-1/2 -translate-x-1/2 w-[840px] h-[840px] border border-dashed border-blue-200 rounded-full opacity-60 dark:border-blue-900/60"></div>
        <div class="absolute top-1/2 start-1/2 -z-[1] transform -translate-y-1/2 -translate-x-1/2 w-[1080px] h-[1080px] border border-dashed border-blue-200 rounded-full opacity-40 dark:border-blue-900/60"></div>
      </div>
    </div>
  );
};

export default Pricing;
