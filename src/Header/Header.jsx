import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`inset-x-0 top-0 z-50 sticky transition-colors duration-300 ${scrolled ? "bg-white shadow-md" : 'bg-transparent text-[#4c2882]'}`}>
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#home" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              src="https://techmyriad-public-images.s3.eu-west-2.amazonaws.com/bookme-logo-icon.png"
              alt="Book Me Logo"
              className="lg:h-[2.8rem] w-[2.8rem] sm:h-[2rem] transition-transform duration-300 hover:scale-110"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center p-2.5 text-[#4c2882]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={`/${item.href}`}
              className="text-md font-semibold leading-6 text-[#4c2882] hover:text-[#3b2075] transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end align-baseline space-x-5">
          <a href="https://sandbox-auth.techmyriad.com/login" target='_blank' className="text-[#4c2882] font-semibold hover:text-[#3b2075] transition-colors duration-300 p-2 border border-[#4c2882] rounded-lg">Business Login</a>
          <a href="https://sandbox-business.techmyriad.com/signup" target='_blank' className="bg-[#4c2882] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#3b2075] transition-colors duration-300">Business Sign Up</a>
          <button className="py-2 px-4 text-white bg-gradient-to-r from-[#4c2882] to-[#6b39c5] rounded-lg hover:from-[#3b2075] hover:to-[#5630a5] transition-colors duration-300">
            <a href="#Footer" className="text-sm font-semibold leading-6 hover:text-[#fff] transition-colors duration-300">
              Get the App
            </a>
          </button>
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black bg-opacity-25" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#home" className="-m-1.5 p-1.5" onClick={handleNavClick}>
              <span className="sr-only">You</span>
              <img
                src="https://techmyriad-public-images.s3.eu-west-2.amazonaws.com/bookme-logo-icon.png"
                alt="Book Me Logo"
                className="lg:h-[2.8rem] w-[2.8rem] sm:h-[2rem]"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={`/${item.href}`}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#4c2882] hover:bg-gray-50 transition-colors duration-300"
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-6 flex flex-col space-y-4">
                <a href="https://sandbox-auth.techmyriad.com/login" className="text-center text-[#4c2882] font-semibold hover:text-[#3b2075] transition-colors duration-300 border border-[#4c2882] rounded-lg py-2">Business Login</a>
                <a href="https://sandbox-business.techmyriad.com/signup" className="block text-center w-full rounded-lg bg-[#4c2882] px-3 py-2 font-semibold text-white hover:bg-[#3b2075] transition-colors duration-300">Business Sign Up</a>
                <button className="py-2 px-4 text-white bg-gradient-to-r from-[#4c2882] to-[#6b39c5] rounded-lg hover:from-[#3b2075] hover:to-[#5630a5] transition-colors duration-300">
                  <a href="#Footer" className="text-sm font-semibold leading-6 hover:text-[#fff] transition-colors duration-300">
              Get our app for the best experience !
                  </a>
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

const navigation = [
  { name: 'Home', href: '#About' },
  { name: 'About', href: '#About' },
  { name: 'Services', href: '#card' },
  { name: 'Reviews', href: '#Review' },
];

export default Header;
