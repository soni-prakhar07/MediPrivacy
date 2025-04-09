import Goal1 from "../../public/assets/futureGoals/Goal1.svg";
import Goal2 from "../../public/assets/futureGoals/Goal2.svg";
import Goal3 from "../../public/assets/futureGoals/Goal3.svg";
import Image from "next/image";
import slantImage from "../../public/assets/futureGoals/slantImage.jpeg";
import image2 from "../../public/assets/futureGoals/image2.jpeg";
import Link from "next/link";

const contents = [
  {
    id: 1,
    image: (
      <Image
        src={Goal1.src}
        alt="Modern Clinics Icon"
        width={100}
        height={100}
        className="h-[100px] w-[100px]"
      />
    ),
    text: "Locate our stores easily through our website.",
  },
  {
    id: 2,
    image: (
      <Image
        src={Goal2.src}
        alt="Less Consultation Fees Icon"
        width={100}
        height={100}
        className="h-[100px] w-[100px]"
      />
    ),
    text: "Walk into our centers for consultations, medicines, or diagnostic services.",
  },
  {
    id: 3,
    image: (
      <Image
        src={Goal3.src}
        alt="Professional Treatment Icon"
        width={100}
        height={100}
        className="h-[100px] w-[100px]"
      />
    ),
    text: "Get expert guidance from our trained healthcare professionals.",
  },
];

export default function FindStoreSection() {
  return (
    <div
      id="stores"
      className="flex flex-row justify-center bg-[#E9F7F8] w-full h-[700px] mt-0 pt-5 relative overflow-hidden"
    >
      {/* Rotated div with slantImage */}
      <div>
        <div className="absolute w-[50%] left-[-100px] top-[-30px] w-[300px] h-[980px] bg-white rounded-4xl overflow-hidden transform rotate-[48deg] shadow-lg">
          <div className="w-full h-full transform-rotate-[48deg]">
            <Image
              src={slantImage}
              alt="Slant Image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="absolute w-[12%] h-[16%] left-[100px] top-[540px] bg-[#1CB5BD] rounded-xl flex flex-col justify-center items-center">
          <Link href="https://maps.app.goo.gl/UuJS5S3Eyoh6d2FWA">
            <button className="flex flex-row items-center">
              <p className="font-bold">
                See Nearest <br />
                Store
              </p>
              <p className="font-bold">→</p>
            </button>
          </Link>
        </div>
        <div className="absolute w-[20%] h-[35%] left-[400px] top-[400px] rounded-xl flex flex-col justify-center items-center">
          <div className="w-full h-full">
            <Image
              src={image2}
              alt="Image 2"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="ml-[50%] w-[50%] flex flex-col space-between p-12 gap-20 relative z-10">
        <p className="text-[#F6971E] text-5xl font-semibold">
          Our Stores Near You
        </p>

        {contents.map((content) => {
          return (
            <div
              key={content.id}
              className="flex flex-row justify-start gap-7 items-center"
            >
              {content.image}
              <div className="flex flex-col">
                <p className="text-lg text-black font-base">{content.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
