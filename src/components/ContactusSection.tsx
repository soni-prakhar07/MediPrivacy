import {
  Mail,
  PhoneCall,
  MapPin,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import logo1 from "../../public/logos/logo-removebg-preview 1.svg";
import logo2 from "../../public/logos/MediPrivacy.svg";
import Image from "next/image";
import { useState } from "react";

export default function ContactusSection() {
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

  return (
    <div
      id="contact"
      className="flex flex-row space-between items-center bg-[#E9F7F8] w-full h-[700px] mt-0 pt-5 p-20 gap-20 relative "
    >
      {/* Background Circles */}
      <div className="absolute left-[-100] top-30 w-[50%] h-[50%] flex items-center justify-center">
        <div className="relative w-[900px] h-[700px]">
          {/* Outer Circle */}
          <div className="absolute inset-0 rounded-full border-[2px] border-[#B3E5FC]" />
          {/* Inner Circle */}
          <div className="absolute inset-[50px] rounded-full bg-gradient-to-br from-[#C8E6C9] to-[#B3E5FC] opacity-30" />
        </div>
      </div>

      {/* left side */}
      <div className="flex flex-col justify-start relative z-10">
        <div className="flex flex-row justify-start items-center gap-1">
          <Image
            src={logo1.src}
            alt="MediPrivacy Logo"
            width={120}
            height={30}
            className="h-30"
          />
          <Image
            src={logo2.src}
            alt="MediPrivacy Logo"
            width={8}
            height={8}
            className="w-auto h-auto"
          />
        </div>
        <div>
          <p className="text-[#1CB5BD] text-4xl">
            Need Assistance? <br /> Reach Out to us, we are ready to{" "}
            <span className="text-[#F6971E]">Help</span>!
          </p>
        </div>
        <div className="flex flex-col justify-start text-[#1CB5BD] mt-8 gap-3">
          <p className="text-xl font-semibold">Contact</p>
          <a href="mailto:support@mediprivacy.com">
            <p className="flex items-center gap-2">
              <Mail /> support@mediprivacy.com
            </p>
          </a>
          <p className="flex items-center gap-2">
            <PhoneCall /> +91-8000600355
          </p>
          <a href="https://maps.app.goo.gl/UuJS5S3Eyoh6d2FWA">
            <p className="flex items-center gap-2">
              <MapPin /> 24 V&apos;LANTE Sector 83 Near Hyatt Regency, Gurugram
              - 122012 ,Haryana, India
            </p>
          </a>
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
      <div className="w-[45%] bg-white rounded-2xl p-8 shadow-[0_4px_8px_rgba(0,0,0,0.3)] mt-10 text-[#F6971E] relative z-10">
        <h2 className="text-3xl font-semibold text-[#1CB5BD] mb-6 text-shadow-md">
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
  );
}
