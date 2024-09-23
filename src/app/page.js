"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faList12, faLock, faSearch, faStar, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import styles from './Header.module.css';
import { faEdit, faUserCheck, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faDribbble, faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import WOW from "wowjs";
import 'animate.css';


export default function Home() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    // Initialize WOW.js
    new WOW.WOW({
      live: false,
    }).init();
  }, []);


  const stories = [
    {
      name: "Sanket & Shruti",
      imageUrl: "https://imagecdn.jeevansathi.com/21791/1/435821451-1610352014.jpg",
      date: "24, December 2020",
      details:
        "I found my perfect match because of Jeevansathi. Only Jeevansathi App can match Mumbai and Kolhapur together.",
    },
    {
      name: "Akshay & Dipali",
      imageUrl: "https://imagecdn.jeevansathi.com/22640/7/452807301-1615017670.jpg",
      date: "25, November 2020",
      details:
        "We met on 20-02-2020. After exchanging numbers, we chatted and decided to take things further.",
    },
    {
      name: "Yash & Khushboo",
      imageUrl: "https://imagecdn.jeevansathi.com/22137/1/442741551-1612252806.jpg",
      date: "27, November 2020",
      details:
        "Thank you Jeevansathi for making me meet my soulmate. Our marriage was the best thing during the pandemic.",
    },
    {
      name: "Vivek & Kavita",
      imageUrl: "https://imagecdn.jeevansathi.com/21549/0/430980537-1609056062.jpg",
      date: "25, November 2020",
      details:
        "It was a lengthy process, but patience finally paid off. Thank you Jeevansathi for helping me find the one.",
    },
    {
      name: "Naveen & Soniya",
      imageUrl: "https://imagecdn.jeevansathi.com/22667/14/453354629-1615190452.jpg",
      date: "21, February 2021",
      details:
        "I found my dream girl on Jeevansathi, and we are getting married in April 2021. I feel blessed and happy.",
    },
    {
      name: "Prateek & Pooja",
      imageUrl: "https://imagecdn.jeevansathi.com/21596/1/431921933-1609315238.jpg",
      date: "25, November 2020",
      details:
        "Thank you Jeevansathi for helping me find my soulmate in the same city. We had an unforgettable wedding.",
    },
    {
      name: "Shaik & Farhat",
      imageUrl: "https://imagecdn.jeevansathi.com/22486/7/449727411-1614153606.jpg",
      date: "27, November 2020",
      details:
        "I found a very sweet and mature girl on Jeevansathi. We got married within 3 months and life is now beautiful.",
    },
    {
      name: "Nikit & Nimisha",
      imageUrl: "https://imagecdn.jeevansathi.com/21956/14/439134849-1611216077.jpg",
      date: "09, December 2020",
      details:
        "We hit it off instantly on Jeevansathi. We have a lot in common and complement each other beautifully.",
    },
    {
      name: "Mayank & Suneeta",
      imageUrl: "https://imagecdn.jeevansathi.com/22112/17/442257799-1612080012.jpg",
      date: "09, December 2020",
      details:
        "Jeevansathi.com gave me the best gift of my life, my soulmate. We are now happily married and enjoying life together.",
    },
    {
      name: "Bharat & Sakshi",
      imageUrl: "https://imagecdn.jeevansathi.com/22194/6/443886839-1612512014.jpg",
      date: "16, January 2021",
      details:
        "I found my soulmate on Jeevansathi in the very first week. We got married and couldn't be happier.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length); // Loop to the first after the last
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length); // Loop to the last before the first
  };

  return (
    <>



      {/* Header Section */}
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : 'bg-transparent fixed top-0 z-20 w-full'}`}>
        <div className="container mx-auto flex items-center justify-between py-2 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-orange-500 text-xl font-bold flex items-center">
              <span className="flex justify-center items-center gap-4">
                <FontAwesomeIcon icon={faHeart} className="text-[40px]" />
                <span>
                  Premium <br />
                  Matrimony
                </span>
              </span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a
              href="#"
              className={`${isScrolled ? "text-black ease-in-oute duration-300 font-bold hover:text-orange-500 " : "text-[#ffff] ease-in-oute duration-300 font-bold hover:text-orange-500"}`}
            >
              Home
            </a>
            <a
              href="#"
              className={`${isScrolled ? "text-black ease-in-oute duration-300 font-bold hover:text-orange-500" : "text-[#ffff] ease-in-oute duration-300 font-bold hover:text-orange-500"}`}
            >
              Membership
            </a>
            <a
              href="#"
              className={`${isScrolled ? "text-black ease-in-oute duration-300 font-bold hover:text-orange-500" : "text-[#ffff] ease-in-oute duration-300 font-bold hover:text-orange-500"}`}
            >
              Contact Us
            </a>
          </nav>

          {/* Login Button */}
          <div>
            <a
              href="#"
              className="bg-orange-500 text-white py-2 px-4 flex justify-center duration-300 items-center gap-2 rounded-full hover:bg-orange-400"
            >
              <FontAwesomeIcon icon={faLock} />
              Login
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-500 focus:outline-none"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>


      <section
        className="relative bg-cover bg-center bg-no-repeat h-[700px] flex items-center justify-center wow animate__animated animate__pulse"
        style={{
          backgroundImage: "url('https://img2.shaadi.com/assests/2024/images/shaadi-north-desktop.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-15"></div> {/* Overlay */}
        <div className="z-10 text-center text-white relative top-28">
          <h1 className={`${styles.raleway} text-4xl md:text-5xl font-bold mb-4 wow animate__animated animate__fadeInDown`}>
            Trusted Matrimony & Matchmaking Service
          </h1>
          <form className="flex flex-col md:flex-row items-center gap-4 wow animate__animated animate__fadeInUp">
            <select className="p-2 rounded-md text-gray-700">
              <option>I'm looking for a</option>
              <option>Man</option>
              <option>Woman</option>
            </select>
            <input
              type="number"
              placeholder="Age from"
              className="p-2 rounded-md text-gray-700"
            />
            <input
              type="number"
              placeholder="Age to"
              className="p-2 rounded-md text-gray-700"
            />
            <div className="relative">
              <select className="block appearance-none w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:rin p-2 pr-8 text-gray-700">
                <option>Select religion</option>
                <option value="hinduism">Hinduism</option>
                <option value="islam">Islam</option>
                <option value="christianity">Christianity</option>
                <option value="sikhism">Sikhism</option>
                <option value="buddhism">Buddhism</option>
                <option value="jainism">Jainism</option>
                <option value="zoroastrianism">Zoroastrianism</option>
                <option value="judaism">Judaism</option>
                <option value="bahai">Bahá'í</option>
                <option value="atheism">Atheism</option>
                <option value="agnosticism">Agnosticism</option>
                <option value="other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10l5 5 5-5H7z" />
                </svg>
              </div>
            </div>


            <button className="bg-orange-500 text-white py-2 duration-300 px-4 rounded-md hover:text-orange-500 hover:bg-[#fff]">
              Let's Begin
            </button>
          </form>
        </div>
      </section>



      <div className="py-20 bg-gray-100 ">
        <div className="bg-[#2D1B47] rounded-lg p-6 mx-auto flex flex-col md:flex-row items-center w-[60%] justify-between gap-6 md:gap-10 wow animate__animated animate__backInUp
">
          {/* Left Section */}
          <div className="flex flex-col md:w-2/3">
            <p className="text-2xl md:text-3xl text-[#d2b17c] font-semibold mb-2  font-[initial]">
              <span className={styles.playfair}>Exclusive & Personalised Matchmaking by Premium-matrimony.com</span>
            </p>
            <nav className="flex flex-wrap text-sm text-[#ffff] space-x-2">
              <a href="#" className="hover:underline ">
                Top Rated Consultants
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                5 times higher success rates
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                100% Privacy
              </a>
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:w-1/3 items-center md:items-end">
            <img
              src="https://img2.shaadi.com/assests/2023/images/homepage/vipshaadi/vip_logo.webp"
              alt="VIP Shaadi"
              className="w-40 h-auto mb-4"
            />
            <button className="bg-[#d2b17c] text-[#2D1B47] py-2 px-6 rounded-md duration-300 hover:bg-[#eedb73] flex items-center gap-2">
              Get Invited →
            </button>
          </div>
        </div>
      </div>

      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`${styles.raleway} text-3xl text-orange-500 mb-8 !font-medium wow animate__animated animate__zoomIn`}>Find your Special Someone</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

            {/* Step 1: Sign Up */}
            <div className="flex flex-col items-center wow animate__animated animate__slideInLeft">
              <div className="bg-cyan-500 text-center shadow-lg hover:shadow-2xl duration-300 rounded-2xl p-5 relative cursor-pointer">
                <div className="absolute -bottom-3 -right-3 rounded-full text-orange-500 font-bold bg-white p-2 w-8 h-8 flex items-center justify-center">1</div>
                <FontAwesomeIcon icon={faEdit} className="text-white text-4xl" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Sign Up</h3>
              <p className="text-gray-600 mt-2">Register for free & put up your Matrimony Profile</p>
            </div>

            {/* Step 2: Connect */}
            <div className="flex flex-col items-center wow animate__animated animate__slideInDown">
              <div className="bg-cyan-500 text-center shadow-lg hover:shadow-2xl duration-300 rounded-2xl p-5 relative cursor-pointer">
                <div className="absolute -bottom-3 -right-3 rounded-full text-orange-500 font-bold bg-white p-2 w-8 h-8 flex items-center justify-center">2</div>
                <FontAwesomeIcon icon={faUserCheck} className="text-white text-4xl" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Connect</h3>
              <p className="text-gray-600 mt-2">Select & Connect with Matches you like</p>
            </div>

            {/* Step 3: Interact */}
            <div className="flex flex-col items-center wow animate__animated animate__slideInRight">
              <div className="bg-cyan-500 text-center shadow-lg hover:shadow-2xl duration-300 rounded-2xl p-5 relative cursor-pointer">
                <div className="absolute -bottom-3 -right-3 rounded-full text-orange-500 font-bold bg-white p-2 w-8 h-8 flex items-center justify-center">3</div>
                <FontAwesomeIcon icon={faCommentDots} className="text-white text-4xl" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Interact</h3>
              <p className="text-gray-600 mt-2">Become a Premium Member & Start a Conversation</p>
            </div>

          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <div className="bg-white py-16 w-[60%]">
          <div className="text-center">
            <h1 className={`${styles.raleway} text-3xl font-semibold text-orange-600 wow animate__animated animate__lightSpeedInLeft`}>
              Welcome to Matrimonywebsite
            </h1>
            <p className="text-lg mt-4 text-gray-600 wow animate__animated animate__lightSpeedInRight">
              Best matrimony service provider in India. We find the best perfect life partner for you.
              Join us now and find your life partner from our thousands of verified profiles.
            </p>
            <div className={`flex gap-4 justify-center items-center pt-3 relative wow animate__animated animate__zoomIn`} >
              <div className={`${styles.Beforeline}`}></div>
              <FontAwesomeIcon icon={faHeart} className="text-orange-600 text-2xl" beat />
              <FontAwesomeIcon icon={faHeart} className="text-orange-600 text-5xl" beat />
              <FontAwesomeIcon icon={faHeart} className="text-orange-600 text-2xl" beat />
              <div className={`${styles.BeforelineSec}`}></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Success Story */}
            <div className="text-center shadow-lg hover:shadow-2xl duration-300 rounded-2xl p-5 flex justify-between flex-col items-center wow animate__animated animate__fadeInLeft">
              <div>
                <h2 className="mt-4 text-xl font-semibold">Success Story</h2>
                <p className="mt-2 text-gray-600">Hundreds of successful members found their soulmates with us.</p>
              </div>
              <a href="#" className="text-orange-600 mt-4 block">View Success Stories &rarr;</a>
            </div>

            {/* Verified Members */}
            <div className="text-center shadow-lg hover:shadow-2xl duration-300 rounded-2xl p-5 flex justify-between flex-col items-center wow animate__animated animate__fadeInLeftBig">
              <div>
                <h2 className="mt-4 text-xl font-semibold">Verified Members</h2>
                <p className="mt-2 text-gray-600">Thousands of verified member profiles.</p>
              </div>
              <a href="#" className="text-orange-600 mt-4 block">View Profiles Now &rarr;</a>
            </div>

            {/* Search Options */}
            <div className="text-center shadow-lg hover:shadow-2xl duration-300 rounded-2xl p-5 flex justify-between flex-col items-center wow animate__animated animate__fadeInRightBig">
              <div>
                <h2 className="mt-4 text-xl font-semibold">Search Options</h2>
                <p className="mt-2 text-gray-600">Find a partner who knows you better.</p>
              </div>
              <a href="#" className="text-orange-600 mt-4 block">Search Now &rarr;</a>
            </div>

            {/* Matching Profiles */}
            <div className="text-center shadow-lg hover:shadow-2xl duration-300 rounded-2xl p-5 flex justify-between flex-col items-center wow animate__animated animate__fadeInRight
">
              <div><h2 className="mt-4 text-xl font-semibold">Matching Profiles</h2>
                <p className="mt-2 text-gray-600">Auto-match profiles to find your best match.</p></div>
              <a href="#" className="text-orange-600 mt-4 block">View Matches Now &rarr;</a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-8 px-4 ">
      <h3 className="text-center text-lg text-gray-500 font-bold tracking-widest wow animate__animated animate__fadeInDown">
        LAKHS OF HAPPY COUPLES
      </h3>
      <h2 className="text-center text-2xl font-semibold text-gray-900 py-4 wow animate__animated animate__fadeInDown">
        Matched by <span className="text-orange-500 font-medium">Premium Matrimony</span>
      </h2>

      <div className="relative wow animate__animated animate__fadeInUp">
        <div className="carousel-container relative overflow-hidden h-[250px]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {stories.map((story, index) => (
              <div key={index} className="w-full flex-shrink-0 cursor-pointer" style={{ width: "280px" }}>
                <div className="flex justify-center px-2">
                  <div className="relative w-[280px] h-[228px] group">
                    <div
                      className="relative bg-cover bg-center rounded-lg shadow-lg h-full"
                      style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1), rgba(0,0,0,0.7)), url(${story.imageUrl})`,
                      }}
                    >
                      {/* Text content is hidden initially and shown on hover */}
                      <div className="absolute inset-0 flex flex-col justify-end items-center text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        <h3 className="text-4xl mb-2 drop-shadow-md">{story.name}</h3>
                        <div className="w-full h-px bg-gray-200 my-2"></div>
                        <p className="text-sm mb-4 tracking-wide">{`MARRIAGE DATE ${story.date}`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrev}
          className="absolute top-1/2 -left-10 transform -translate-y-1/2 text-white bg-gray-800  p-2 rounded-full"
        >
          	&#11164;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 -right-10 transform -translate-y-1/2 text-white bg-gray-800  p-2 rounded-full"
        >
          	&#11166;
        </button>
      </div>
    </div>





      <div className="bg-gray-100 py-16 p-6 flex justify-center">
        <div className="w-[90%] md:w-[60%] lg:w-[50%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl overflow-hidden w-[380px] wow animate__animated animate__fadeInUp">
              <img
                src="https://www.alphalearn.com/wp-content/uploads/2021/12/mobile-apps-banner-right.jpg"
                alt="Mobile App"
                className="w-full h-auto transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className=" p-6 rounded flex justify-center flex-col">
              <h2 className="text-xl font-bold mb-4 text-gray-800 wow animate__animated animate__fadeInUp">
                Download Our Mobile App
              </h2>
              <p className="text-gray-600 mb-4 wow animate__animated animate__fadeInUp">
                Start searching for your life partner with just a tap!
              </p>
              <h1 className="text-orange-500 text-3xl font-bold wow animate__animated animate__fadeInUp">Download App Now !</h1>
              <div className="flex space-x-4 mt-4 wow animate__animated animate__fadeInUp">
                <a
                  href="#"
                  className="flex items-center border rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-lg"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="  p-2"
                  />
                </a>

                <a
                  href="#"
                  className="flex items-center border rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-lg"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on the App Store"
                    className="p-2"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-orange-500  dark:text-white wow animate__animated animate__fadeInUp">Help And Support</h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4 wow animate__animated animate__fadeInUp">
                  <a href="#" className=" hover:underline">Contact Us</a>
                </li>
                <li className="mb-4 wow animate__animated animate__fadeInUp">
                  <a href="#" className="hover:underline">FAQ</a>
                </li>
                <li className="mb-4 wow animate__animated animate__fadeInUp">
                  <a href="#" className="hover:underline">Refund Policy</a>
                </li>
                <br />
                <h2 className="mb-6 text-sm font-semibold text-orange-500  dark:text-white wow animate__animated animate__fadeInUp">About Us</h2>
                <li className="mb-4 wow animate__animated animate__fadeInUp">
                  <a href="#" className="hover:underline wow animate__animated animate__fadeInUp">Welcome to Matrimonywebsite</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-orange-500  dark:text-white wow animate__animated animate__fadeInUp">Terms & Policy</h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4 wow animate__animated animate__fadeInUp">
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
                <li className="mb-4 wow animate__animated animate__fadeInUp">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-4 wow animate__animated animate__fadeInUp">
                  <a href="#" className="hover:underline">Report Misuse</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-orange-500  dark:text-white wow animate__animated animate__fadeInUp">Need Help?</h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4 wow animate__animated animate__fadeInUp">
                  <a href="#" className="hover:underline">Login</a>
                </li>
                <li className="mb-4 wow animate__animated animate__fadeInUp">
                  <a href="#" className="hover:underline">RegisterRegister</a>
                </li>
                <li className="mb-4 wow animate__animated animate__fadeInUp">
                  <a href="#" className="hover:underline flex gap-2 items-center">
                    <FontAwesomeIcon icon={faStar} className="text-sm text-orange-500" />
                    <span>Upgrade Membership</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-orange-500  dark:text-white wow animate__animated animate__fadeInUp">Information</h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4 wow animate__animated animate__fadeInUp">
                  <a href="#" className="hover:underline">Success Story</a>
                </li>
                <li className="mb-4 wow animate__animated animate__fadeInUp">
                  <a href="#" className="hover:underline">About Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-800 flex flex-col md:flex-row md:items-center justify-center md:justify-between w-full">
          <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start px-40">
            <span className="text-sm text-gray-600 dark:text-gray-300 text-center wow animate__animated animate__fadeInLeftBig mb-4 md:mb-0">
              © 2023 <a href="https://flowbite.com/" className="hover:underline">Premium Matrimony™</a>. All Rights Reserved.
            </span>
            <div className="flex space-x-5 rtl:space-x-reverse justify-center md:justify-start">
              <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 wow animate__animated animate__fadeInRightBig">
                <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 wow animate__animated animate__fadeInRightBig">
                <FontAwesomeIcon icon={faDiscord} className="w-5 h-5" />
                <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 wow animate__animated animate__fadeInRightBig">
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 wow animate__animated animate__fadeInRightBig">
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300 wow animate__animated animate__fadeInRightBig">
                <FontAwesomeIcon icon={faDribbble} className="w-5 h-5" />
                <span className="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>


      </footer>



    </>
  );
}
