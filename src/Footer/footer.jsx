import { Link } from "react-router-dom";
// import PrivacyPolicy from "../PrivacyPolicy/Privacypolicy";
export default function Footer() {

  return (
    <div className="Footer" id="Footer">
      <div className="w-full p-4 text-center rounded-lg shadow sm:p-8 text-gray-800">
     
        <h5 className="mb-2 text-3xl font-bold text-[#4c2882] dark:text-white">
          Join the Book Me Community
        </h5>
        <p className="mb-5 text-base text-gray-800 sm:text-lg dark:text-gray-800">
          Whether you’re looking to book a service or offer one, Book Me is your
          go-to platform for a seamless and efficient experience. Join our
          growing community of satisfied users and successful service providers
          today. Experience the convenience and efficiency of Book Me, where
          finding and offering services is just a click away.
        </p>


        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          <a
            href="#"
            className="w-full sm:w-auto  bg-[#4c2882] hover:bg-[#5a2f9a] focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-[#5a2f9a] dark:hover:bg-[#4c2882 dark:focus:ring-[#5a2f9a]"
          >
            <svg
              className="me-3 w-7 h-7"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="apple"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              ></path>
            </svg>
            <div className="text-left rtl:text-right">
              <div className="mb-1 text-xs">Download on the</div>
              <div className="-mt-1 font-sans text-sm font-semibold">
                Mac App Store
              </div>
            </div>
          </a>
          <a
            href="#"
            className="w-full sm:w-auto bg-[#4c2882] hover:bg-[#5a2f9a] focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-[#5a2f9a] dark:hover:bg-[#4c2882 dark:focus:ring-[#5a2f9a]"
          >
            <svg
              className="me-3 w-7 h-7"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google-play"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
              ></path>
            </svg>
            <div className="text-left rtl:text-right">
              <div className="mb-1 text-xs">Get in on</div>
              <div className="-mt-1 font-sans text-sm font-semibold">
                Google Play
              </div>
            </div>
          </a>
        </div>

        <hr className="h-px my-8 bg-gray-200" />

        <div className="flex flex-col items-center space-y-4">
          <div className="flex justify-between items-center w-full mx-auto max-w-screen-xl p-4 flex-wrap">
            <p className=" text-[#4c2882]  hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300  dark:text-gray-400 text-sm font-medium">
            Copyright © 2024, Book Me
            </p>
           
              <Link to="/policy" className="text-[#4c2882] underline  hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300  dark:text-gray-400 text-sm font-medium">
          Privacy Policy
        </Link>
        
          
          </div>

          <div className="">
            <p className=" leading-relaxed mb-5 text-[1rem] text-gray-500 sm:text-md dark:text-gray-800">
              © 2024. Book Me is a marketplace platform where users can connect
              with skilled professionals, including doctors, barbers, stylists,
              and more. Services are provided by independent business owners who
              update their profiles and related information on our platform.
              Unauthorized reproduction or redistribution of copyrighted
              materials on this website and Book Me's digital media pages is
              strictly prohibited. By clicking on some of the links above, you
              will leave Book Me's website and be directed to a third-party
              website. The privacy practices of those third parties may differ
              from those of BookMe. We recommend you review the privacy
              statements of those third-party websites, as BookMe is not
              responsible for those third parties' privacy or security
              practices. Additional disclosures can be found in the resources
              section of our website.
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
