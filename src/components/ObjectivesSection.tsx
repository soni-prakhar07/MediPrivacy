import Image from "next/image";
import obj1 from "../../public/assets/obj1.svg";
import obj2 from "../../public/assets/obj2.svg";
import obj3 from "../../public/assets/obj3.svg";
import obj4 from "../../public/assets/obj4.svg";

export default function ObjectivesSection() {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      {/* heading */}
      <div className="flex flex-row space-between gap-190 mt-[100px]">
        <p className="text-3xl font-semibold text-black"> Objectives</p>
        <p className="text-sm text-[#787878] text-wrap">
          {" "}
          Our team of skilled medical professionals and aids ensure that <br />{" "}
          you get the care you need and deserve.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-row space-between gap-20 my-[70px] text-black">
        <div className="h-[200px] w-[270px] bg-[#F6971E33] flex flex-col justify-center items-center">
          <Image
            src={obj1.src}
            alt="Customer Support Icon"
            width={100}
            height={100}
            className="h-[100px] w-[100px]"
          />
          <p className="font-semibold">Customer Support</p>
        </div>
        <div className="h-[200px] w-[270px] bg-[#1CB5BD33] flex flex-col justify-center items-center">
          <Image
            src={obj2.src}
            alt="Chamber Services Icon"
            width={100}
            height={100}
            className="h-[100px] w-[100px]"
          />
          <p className="font-semibold">Chamber Services</p>
        </div>
        <div className="h-[200px] w-[270px] bg-[#F6971E33] flex flex-col justify-center items-center">
          <Image
            src={obj3.src}
            alt="Online Specialist Icon"
            width={100}
            height={100}
            className="h-[100px] w-[100px]"
          />
          <p className="font-semibold">Online Specialist</p>
        </div>
        <div className="h-[200px] w-[270px] bg-[#1CB5BD33] flex flex-col justify-center items-center">
          <Image
            src={obj4.src}
            alt="Privacy and Security Icon"
            width={100}
            height={100}
            className="h-[100px] w-[100px]"
          />
          <p className="font-semibold">Privacy and Security</p>
        </div>
      </div>
    </div>
  );
}
