"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Mediprivacy Pharmacy",
    description:
      "Mediprivacy Pharmacy is your go-to destination for all prescription medicines and over-the-counter (OTC) needs. We ensure authentic medicines, quick access, and reliable services to enhance your healthcare experience.",
    features: [
      "100% genuine medicines and healthcare essentials",
      "Wide range of OTC products, including vitamins, supplements, and wellness items",
      "Fast and hassle-free ordering with doorstep delivery options",
      "Expert pharmacists available for consultation",
    ],
    icon: (
      <svg
        fill="#ffffff"
        width="64px"
        height="64px"
        viewBox="0 0 1024.00 1024.00"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffffff"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          <path d="M855.808 428.503c71.424-71.424 71.424-187.214.021-258.618l-3.686-3.676c-71.424-71.424-187.214-71.424-258.638 0L166.201 593.513c-71.416 71.425-71.413 187.226.009 258.649l3.656 3.656c71.424 71.424 187.224 71.424 258.647 0l427.295-427.315zm28.963 28.963L457.476 884.781c-87.419 87.419-229.155 87.419-316.574 0l-3.656-3.656c-87.417-87.417-87.421-229.152-.01-316.574l427.305-427.305c87.419-87.419 229.144-87.419 316.543-.02l3.686 3.676c87.419 87.419 87.419 229.144 0 316.564z" />
          <path d="M350.519 380.235l291.267 291.267c7.998 7.998 20.965 7.998 28.963 0s7.998-20.965 0-28.963L379.482 351.272c-7.998-7.998-20.965-7.998-28.963 0s-7.998 20.965 0 28.963zM181.871 539.999v361.298c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V539.999c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48zm107.52-119.113V928.77c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V420.886c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z" />
          <path d="M397.935 425.311V880.1c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V425.311c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48zm106.496 114.688V769.17c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V539.999c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z" />
        </g>
      </svg>
    ),
  },
  {
    title: "Mediprivacy Clinic",
    description:
      "Experience world-class medical consultations with the best doctors across multiple specializations at Mediprivacy Clinics. Our clinics are equipped with modern facilities and experienced healthcare professionals to provide personalized care.",
    features: [
      "Consultations with general physicians and specialists",
      "Preventive healthcare check-ups and wellness programs",
      "Modern medical facilities for accurate diagnosis and treatment",
      "Hassle-free appointment booking and minimal waiting time",
    ],
    icon: (
      <svg
        height="64px"
        width="64px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <path
                  style={{ fill: "#ffffff" }}
                  d="M490.259,220.671h-86.964V43.482h14.132c11.958,0,22.828-9.783,22.828-21.741S430.471,0,418.514,0 H93.486C81.529,0,71.745,9.783,71.745,21.741s9.783,21.741,21.741,21.741h13.045v177.189h-84.79 C9.783,220.671,0,230.454,0,242.412v247.847C0,502.217,9.783,512,21.741,512h181.537h104.357h181.537 c11.958,0,21.741-9.783,22.828-21.741V242.412C512,230.454,502.217,220.671,490.259,220.671z M150.013,43.482h209.8v177.189 h-209.8V43.482z M223.932,469.605V368.51h61.962v101.096H223.932z M468.518,469.605H329.376V346.769 c0-11.958-9.783-21.741-21.741-21.741H203.278c-11.958,0-21.741,9.783-21.741,21.741v122.837H42.395V264.153h426.123V469.605z"
                />{" "}
                <path
                  style={{ fill: "#ffffff" }}
                  d="M302.2,106.531h-25.002V81.529c0-11.958-9.783-21.741-21.741-21.741 c-11.958,0-21.741,9.783-21.741,21.741v25.002h-25.002c-11.958,0-21.741,9.783-21.741,21.741 c0,11.958,9.783,21.741,21.741,21.741h25.002v25.002c0,11.958,9.783,21.741,21.741,21.741c11.958,0,21.741-8.696,21.741-21.741 v-25.002H302.2c11.958,0,21.741-9.783,21.741-21.741C323.941,116.314,314.157,106.531,302.2,106.531z"
                />{" "}
              </g>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    ),
  },
  {
    title: "Mediprivacy Diagnostic",
    description:
      "Mediprivacy Diagnostic offers comprehensive pathology and radiology services to ensure accurate and timely diagnosis. With state-of-the-art labs and expert radiologists, we deliver precise results for better healthcare decisions.",
    features: [
      "MRI Scans",
      "CT Scans",
      "X-rays",
      "Ultrasounds",
      "Blood Tests",
      "ECG",
      "2D Echo",
      "Complete Body Check-ups",
      "Other essential diagnostic services",
    ],
    icon: (
      <svg
        fill="#ffffff"
        height="64px"
        width="64px"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 201.324 201.324"
        xmlSpace="preserve"
        stroke="#ffffff"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          {" "}
          <circle cx="95.596" cy="10.083" r="10.083" />{" "}
          <circle cx="149.018" cy="10.083" r="10.083" />{" "}
          <path d="M179.06,19.254c-5.123-8.873-14.298-14.17-24.544-14.17v10c6.631,0,12.568,3.428,15.884,9.17 c3.316,5.743,3.316,12.599,0.001,18.342l-32.122,55.636c-3.315,5.742-9.253,9.17-15.884,9.171c-6.631,0-12.569-3.428-15.885-9.171 L74.389,42.595c-3.315-5.742-3.315-12.599,0-18.341s9.254-9.171,15.885-9.171v-10c-10.246,0-19.422,5.297-24.545,14.171 s-5.123,19.468,0,28.341l32.121,55.636c4.272,7.399,11.366,12.299,19.545,13.727v26.832c0,26.211-15.473,47.535-34.492,47.535 c-19.019,0-34.491-21.324-34.491-47.535v-31.948C59.802,109.52,68.4,99.424,68.4,87.356c0-13.779-11.21-24.989-24.989-24.989 s-24.989,11.21-24.989,24.989c0,12.067,8.598,22.163,19.989,24.486v31.948c0,31.725,19.959,57.535,44.492,57.535 c24.532,0,44.491-25.81,44.491-57.535v-26.832c8.178-1.428,15.273-6.328,19.544-13.727l32.122-55.636 C184.184,38.722,184.184,28.127,179.06,19.254z" />{" "}
        </g>
      </svg>
    ),
  },
  {
    title: "Preventive Health Packages",
    description:
      "At Mediprivacy, we believe prevention is better than cure. Our preventive health packages help you stay ahead of potential health risks by offering comprehensive screening and early diagnosis.",
    features: [
      "Basic Health Check-up (CBC, Blood Sugar, Lipid Profile, Liver & Kidney Function Tests)",
      "Comprehensive Health Check-up (Includes Basic Package + Thyroid, Vitamin D, B12 Tests)",
      "Heart Health Package (ECG, 2D Echo, Lipid Profile, Blood Pressure Monitoring)",
      "Diabetic Care Package (HbA1c, Fasting Blood Sugar, Kidney Function Tests)",
      "Senior Citizen Health Package (Complete Body Check-up with Bone & Joint Health Screening)",
      "Women's Wellness Package (Hormonal Profile, Breast & Cervical Cancer Screening)",
    ],
    icon: (
      <svg
        fill="#ffffff"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="64px"
        height="64px"
        viewBox="0 0 45.057 45.057"
        xmlSpace="preserve"
        stroke="#ffffff"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <g id="_x31_30_32_">
              {" "}
              <g>
                {" "}
                <path d="M20.326,16.588c6.417,0,5.835,0,12.253,0c1.611,0,1.611-2.5,0-2.5c-6.418,0-5.836,0-12.253,0 C18.715,14.088,18.715,16.588,20.326,16.588z" />{" "}
                <path d="M32.579,21.005c-6.418,0-5.836,0-12.253,0c-1.611,0-1.611,2.5,0,2.5c6.417,0,5.835,0,12.253,0 C34.19,23.505,34.19,21.005,32.579,21.005z" />{" "}
                <path d="M32.579,27.488c-6.418,0-5.836,0-12.253,0c-1.611,0-1.611,2.5,0,2.5c6.417,0,5.835,0,12.253,0 C34.19,29.988,34.19,27.488,32.579,27.488z" />{" "}
                <path d="M32.579,34.404c-6.418,0-5.836,0-12.253,0c-1.611,0-1.611,2.5,0,2.5c6.417,0,5.835,0,12.253,0 C34.19,36.904,34.19,34.404,32.579,34.404z" />{" "}
                <path d="M14.875,12.628l-0.355,0.513c-0.434,0.624-0.881,1.264-1.256,1.938c-0.006-0.006-0.012-0.013-0.018-0.02l-0.23-0.266 c-0.436-0.498-1.277-0.333-1.549,0.267c-0.158,0.348-0.1,0.743,0.152,1.032l0.244,0.283c0.314,0.365,0.641,0.744,1.01,1.084 c0.182,0.166,0.416,0.258,0.656,0.258c0.412,0,0.779-0.269,0.914-0.669c0.318-0.952,0.975-1.881,1.609-2.78 c0.146-0.209,0.293-0.414,0.432-0.617c0.195-0.286,0.219-0.631,0.064-0.924C16.238,12.138,15.271,12.049,14.875,12.628z" />{" "}
                <path d="M14.275,19.439l-0.355,0.514c-0.436,0.623-0.881,1.264-1.258,1.938c-0.006-0.007-0.012-0.014-0.016-0.02l-0.232-0.267 c-0.434-0.497-1.275-0.331-1.547,0.267c-0.158,0.348-0.1,0.744,0.152,1.033l0.244,0.282c0.314,0.366,0.639,0.745,1.01,1.084 c0.182,0.168,0.414,0.26,0.654,0.26c0.414,0,0.781-0.271,0.916-0.67c0.318-0.952,0.973-1.881,1.607-2.78 c0.148-0.209,0.293-0.415,0.432-0.617c0.195-0.287,0.221-0.632,0.066-0.924C15.638,18.95,14.67,18.86,14.275,19.439z" />{" "}
                <path d="M14.275,26.41l-0.355,0.514c-0.436,0.624-0.881,1.264-1.258,1.938c-0.006-0.006-0.01-0.013-0.016-0.02l-0.232-0.266 c-0.434-0.498-1.275-0.332-1.547,0.267c-0.158,0.349-0.1,0.743,0.152,1.032l0.244,0.283c0.314,0.365,0.639,0.744,1.01,1.084 c0.182,0.166,0.414,0.258,0.654,0.258c0.414,0,0.781-0.27,0.916-0.67c0.318-0.951,0.973-1.881,1.607-2.779 c0.148-0.209,0.293-0.414,0.432-0.617c0.195-0.285,0.221-0.631,0.066-0.924C15.638,25.922,14.67,25.832,14.275,26.41z" />{" "}
                <path d="M14.275,33.527l-0.355,0.514c-0.436,0.623-0.881,1.264-1.258,1.938c-0.006-0.007-0.012-0.014-0.016-0.02l-0.232-0.268 c-0.434-0.498-1.275-0.332-1.547,0.268c-0.158,0.348-0.1,0.744,0.152,1.033l0.244,0.281c0.314,0.366,0.639,0.746,1.01,1.084 c0.182,0.168,0.414,0.26,0.654,0.26c0.414,0,0.781-0.271,0.916-0.67c0.318-0.951,0.973-1.881,1.607-2.779 c0.148-0.209,0.293-0.415,0.432-0.617c0.195-0.287,0.221-0.632,0.066-0.924C15.638,33.039,14.67,32.947,14.275,33.527z" />{" "}
                <path d="M33.431,0H5.179v45.057h34.699V6.251L33.431,0z M36.878,42.056H8.179V3h23.707v4.76h4.992V42.056L36.878,42.056z" />{" "}
              </g>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    ),
  },
  {
    title: "MediGuardian - Your Healthcare Companion",
    description:
      "MediGuardian is a first-of-its-kind service that provides trained healthcare professionals to assist you throughout your hospital visits. Whether you need transportation, support during appointments, or medical guidance, our MediGuardian team ensures a smooth and stress-free healthcare experience.",
    features: [
      "Trained healthcare professionals for assistance",
      "Transportation support",
      "Appointment guidance",
      "Medical support during hospital visits",
    ],
    icon: (
      <svg
        fill="#ffffff"
        height="64px"
        width="64px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 222.278 222.278"
        xmlSpace="preserve"
        stroke="#ffffff"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <polygon points="74.776,169.752 66.695,169.752 66.695,181.874 54.573,181.874 54.573,189.954 66.695,189.954 66.695,202.076 74.776,202.076 74.776,189.954 86.896,189.954 86.896,181.874 74.776,181.874 " />{" "}
                <path d="M123.26,72.783c0-4.457,3.626-8.081,8.081-8.081s8.081,3.624,8.081,8.081v4.04h8.081v-4.04 c0-8.912-7.248-16.162-16.162-16.162s-16.162,7.25-16.162,16.162v4.04h8.081V72.783z" />{" "}
                <path d="M86.896,56.621c-8.914,0-16.162,7.25-16.162,16.162v4.04h8.081v-4.04c0-4.457,3.626-8.081,8.081-8.081 s8.081,3.624,8.081,8.081v4.04h8.081v-4.04C103.058,63.871,95.81,56.621,86.896,56.621z" />{" "}
                <path d="M159.633,149.55h-28.291v-11.107c28.993-8.848,50.15-35.831,50.15-67.681C181.492,31.743,149.748,0,110.729,0 c-39.02,0-70.762,31.743-70.762,70.762c0,32.145,21.563,59.303,50.971,67.892v10.896H62.646 c-20.048,0-36.356,16.312-36.356,36.364v36.364h169.697v-36.364C195.987,165.862,179.68,149.55,159.633,149.55z M110.729,8.081 c22.254,0,41.785,11.691,52.91,29.218c-7.208,4.703-15.516,7.201-24.217,7.201c-16.541,0-31.613-9.097-39.339-23.743 l-2.525-4.782l-3.871,3.776c-8.349,8.144-19.37,12.628-31.033,12.628c-0.509,0-0.957,0.021-1.403,0.042 C72.729,17.644,90.612,8.081,110.729,8.081z M48.047,70.762c0-10.903,2.808-21.157,7.724-30.097 c1.586,0.141,2.893,0.04,4.16-0.065c0.801-0.067,1.665-0.142,2.722-0.142c12.074,0,23.572-4.068,32.868-11.549 c9.667,14.718,26.061,23.67,43.9,23.67c10.071,0,19.706-2.821,28.105-8.163c3.737,8.022,5.884,16.928,5.884,26.345 c0,34.194-27.533,62.036-61.591,62.626h-2.181C75.581,132.799,48.047,104.957,48.047,70.762z M187.907,214.197H34.371v-28.283 c0-15.594,12.685-28.283,28.275-28.283h36.372V141.47h10.62c0.367,0.006,0.722,0.055,1.091,0.055c0.368,0,0.724-0.05,1.09-0.055 h11.441v16.162h36.372c15.589,0,28.275,12.689,28.275,28.283V214.197z" />{" "}
              </g>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setDirection("right");
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [isAnimating]);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection("right");
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection("left");
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + services.length) % services.length
      );
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  return (
    <div
      id="services"
      className="flex flex-col w-full items-center justify-center bg-[#27BCB9] p-15"
    >
      {/* heading */}
      <div className="w-[90%] flex justify-start mb-10">
        <p className="text-white text-4xl font-semibold text-shadow-lg">
          Our Services
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-[90%] h-[600px] flex items-center justify-center overflow-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-50 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-[#27BCB9]" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 z-50 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-[#27BCB9]" />
        </button>

        {/* Service Cards Container */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-[1100px] h-[509px]">
            {services.map((service, index) => (
              <div
                key={index}
                className={`absolute bg-transparent rounded-2xl shadow-lg p-8 flex flex-col transition-all duration-300 ease-out border-3 border-[#E9F7F880] ${
                  index === currentIndex
                    ? "translate-x-0"
                    : index < currentIndex
                    ? "-translate-x-full"
                    : "translate-x-full"
                }`}
                style={{
                  width: "1100px",
                  height: "509px",
                  opacity: index === currentIndex ? 1 : 0,
                  zIndex: index === currentIndex ? 10 : 0,
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  {service.icon}
                  <h2 className="text-2xl font-semibold text-[white] text-shadow-lg">
                    {service.title}
                  </h2>
                </div>
                <p className="text-[#E9F7F8D9] mb-6">{service.description}</p>
                <div className="flex-1 overflow-y-auto">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-[#E9F7F8D9]"
                      >
                        <span className="text-[#F6971E] text-extrabold">✔</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex gap-2 mt-6">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setDirection(index > currentIndex ? "right" : "left");
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 300);
              }
            }}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
