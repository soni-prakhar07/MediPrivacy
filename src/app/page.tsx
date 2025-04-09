"use client";

import logo1 from "../../public/logos/logo-removebg-preview 1.svg";
import logo2 from "../../public/logos/MediPrivacy.svg";
import { Phone, HeartPulse } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import hero from "../../public/assets/image 22.svg";
import line1 from "../../public/assets/output-onlinepngtools (1) 2.svg";
import line2 from "../../public/assets/output-onlinepngtools 2.svg";

import Image from "next/image";
import FindStoreSection from "@/components/FindStoreSection";
import ServicesSection from "../components/ServicesSection";
import ContactusSection from "@/components/ContactusSection";
import NavLink from "@/components/NavLink";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Set up intersection observer for section animations
  useEffect(() => {
    const sections = document.querySelectorAll("section[id], div[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when section comes into view
            entry.target.classList.add("animate-section");
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: "-10% 0px -10% 0px", // Adjust the trigger point
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Custom smooth scroll function with easing
  const smoothScrollTo = (
    elementId: string,
    block: ScrollLogicalPosition = "start"
  ) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const elementRect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Calculate target position based on block parameter
    let targetPosition;
    if (block === "center") {
      // For center alignment, adjust the target position to place the element in the middle of the viewport
      targetPosition =
        elementRect.top +
        window.pageYOffset -
        viewportHeight / 2 +
        elementRect.height / 2;
    } else {
      // Default to "start" alignment
      targetPosition = elementRect.top + window.pageYOffset;
    }

    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Animation duration in ms
    let start: number | null = null;

    // Easing function for smooth animation
    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    function animation(currentTime: number) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  };

  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo("services");
  };

  const ScrollToStores = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo("stores");
  };

  const ScrollToAboutus = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo("aboutus", "center");
  };

  const ScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo("contact", "center");
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo("hero");
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="sticky bg-white w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-4 w-full">
          {/* logo */}
          <Link href="/" className="flex items-center pl-4">
            <Image
              src={logo1.src}
              alt="MediPrivacy Logo"
              width={80}
              height={20}
              className="h-20 md:h-20 sm:h-16"
            />
            <Image
              src={logo2.src}
              alt="MediPrivacy Logo"
              width={8}
              height={8}
              className="w-auto h-auto"
            />
          </Link>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-8">
              <li>
                <NavLink href="#" onClick={scrollToTop} sectionId="hero">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink href="#" onClick={ScrollToAboutus} sectionId="aboutus">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="#"
                  onClick={scrollToServices}
                  sectionId="services"
                >
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink href="#" onClick={ScrollToStores} sectionId="stores">
                  Our Stores Near You
                </NavLink>
              </li>
              <li>
                <NavLink href="#" onClick={ScrollToContact} sectionId="contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Phone Number - Right */}
          <div className="hidden md:flex items-center pr-4">
            <div className="flex items-center space-x-2">
              <Phone className="text-black" />
              <div className="flex flex-col">
                <span className="text-black font-semibold">+918000600355</span>
                <span className="text-gray-600 text-xs ml-2">
                  Mon-Sat 9am-6pm
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <NavLink href="#" onClick={scrollToTop} sectionId="hero">
              Home
            </NavLink>
            <NavLink href="#" onClick={ScrollToAboutus} sectionId="aboutus">
              About Us
            </NavLink>
            <NavLink href="#" onClick={scrollToServices} sectionId="services">
              Our Services
            </NavLink>
            <NavLink href="#" onClick={ScrollToStores} sectionId="stores">
              Our Stores Near You
            </NavLink>
            <NavLink href="#" onClick={ScrollToContact} sectionId="contact">
              Contact Us
            </NavLink>
            <div className="px-3 py-2">
              <div className="flex items-center space-x-2">
                <Phone className="text-black" />
                <div className="flex flex-col">
                  <span className="text-black font-medium">+918000600355</span>
                  <span className="text-gray-600 text-xs ml-2">
                    Mon-Sat 9am-6pm
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="pt-24 pb-0 bg-white mt-[-30px] section-animation"
        id="hero"
      >
        <div className="mx-auto px-4 flex flex-col md:flex-row gap-4">
          {/* Left Section - Text Content */}
          <article className="w-full md:w-[33%] max-md:w-full ml-0 md:ml-10">
            <div className="flex flex-col">
              <h1 className="text-[32px] md:text-[45px] font-bold text-[#1CB5BD] leading-tight mb-6 mt-10">
                Your One-Stop Healthcare Solution
              </h1>
              <Image
                src={line1.src}
                alt="Line Decoration"
                width={400}
                height={200}
                className="w-full mt-[-20px] mb-[10px]"
              />
              <p className="text-[14px] md:text-[16px] text-[#787878] leading-relaxed mb-8">
                Mediprivacy is India&apos;s emerging tech-enabled healthcare
                platform, committed to providing convenient, accessible, and
                high-quality healthcare services. As a one-stop healthcare
                partner, we integrate smart clinics, pharmacies, diagnostics,
                and personalized healthcare assistance to ensure a seamless
                medical experience. Our mission is to bridge the gap between
                patients and quality healthcare by leveraging technology and
                human expertise.
              </p>

              <button
                className="w-fit px-6 py-3 md:px-8 md:py-4 bg-[#F6971E] text-white font-semibold rounded-lg hover:bg-[#e88a1a] transition-colors"
                aria-label="Book Appointment"
                onClick={(e) => {
                  e.preventDefault();
                  const phoneNumber = "+918000600355";
                  navigator.clipboard
                    .writeText(phoneNumber)
                    .then(() => {
                      window.alert(
                        `Call us @${phoneNumber} to book an Appointment Now! The phone number has been copied to your clipboard.`
                      );
                    })
                    .catch((err) => {
                      console.error("Failed to copy phone number: ", err);
                      window.alert(
                        `Call us @${phoneNumber} to book an Appointment Now!`
                      );
                    });
                }}
              >
                Book Appointment
              </button>
            </div>
          </article>

          {/* Middle Section - Hero SVG */}
          <div className="w-full md:w-[44%] flex items-center justify-center mt-8 md:mt-0">
            <div className="w-full flex items-center justify-center">
              <Image
                src={hero.src}
                alt="Healthcare Hero"
                width={800}
                height={600}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Section - Testimonial */}
          <article className="w-full md:w-[28%] max-md:w-full mt-8 md:mt-0">
            <div className="flex flex-col items-center md:items-end h-full justify-between ml-0 md:ml-[-200px] bg-[transparent]">
              <div className="w-full max-w-[800px] mt-[50px] md:mt-[170px] bg-[transparent]">
                <Image
                  src={line2.src}
                  alt="Line Decoration"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover bg-transparent"
                />
              </div>
              <div className="w-full max-w-[300px]">
                <blockquote className="text-[15px] md:text-[17px] text-[#787878] leading-[1.2] relative">
                  <span className="text-[#1CB5BD] text-[30px] md:text-[40px] absolute -left-4 -top-2">
                    &quot;
                  </span>
                  A trusted assistance companion for your health needs.
                  <span className="text-[#1CB5BD] text-[30px] md:text-[40px]">
                    &quot;
                  </span>
                </blockquote>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Jambotron */}
      <div
        className="flex flex-col items-center justify-center bg-white section-animation"
        id="aboutus"
      >
        <div className="h-auto md:h-[200px] w-[90%] bg-[#27BCB9] flex flex-col md:flex-row text-white p-6 md:p-13 space-between gap-4 md:gap-20 rounded-sm">
          <p className="text-3xl md:text-4xl text-nowrap font-bold">
            Our Vision
          </p>
          <p className="text-sm md:text-base text-wrap ml-0 md:ml-10 mr-0 md:mr-10">
            {" "}
            At Mediprivacy, our mission is to bridge the gap between patients
            and quality healthcare by leveraging technology and human expertise
            — empowering individuals with seamless access, personalized care,
            and trusted solutions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row space-between gap-4 md:gap-20 bg-transparent text-black z-10 mt-[-45px] md:mt-[-90px] p-5">
          <div className="p-6 md:p-8 h-auto md:h-[160px] w-full md:w-[260px] bg-[white] shadow-[0_4px_8px_rgba(0,0,0,0.4)] rounded-sm flex flex-col justify-between items-center gap-3 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
            {" "}
            <HeartPulse color="#F6971E" size={35} />
            <p className="text-center text-sm">
              Easy access to medicines, diagnostics, and doctor consultations.
            </p>
          </div>
          <div className="p-6 md:p-8 h-auto md:h-[160px] w-full md:w-[260px] bg-[white] shadow-[0_4px_8px_rgba(0,0,0,0.4)] rounded-sm flex flex-col justify-between items-center gap-3 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
            {" "}
            <HeartPulse color="#F6971E" size={35} />
            <p className="text-center text-sm">
              A patient-first approach with expert healthcare professionals.
            </p>
          </div>
          <div className="p-6 md:p-8 h-auto md:h-[160px] w-full md:w-[260px] bg-[white] shadow-[0_4px_8px_rgba(0,0,0,0.4)] rounded-sm flex flex-col justify-between items-center gap-3 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
            {" "}
            <HeartPulse color="#F6971E" size={35} />
            <p className="text-center text-sm">
              Seamless hospital visits with our unique MediGuardian service.
            </p>
          </div>
          <div className="p-6 md:p-8 h-auto md:h-[160px] w-full md:w-[260px] bg-[white] shadow-[0_4px_8px_rgba(0,0,0,0.4)] rounded-sm flex flex-col justify-between items-center gap-3 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
            {" "}
            <HeartPulse color="#F6971E" size={35} />
            <p className="text-center text-sm">
              The convenience of smart pharmacies, clinics, and diagnostics
              under one brand.
            </p>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <section className="section-animation" id="services">
        <ServicesSection />
      </section>

      {/* Find Store Section */}
      <section className="section-animation" id="stores">
        <FindStoreSection />
      </section>

      {/* Book an Appointment section */}
      <div
        id="appointment"
        className="flex items-center justify-center bg-[#E9F7F8] section-animation"
      >
        <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-br from-[#1CB5BD] to-[#E9F7F8] w-[90%] md:w-[70%] h-auto md:h-[170px] rounded-2xl p-6 md:p-10 my-10 md:my-30">
          <div className="flex flex-col justify-center mb-4 md:mb-0">
            <p className="text-white text-xl md:text-2xl font-bold text-center md:text-left">
              Ready to get Started?
            </p>
            <p className="text-white text-sm md:text-base text-center md:text-left">
              Call Us to Book an Appointment Now!
            </p>
          </div>
          {/* book an appointment button */}
          <div>
            <button
              className="bg-white text-[#1CB5BD] px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const phoneNumber = "+918000600355";
                navigator.clipboard
                  .writeText(phoneNumber)
                  .then(() => {
                    window.alert(
                      `Call us @${phoneNumber} to book an Appointment Now! The phone number has been copied to your clipboard.`
                    );
                  })
                  .catch((err) => {
                    console.error("Failed to copy phone number: ", err);
                    window.alert(
                      `Call us @${phoneNumber} to book an Appointment Now!`
                    );
                  });
              }}
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Contact Us*/}
      <section className="section-animation" id="contact">
        <ContactusSection />
      </section>

      {/* Add global styles for animations */}
      <style jsx global>{`
        .section-animation {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .animate-section {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
