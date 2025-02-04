"use client"
import Image from "next/image";
import DeelLogo from "../../../public/1726142372-deel-1.svg";
import VercelLogo from "../../../public/1726142372-vercel-logo.svg";
import Mercury from "../../../public/1731350987-mercury.svg";
import AngelList from "../../../public/1731689014-angellist.svg";
import Lumistry from "../../../public/1731351596-clip-path-group-marketing-site-3-0.svg";
const companyImages = [
  { id: 1, img: DeelLogo, name: "Deel" },
  { id: 2, img: VercelLogo, name: "Vercel" },
  { id: 3, img: Mercury, name: "Mercury" },
  { id: 4, img: AngelList, name: "AngelList" },
  { id: 5, img: Lumistry, name: "Lumistry" },
];

export const CompanyShow = () => {
  return (
    <div className="">
      <p className="text-center text-white text-lg font-semibold mb-4">
        Trusted by fast-growing companies around the world
      </p>

      <div className="relative w-full flex whitespace-nowrap">
        <div className="flex animate-scroll items-center justify-center">
          {companyImages.concat(companyImages).map((company) => (
            <div key={company.id} className="relative h-12 gap-5 flex">
              <Image
                src={company.img}
                alt={company.name}
                className="brightness-0 invert size-56 "
              />
            </div>
          ))}
        </div>
      </div>

      {/* Styling for scrolling effect */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll 10s linear infinite;
          width: 200%; /* Ensures smooth loop */
        }
      `}</style>
    </div>
  );
};

export default CompanyShow;
