import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

const Features = () => {
  return (
    <div>
      <div class="max-w-[75rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-20 mx-auto">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          <a
            class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
            href="#"
          >
            <div class="p-4 md:p-5">
              <div class="flex gap-x-5">
                <FontAwesomeIcon
                  icon={faPython}
                  size="lg"
                  className="shrink-0 size-12 text-gray-800 dark:text-white"
                />

                <div class="grow">
                  <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                    Learn Python &rarr;
                  </h3>
                  <p class="text-sm text-gray-500 dark:text-neutral-500">
                    Get help from 40k+ Preline users
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
            href="#"
          >
            <div class="p-4 md:p-5">
              <div class="flex gap-x-5">
                <FontAwesomeIcon
                  icon={faJs}
                  class="shrink-0 size-12 text-gray-800 dark:text-white"
                ></FontAwesomeIcon>

                <div class="grow">
                  <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                    Learn JavaScript &rarr;
                  </h3>
                  <p class="text-sm text-gray-500 dark:text-neutral-500">
                    Just head to «Help» in the app
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
            href="#"
          >
            <div class="p-4 md:p-5">
              <div class="flex gap-x-5">
                <FontAwesomeIcon
                  icon={faHtml5}
                  size="lg"
                  className="shrink-0 size-12 text-gray-800 dark:text-white"
                />

                <div class="grow">
                  <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                    Learn HTML &rarr;
                  </h3>
                  <p class="text-sm text-gray-500 dark:text-neutral-500">
                    Reach us at{" "}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;
