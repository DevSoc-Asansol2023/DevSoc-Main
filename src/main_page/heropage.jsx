import animatedIcon from "./pics/meow.png";

function HeroPage() {
  return (
    <div className="bg-[#0D1117] h-[70vh] lg:min-h-screen w-full flex flex-col justify-center items-start mx-auto">
      <div className="container flex mx-[21px]">
        <div className="block max-xl:hidden">
          <svg viewBox="0 0 24 522" className="w-64 ml-2 h-96" fill="none">
            <rect
              width="3"
              height="486.493"
              rx="1.5"
              transform="matrix(-0.999957 -0.00927469 -0.00927469 0.999957 14.5119 35.0278)"
              fill="url(#paint0_linear_3_7)"
            />
            <path
              d="M8.77933 12.2193C8.63871 12.0789 8.44808 12 8.24933 12C8.05058 12 7.85996 12.0789 7.71933 12.2193L1.21933 18.7193C1.07888 18.86 0.999992 19.0506 0.999992 19.2493C0.999992 19.4481 1.07888 19.6387 1.21933 19.7793L7.71933 26.2793C7.811 26.3781 7.92761 26.4502 8.05686 26.4883C8.1861 26.5263 8.32321 26.5287 8.45374 26.4953C8.58426 26.462 8.70337 26.394 8.79851 26.2986C8.89365 26.2032 8.9613 26.084 8.99433 25.9533C9.02775 25.823 9.02542 25.686 8.98758 25.5568C8.94975 25.4277 8.87781 25.3111 8.77933 25.2193L2.80933 19.2493L8.77933 13.2793C8.91978 13.1387 8.99867 12.9481 8.99867 12.7493C8.99867 12.5506 8.91978 12.36 8.77933 12.2193ZM15.2193 12.2193C15.0789 12.36 15 12.5506 15 12.7493C15 12.9481 15.0789 13.1387 15.2193 13.2793L21.1893 19.2493L15.2193 25.2193C15.1206 25.311 15.0484 25.4276 15.0104 25.5569C14.9724 25.6861 14.97 25.8232 15.0033 25.9537C15.0367 26.0843 15.1047 26.2034 15.2001 26.2985C15.2954 26.3937 15.4147 26.4613 15.5453 26.4943C15.6757 26.5278 15.8127 26.5254 15.9418 26.4876C16.071 26.4498 16.1876 26.3778 16.2793 26.2793L22.7793 19.7793C22.9198 19.6387 22.9987 19.4481 22.9987 19.2493C22.9987 19.0506 22.9198 18.86 22.7793 18.7193L16.2793 12.2193C16.1387 12.0789 15.9481 12 15.7493 12C15.5506 12 15.36 12.0789 15.2193 12.2193Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3_7"
                x1="1.50001"
                y1="0"
                x2="1.50001"
                y2="486.493"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D2A8FF" />
                <stop offset="0.1" stopColor="#A371F7" />
                <stop offset="0.7" stopColor="#196C2E" />
                <stop offset="0.8" stopColor="#2EA043" />
                <stop offset="1" stopColor="#56D364" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="flex justify-between flex-shrink-0 w-full mx-auto basis-5/6">
          <div className="flex flex-col justify-center w-full">
            <div>
              <h1 className="text-4xl font-bold text-[#DD7DF7] mb-6">
                Let{"'"}s Build Together.
              </h1>
              <p className="mb-6 text-gray-300">
                Start your journey with Devsoc. Sign Up now!
              </p>
            </div>
            <div className="flex flex-row px-0 mb-6 sm:px-2">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full px-4 py-2 font-sans text-black bg-white border rounded-l-lg focus:outline-none focus:ring focus:ring-purple-600 sm:w-96"
              />
              <button className="w-24 h-12 px-4 py-2 mt-0 text-sm text-white bg-purple-600 rounded-r-lg sm:w-40 sm:h-16 lg:text-lg hover:bg-purple-700 focus:outline-none">
                Sign up
              </button>
            </div>

            <button className="px-8 py-2 w-3/5 h-12 sm:h-16 mt-5 ml-0 sm:ml-10 rounded-xl bg-[#DD7DF7] text-white transition hover:bg-purple-400 focus:outline-none">
              Get Started
            </button>
          </div>

          <div className="flex items-end justify-center w-full max-xl:hidden">
            <img
              src={animatedIcon}
              alt="Connect"
              className="object-contain max-w-sm rounded-md h-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroPage;
