

// import { FaBars } from "react-icons/fa";
// import { FaXmark } from "react-icons/fa6";
import "./about.css";
import BookmeImg from "../assets/Bookme.jpeg"


export default function Example() {


  return (
    <div className="bg-white">
      {/* <div className='w-screen bg-[blue]'> */}


      {/* </div> */}

      <div className="relative isolate px-6 pt-14 lg:px-8 About" id="About">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]  bg-gray-100 text-gray-800"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto  py-[10px] ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing Book me{" "}
              <a href="#Footer" className="font-semibold text-[#4c2882]">
                <span className="absolute inset-0" aria-hidden="true" />
                Get the App <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="about py-10 my-8 bg-gradient-to-r from-purple-500 to-[#5a2f9a] text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="lg:w-1/2">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-gray-200 via-white to-gray-400 text-transparent bg-clip-text drop-shadow-lg shadow-gray-500/50 leading-tight sm:leading-none">
  Discover and Book Services with Ease
</h1>


        <p className="mt-6 text-lg leading-8 drop-shadow-md text-white">
          Book Me simplifies the process of discovering and booking services with ease and convenience. Our intuitive platform allows you to explore a myriad of services spanning various industries, from healthcare and beauty to home services and beyond. With comprehensive search filters and personalized recommendations, finding the perfect service provider to meet your needs has never been simpler.
        </p>


      </div>
      <div className="mt-10 lg:mt-0 lg:ml-10 lg:w-1/2 flex justify-center">
        <img
          className="rounded-lg shadow-xl transition-transform transform hover:scale-105"
          src={BookmeImg}
          alt="Book Me"
        />
      </div>
    </div>
  </div>
</div>

        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#5a2f9a] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
