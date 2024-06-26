import { dictionary } from "@/locales";
import Image from "next/image";

export default function AboutMe({ lang }: { lang: string }) {
  return (
    <div className="animate-fade-in-down flex flex-col items-center justify-around md:flex-row w-4/5 md:w-3/5 xl:w-1/2 pt-16">
      <div className="relative md:hidden mb-4 w-36 h-36 md:w-500 md:h-500 md:order-2 rounded-full md:rounded-2xl overflow-hidden">
        <Image
          src="/avatar.jpg"
          alt="me"
          className="object-cover h-full w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold lg:w-2/3">
          {dictionary[lang]?.helloIAm}
        </h1>
        <p className="pt-2">{dictionary[lang]?.whoAmI}</p>
        <div className="pt-2 flex">
          <a href="http://t.me/pecheritsa_alex" target="_blank">
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="flex w-44 justify-between items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/1999/xlink"
                xmlSpace="preserve"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="1.41421"
              >
                <path
                  id="telegram-1"
                  d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
                />
              </svg>

              {dictionary[lang]?.writeMe}
            </button>
          </a>
          <a
            href="https://docs.google.com/document/d/1C2Riw79Ti8XVsEoqQ8uTSMHcjuDfhjKkHORxtF5NNCU/edit?usp=sharing"
            target="_blank"
          >
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="w-44 justify-between items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              {dictionary[lang]?.myCV}
            </button>
          </a>
        </div>
      </div>
      <div className="hidden md:block">
        <Image
          src="/avatar.jpg"
          alt="me"
          width={500}
          height={500}
          className="animate-fade-in-down object-cover rounded-2xl"
          priority={true}
        />
      </div>
    </div>
  );
}
