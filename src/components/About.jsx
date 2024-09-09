const About = () => {
  return (
    <div>
      <div class="max-w-[75rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-[70px] mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <div class="lg:w-3/4">
            <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
              Collaborative Tools to Elevate Your Coding Journey
            </h2>
            <p class="mt-3 text-gray-800 dark:text-neutral-400">
              Unlock your potential with tools designed to make learning to code
              a collaborative and enriching experience. Whether you're just
              starting out or advancing your skills, our platform provides the
              resources you need to succeed.
            </p>
            <p class="mt-5">
              <a
                class="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                href="#"
              >
                Contact sales to learn more
                <svg
                  class="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </p>
          </div>

          <div class="space-y-6 lg:space-y-10">
            <div class="flex gap-x-5 sm:gap-x-8">
              <span class="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                <svg
                  class="shrink-0 size-5"
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
              </span>
              <div class="grow">
                <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Comprehensive Learning Resources
                </h3>
                <p class="mt-1 text-gray-600 dark:text-neutral-400">
                  Dive into our extensive library of tutorials, documentation,
                  and coding exercises. Everything is crafted to help you
                  understand concepts quickly and apply them effectively.
                </p>
              </div>
            </div>

            <div class="flex gap-x-5 sm:gap-x-8">
              <span class="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                <svg
                  class="shrink-0 size-5"
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
              </span>
              <div class="grow">
                <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Developer community support
                </h3>
                <p class="mt-1 text-gray-600 dark:text-neutral-400">
                  Join a community of learners and experienced developers eager
                  to help you grow. Share your progress, ask questions, and
                  collaborate on projects in a supportive environment.
                </p>
              </div>
            </div>

            <div class="flex gap-x-5 sm:gap-x-8">
              <span class="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                <svg
                  class="shrink-0 size-5"
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
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
              </span>
              <div class="grow">
                <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Simple and affordable
                </h3>
                <p class="mt-1 text-gray-600 dark:text-neutral-400">
                  Learning to code shouldn’t be expensive. Our platform offers
                  extensive free, high-quality tools and resources to help you
                  achieve your coding goals without breaking the bank.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
