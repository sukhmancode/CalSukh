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
    <div className="flex items-center self-center justify-center flex-row mt-10 ">
      <p className="text-center text-lg font-semibold mb-4">
        Trusted by fast-growing companies around the world
      </p>

      <div className="relative w-full flex ">
        <div className="flex animate-scroll items-center justify-center gap-6">
          {companyImages
            .concat(companyImages.map((company) => ({
              ...company,
              id: company.id + companyImages.length,
            })))
            .map((company) => (
              <div key={company.id} className="flex relative gap-8 flex-wrap ">
                <Image
                  src={company.img}
                  alt={company.name}
                  className="invert"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyShow;
