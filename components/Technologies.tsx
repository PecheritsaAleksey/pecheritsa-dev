import { dictionary } from "@/locales";
import { FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiExpress,
  SiGooglecloud,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

const ICONS = [
  { id: "nodejs", Component: IoLogoJavascript, color: "#F0DB4F" },
  { id: "typescript", Component: SiTypescript, color: "#3178C6" },
  { id: "node", Component: FaNode, color: "#339933" },
  { id: "express", Component: SiExpress, color: "#000000" },
  { id: "nestjs", Component: SiNestjs, color: "#E0234E" },
  { id: "react", Component: FaReact, color: "#61DAFB" },
  { id: "nextjs", Component: SiNextdotjs, color: "#000000" },
  { id: "mui", Component: SiMui, color: "#007FFF" },
  { id: "googlecloud", Component: SiGooglecloud, color: "#4285F4" },
];

export default function Technologies({ lang }: { lang: string }) {
  return (
    <div className="flex flex-col items-center align-center justify-around w-4/5 lg:w-1/2 pt-48 pb-16">
      <div>
        <h2 className="text-2xl font-bold text-center">
          {dictionary[lang]?.technologies}
        </h2>
        <p className="pt-2 text-center">
          {dictionary[lang]?.technologiesDescription}
        </p>
      </div>
      <div className="pt-8 flex justify-center align-center flex-wrap">
        {ICONS.map(({ id, Component, color }) => (
          <div
            key={id}
            className="mr-4 hover:scale-110 transition-transform"
            style={{ color }}
          >
            <Component size={50} />
          </div>
        ))}
      </div>
    </div>
  );
}
