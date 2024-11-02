import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="container mx-auto px-4 space-y-5">
        <div className="p-4 flex flex-col space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-[0.75fr_0.25fr] gap-4">
            <div className="flex flex-wrap gap-3">
              <a href="#" className="hover:text-white">
                Work
              </a>
              <a href="#" className="hover:text-white">
                Service
              </a>
              <a href="#" className="hover:text-white">
                Career and Culture
              </a>
              <a href="#" className="hover:text-white">
                Optimization
              </a>
              <a href="#" className="hover:text-white">
                Insight
              </a>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </div>
            <div className="text-2xl mt-4 md:mt-0">
              <div>New York</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[0.75fr_0.25fr] gap-4 mt-3">
            <div className="flex justify-start items-center">
              <h1 className="text-xl md:text-2xl capitalize">
                Join for Monthly Insights
              </h1>
            </div>
            <div className="flex flex-col mt-4 md:mt-0">
              <span>379 West Broadway</span>
              <span>New York, 10012</span>
              <span>(646)-982-1574</span>
              <span>
                <a
                  href="mailto:newbusiness@devdesign.com"
                  className="hover:underline"
                >
                  newbusiness@devdesign.com
                </a>
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="your email"
              className="border-b-2 w-full md:w-auto p-2 bg-black text-gray-300 placeholder:text-gray-500 placeholder:opacity-100"
            />
            <button
              type="submit"
              className="ml-2 text-gray-300 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="text-sm text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} © ML4E. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
