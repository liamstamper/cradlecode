import React from "react";
import { signInWithGithub } from "../auth/AuthServices";

const Hero = () => {
  // Handle Github sign-up
  const handleGithubSignUp = async () => {
    try {
      await signInWithGithub();
      navigate("/"); // Redirect after successful sign-up
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-10 relative z-10">
          <div className="flex justify-center">
            <a
              className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-black p-2 px-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600 dark:focus:border-neutral-600"
              href="#"
            >
              Explore the Courses We Offer
              <span className="flex items-center gap-x-1">
                <span className="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500 dark:border-neutral-700">
                  Explore
                </span>
                <svg
                  className="shrink-0 size-4 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>

          <div className="mt-5 max-w-xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              Unlock Your Coding Potential{" "}
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              Learn to code with engaging, hands-on lessons that cater to
              beginners and experts alike. Start building your future today with
              tools and resources designed to make coding fun and accessible for
              everyone.
            </p>
          </div>

          <div className="mt-8 gap-3 flex justify-center">
            <button
              onClick={handleGithubSignUp}
              className="inline-flex justify-center items-center gap-x-3 text-center bg-black text-white dark:bg-white dark:text-black text-sm font-medium rounded-full py-3 px-4"
            >
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              Continue with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
