import { dictionary } from "@/locales";
import Image from "next/image";

export default function CurrentWork({ lang }: { lang: string }) {
  return (
    <div className="flex items-center align-center justify-around w-4/5 lg:w-1/2 pt-48">
      <div>
        <h2 className="text-2xl font-bold text-center">
          {dictionary[lang]?.currentProject}
        </h2>
        <p className="pt-2 text-center">
          {dictionary[lang]?.currentDescription}
        </p>
        <Image
          src="/project.png"
          alt="project"
          width={1500}
          height={1500}
          className="animate-fade-in-down w-full mt-8 rounded-2xl"
        />
      </div>
    </div>
  );
}
