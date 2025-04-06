"use client";

import logo1 from "../../public/logos/logo-removebg-preview 1.svg";
import logo2 from "../../public/logos/MediPrivacy.svg";
import {
  Phone,
  HeartPulse,
  Mail,
  PhoneCall,
  MapPin,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import hero from "../../public/assets/image 22.svg";
import line1 from "../../public/assets/output-onlinepngtools (1) 2.svg";
import line2 from "../../public/assets/output-onlinepngtools 2.svg";
import obj1 from "../../public/assets/obj1.svg";
import obj2 from "../../public/assets/obj2.svg";
import obj3 from "../../public/assets/obj3.svg";
import obj4 from "../../public/assets/obj4.svg";
import ser1 from "../../public/assets/servicesIcons/neurology.svg";
import ser2 from "../../public/assets/servicesIcons/blood_pressure.svg";
import ser3 from "../../public/assets/servicesIcons/surgical_sterilization.svg";
import ser4 from "../../public/assets/servicesIcons/gastroenterology.svg";
import ser5 from "../../public/assets/servicesIcons/tooth.svg";
import ser6 from "../../public/assets/servicesIcons/opthalmology.svg";
import ser7 from "../../public/assets/servicesIcons/pediatric_surgery.svg";
import ser8 from "../../public/assets/servicesIcons/orthopaedics.svg";
import futureGoalsGroup from "../../public/assets/futureGoals/Group 137.svg";
import Goal1 from "../../public/assets/futureGoals/Goal1.svg";
import Goal2 from "../../public/assets/futureGoals/Goal2.svg";
import Goal3 from "../../public/assets/futureGoals/Goal3.svg";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle form submission logic here

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Question:", question);
    // Reset form fields
    setName("");
    setEmail("");
    setQuestion("");
    // Show success message
    alert("Your message has been sent successfully!");
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const ScrollToGoals = () => {
    document.getElementById("goals")?.scrollIntoView({ behavior: "smooth" });
  };

  const ScrollToAppointment = () => {
    document
      .getElementById("appointment")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const ScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white w-full z-20 top-0 start-0 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-0 py-4 w-full">
          {/* logo */}
          <Link href="/" className="flex items-center pl-4">
            <Image src={logo1.src} alt="MediPrivacy Logo" width={80} height={20} className="h-20" />
            <Image src={logo2.src} alt="MediPrivacy Logo" width={24} height={6} className="h-6" />
          </Link>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#"
                  className="text-[#27BCB9] font-medium hover:text-[#BBBBBB] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#BBBBBB] font-medium hover:text-[#27BCB9] transition-colors"
                  onClick={scrollToServices}
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#BBBBBB] font-medium hover:text-[#27BCB9] transition-colors"
                  onClick={ScrollToGoals}
                >
                  Future Goals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#BBBBBB] font-medium hover:text-[#27BCB9] transition-colors"
                  onClick={ScrollToAppointment}
                >
                  Book an Appointment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#BBBBBB] font-medium hover:text-[#27BCB9] transition-colors"
                  onClick={ScrollToContact}
                >
                  Contact Us
                </a>
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
            <a
              href="#"
              className="block px-3 py-2 text-[#27BCB9] font-medium hover:text-[#BBBBBB] transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-[#BBBBBB] font-medium hover:text-[#27BCB9] transition-colors"
              onClick={scrollToServices}
            >
              Our Services
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-[#BBBBBB] font-medium hover:text-[#27BCB9] transition-colors"
            >
              Future Goals
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-[#BBBBBB] font-medium hover:text-[#27BCB9] transition-colors"
              onClick={ScrollToAppointment}
            >
              Book an Appointment
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-[#BBBBBB] font-medium hover:text-[#27BCB9] transition-colors"
              onClick={ScrollToContact}
            >
              Contact Us
            </a>
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
      <section className="pt-24 pb-0 bg-white mt-[-30px]">
        <div className="mx-auto px-4 flex gap-4 flex-row">
          {/* Left Section - Text Content */}
          <article className="w-[33%] max-md:w-full ml-10">
            <div className="flex flex-col">
              <h1 className="text-[45px] font-bold text-[#1CB5BD] leading-tight mb-6 mt-10">
                Your One-Stop Healthcare Solution
              </h1>
              <Image src={line1.src} alt="Line Decoration" width={400} height={200} className="w-full mt-[-20px] mb-[10px]" />
              <p className="text-[16px] text-[#787878] leading-relaxed mb-8">
                MediPrivacy is a comprehensive healthcare service provider,
                offering everything from basic first aid to advanced surgeries.
                Our Smart Clinics, Smart Pharmacies, and Smart Diagnostics
                ensure convenient and high-quality healthcare for all
              </p>

              <button
                className="w-fit px-8 py-4 bg-[#F6971E] size={35}text-white font-semibold rounded-lg hover:bg-[#e88a1a] transition-colors"
                aria-label="Book Appointment text-smt"
                onClick={(e) => {
                  e.preventDefault();
                  window.alert("Insert Calendly Link Here!");
                }}
              >
                Book Appointment
              </button>
            </div>
          </article>

          {/* Middle Section - Hero SVG */}
          <div className="w-[44%] flex items-center justify-center">
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
          <article className="w-[28%] max-md:w-full">
            <div className="flex flex-col items-end h-full justify-between ml-[-200px] bg-[transparent] ">
              <div className="w-full max-w-[800px] mt-[170px] bg-[transparent]">
                <Image
                  src={line2.src}
                  alt="Line Decoration"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover bg-transparent"
                />
              </div>
              <div className="w-full max-w-[300px]">
                <blockquote className="text-[17px] text-[#787878] leading-[1.2] relative">
                  <span className="text-[#1CB5BD] text-[40px] absolute -left-4 -top-2">
                    &quot;
                  </span>
                  A trusted assistance companion for your health needs.
                  <span className="text-[#1CB5BD] text-[40px]">&quot;</span>
                </blockquote>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Jambotron */}
      <div className="flex flex-col items-center justify-center bg-white">
        <div className="h-[200px] w-[90%] bg-[#27BCB9] flex flex-row text-white p-13 space-between gap-20 rounded-sm">
          <p className="text-4xl text-nowrap font-bold">Our Vision</p>
          <p className="text-base ml-10 text-wrap mr-10">
            {" "}
            Mediprivacy &quot;Bharosa Rag Rag Mein&quot; Offering comprehensive healthcare
            solutions through smart clinics, smart pharmacies, and smart
            diagnostics, Mediprivacy is dedicated to bringing quality healthcare
            to every corner of the nation. With a vision to connect every pin
            code to the best medical services.
          </p>
        </div>

        <div className="flex flex-row space-between gap-40 bg-transparent text-black z-10 mt-[-50px] p-5">
          <div className="h-[160px] w-[260px] bg-[white] shadow-[0_4px_8px_rgba(0,0,0,0.4)] rounded-sm flex flex-col justify-center items-center gap-7">
            {" "}
            <HeartPulse color="#F6971E" size={35} />
            <p className="text-center text-sm">
              Committed to Nation&apos;s Health we deliver accessible, high quality
              healthcare through i nnovative, technology-driven solutions.
            </p>
          </div>
          <div className="h-[160px] w-[260px] bg-[white] shadow-[0_4px_8px_rgba(0,0,0,0.4)] rounded-sm flex flex-col justify-center items-center gap-7">
            {" "}
            <HeartPulse color="#F6971E" size={35} />
            <p className="text-center text-sm">
              Our vision is to connect the patient to highest quality care,
              combining exceptional treatment with affordable pricing.
            </p>
          </div>
          <div className="h-[160px] w-[260px] bg-[white] shadow-[0_4px_8px_rgba(0,0,0,0.4)] rounded-sm flex flex-col justify-center items-center gap-7">
            {" "}
            <HeartPulse color="#F6971E" size={35} />
            <p className="text-center text-sm">
              We deliver exceptional, best-in class services, driven by a
              relentless focus on customer satisfaction
            </p>
          </div>
        </div>
      </div>

      {/* Objectives Section */}
      <div className="flex flex-col items-center justify-center bg-white">
        {/* heading */}
        <div className="flex flex-row space-between gap-190 mt-[100px]">
          <p className="text-3xl font-semibold text-black"> Objectives</p>
          <p className="text-sm text-[#787878] text-wrap">
            {" "}
            Our team of skilled medical professionals and aids ensure that{" "}
            <br /> you get the care you need and deserve.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-row space-between gap-20 my-[70px] text-black">
          <div className="h-[200px] w-[270px] bg-[#F6971E33] flex flex-col justify-center items-center">
            <Image src={obj1.src} alt="Customer Support Icon" width={100} height={100} className="h-[100px] w-[100px]" />
            <p className="font-semibold">Customer Support</p>
          </div>
          <div className="h-[200px] w-[270px] bg-[#1CB5BD33] flex flex-col justify-center items-center">
            <Image src={obj2.src} alt="Chamber Services Icon" width={100} height={100} className="h-[100px] w-[100px]" />
            <p className="font-semibold">Chamber Services</p>
          </div>
          <div className="h-[200px] w-[270px] bg-[#F6971E33] flex flex-col justify-center items-center">
            <Image src={obj3.src} alt="Online Specialist Icon" width={100} height={100} className="h-[100px] w-[100px]" />
            <p className="font-semibold">Online Specialist</p>
          </div>
          <div className="h-[200px] w-[270px] bg-[#1CB5BD33] flex flex-col justify-center items-center">
            <Image src={obj4.src} alt="Privacy and Security Icon" width={100} height={100} className="h-[100px] w-[100px]" />
            <p className="font-semibold">Privacy and Security</p>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div
        id="services"
        className="flex flex-col w-full items-center justify-center bg-[#27BCB9] p-15"
      >
        {/* heading */}
        <div className="w-[90%] flex justify-start">
          <p className="text-white text-4xl font-semibold">Our Services</p>
        </div>

        {/* Cards */}
        <div className="flex flex-col justify-center items-center w-[90%] mt-10 gap-16">
          <div className="flex flex-row space-between gap-8">
            <div className="bg-transparent w-[300px] h-[300px] rounded-sm border-2 border-[#E9F7F880] flex flex-col p-6">
              <div className="flex flex-row justify-start items-center gap-4">
                <Image
                  src={ser1.src}
                  alt="Neurology Service Icon"
                  width={70}
                  height={70}
                  className="h-[70px] w-[70px]"
                />
                <p className="font-semibold text-lg">Neurology</p>
              </div>
              <p className="mt-6 text-base text-[#E9F7F8D9]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
                qui optio blandit
              </p>
            </div>
            <div className="bg-transparent w-[300px] h-[300px] rounded-sm border-2 border-[#E9F7F880] flex flex-col p-6">
              <div className="flex flex-row justify-start items-center gap-4">
                <Image
                  src={ser2.src}
                  alt="Cardiology Service Icon"
                  width={70}
                  height={70}
                  className="h-[70px] w-[70px]"
                />
                <p className="font-semibold text-lg">Cardiology</p>
              </div>
              <p className="mt-6 text-base text-[#E9F7F8D9]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
                qui optio blandit
              </p>
            </div>
            <div className="bg-transparent w-[300px] h-[300px] rounded-sm border-2 border-[#E9F7F880] flex flex-col p-6">
              <div className="flex flex-row justify-start items-center gap-4">
                <Image
                  src={ser3.src}
                  alt="Surgery Service Icon"
                  width={70}
                  height={70}
                  className="h-[70px] w-[70px]"
                />
                <p className="font-semibold text-lg">Surgery</p>
              </div>
              <p className="mt-6 text-base text-[#E9F7F8D9]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
                qui optio blandit
              </p>
            </div>
            <div className="bg-transparent w-[300px] h-[300px] rounded-sm border-2 border-[#E9F7F880] flex flex-col p-6">
              <div className="flex flex-row justify-start items-center gap-4">
                <Image
                  src={ser4.src}
                  alt="Gastroenterology Service Icon"
                  width={70}
                  height={70}
                  className="h-[70px] w-[70px]"
                />
                <p className="font-semibold text-lg">Gastroenterlogy</p>
              </div>
              <p className="mt-6 text-base text-[#E9F7F8D9]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
                qui optio blandit
              </p>
            </div>
          </div>
          <div className="flex flex-row space-between gap-8">
            <div className="bg-transparent w-[300px] h-[300px] rounded-sm border-2 border-[#E9F7F880] flex flex-col p-6">
              <div className="flex flex-row justify-start items-center gap-4">
                <Image
                  src={ser5.src}
                  alt="Dentist Service Icon"
                  width={70}
                  height={70}
                  className="h-[70px] w-[70px]"
                />
                <p className="font-semibold text-lg">Dentist</p>
              </div>
              <p className="mt-6 text-base text-[#E9F7F8D9]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
                qui optio blandit
              </p>
            </div>
            <div className="bg-transparent w-[300px] h-[300px] rounded-sm border-2 border-[#E9F7F880] flex flex-col p-6">
              <div className="flex flex-row justify-start items-center gap-4">
                <Image
                  src={ser6.src}
                  alt="Ophthalmology Service Icon"
                  width={70}
                  height={70}
                  className="h-[70px] w-[70px]"
                />
                <p className="font-semibold text-lg">Opthalmology</p>
              </div>
              <p className="mt-6 text-base text-[#E9F7F8D9]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
                qui optio blandit
              </p>
            </div>
            <div className="bg-transparent w-[300px] h-[300px] rounded-sm border-2 border-[#E9F7F880] flex flex-col p-6">
              <div className="flex flex-row justify-start items-center gap-4">
                <Image
                  src={ser7.src}
                  alt="Pediatry Service Icon"
                  width={70}
                  height={70}
                  className="h-[70px] w-[70px]"
                />
                <p className="font-semibold text-lg">Pediatry</p>
              </div>
              <p className="mt-6 text-base text-[#E9F7F8D9]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
                qui optio blandit
              </p>
            </div>
            <div className="bg-transparent w-[300px] h-[300px] rounded-sm border-2 border-[#E9F7F880] flex flex-col p-6">
              <div className="flex flex-row justify-start items-center gap-4">
                <Image
                  src={ser8.src}
                  alt="Orthopaedics Service Icon"
                  width={70}
                  height={70}
                  className="h-[70px] w-[70px]"
                />
                <p className="font-semibold text-lg">Orthopaedics</p>
              </div>
              <p className="mt-6 text-base text-[#E9F7F8D9]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
                qui optio blandit
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Future Goals Section */}
      <div
        id="goals"
        className="flex flex-row space-between bg-[#E9F7F8] w-full h-[700px] mt-0 pt-5"
      >
        <div className="w-[50%] flex items-center justify-start mt-[-80px]">
          <div className="h-[600px] w-auto">
            <Image
              src={futureGoalsGroup.src}
              alt="Future Goals Illustration"
              width={800}
              height={600}
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
        <div className="w-[50%] flex flex-col space-between p-12 gap-20">
          <p className="text-black text-4xl">Future Goals</p>
          <div className="flex flex-row justify-start gap-7 items-center">
            <Image src={Goal1.src} alt="Modern Clinics Icon" width={100} height={100} className="h-[100px] w-[100px]" />
            <div className="flex flex-col">
              <p className="text-black text-lg font-semibold">Modern Clinics</p>
              <p className="text-base text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                nesciunt quasi doloribus quibusdam facere, labor
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start gap-7 items-center">
            <Image src={Goal2.src} alt="Less Consultation Fees Icon" width={100} height={100} className="h-[100px] w-[100px]" />
            <div className="flex flex-col">
              <p className="text-black text-lg font-semibold">
                Less Consultaion Fees
              </p>
              <p className="text-base text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                nesciunt quasi doloribus quibusdam facere, labor
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start gap-7 items-center">
            <Image src={Goal3.src} alt="Professional Treatment Icon" width={100} height={100} className="h-[100px] w-[100px]" />
            <div className="flex flex-col">
              <p className="text-black text-lg font-semibold">
                Professional Treatment
              </p>
              <p className="text-base text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                nesciunt quasi doloribus quibusdam facere, labor
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Book an Appointment section */}
      <div
        id="appointment"
        className="flex items-center justify-center bg-[#E9F7F8]"
      >
        <div className="flex flex-row justify-between items-center bg-gradient-to-br from-[#1CB5BD] to-[#E9F7F8] w-[70%] h-[170px] rounded-2xl p-10 my-30">
          <div className="flex flex-col justify-center">
            <p className="text-white text-2xl font-bold">
              Ready to get Started?
            </p>
            <p className="text-white text-base">
              Lorem ipsum dolor sit amet consectetur adipisicin
            </p>
          </div>
          {/* book an appointment button */}
          <div>
            <button
              className="bg-white text-[#1CB5BD] px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.alert("Insert Calendly Link Here!");
              }}
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Contact Us*/}
      <div
        id="contact"
        className="flex flex-row space-between items-center bg-[#E9F7F8] w-full h-[600px] mt-0 pt-5 p-20 gap-20"
      >
        {/* left side */}
        <div className="flex flex-col justify-start">
          <div className="flex flex-row justify-start items-center gap-1">
            <Image src={logo1.src} alt="MediPrivacy Logo" width={120} height={30} className="h-30" />
            <Image src={logo2.src} alt="MediPrivacy Logo" width={40} height={10} className="h-10" />
          </div>
          <div>
            <p className="text-[#1CB5BD] text-4xl">
              Need Assistance? <br /> Reach Out to us, we are ready to{" "}
              <span className="text-[#F6971E]">Help</span>!
            </p>
          </div>
          <div className="flex flex-col justify-start text-[#1CB5BD] mt-8 gap-3">
            <p className="text-xl font-semibold">Contact</p>
            <p className="flex items-center gap-2">
              <Mail /> support@mediprivacy.com
            </p>
            <p className="flex items-center gap-2">
              <PhoneCall /> +91-8000600355
            </p>
            <p className="flex items-center gap-2">
              <MapPin /> 24 V&apos;LANTE Sector 83 Near Hyatt Regency, Gurugram -
              122012 ,Haryana, India
            </p>
          </div>
          <div className="flex flex-col justify-start text-[#1CB5BD] mt-8 gap-3">
            <p className="text-xl font-semibold">Social Media</p>
            <p className="flex items-center gap-2">
              <Instagram />{" "}
              <a href="https://www.instagram.com/mediprivacy/">@mediprivacy</a>
            </p>
            <p className="flex items-center gap-2">
              <Twitter />{" "}
              <a href="https://x.com/MediPrivacy/media">@MediPrivacy</a>
            </p>
            <p className="flex items-center gap-2">
              <Facebook />{" "}
              <a href="https://www.facebook.com/people/Mediprivacy-Pharmacy/100092218269474/#">
                MediPrivacy Pharmacy
              </a>
            </p>
          </div>
        </div>

        {/* right side form */}
        <div className="w-[45%] bg-white rounded-2xl p-8 shadow-[0_4px_8px_rgba(0,0,0,0.1)] mt-20 text-black">
          <h2 className="text-3xl font-semibold text-[#1CB5BD] mb-6">
            Any Questions?
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[#787878] font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#E9F7F8] focus:border-[#1CB5BD] focus:outline-none transition-colors"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[#787878] font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#E9F7F8] focus:border-[#1CB5BD] focus:outline-none transition-colors"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="question" className="text-[#787878] font-medium">
                Question
              </label>
              <textarea
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#E9F7F8] focus:border-[#1CB5BD] focus:outline-none transition-colors resize-none"
                placeholder="Type your question here..."
              />
            </div>
            <button
              type="submit"
              className="w-fit px-8 py-4 bg-[#F6971E] text-white font-semibold rounded-full hover:bg-opacity-90 transition-colors mt-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
