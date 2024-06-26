import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { dictionary } from "@/locales";

const navItems = {
  "/": {
    name: "home",
  },
  "/links": {
    name: "links",
  },
};

export function Navbar({ lang }: { lang: string }) {
  return (
    <aside className="flex items-center w-4/5 lg:w-1/2 pt-16 lg:pt-0">
      <div className="flex items-center justify-between ">
        <div className="flex flex-grow">
          <nav
            className="flex items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex space-x-0">
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle block py-1 px-2 text-sm lg:text-xl"
                  >
                    {dictionary[lang]?.[name]}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
      <div className="ml-auto">
        <LanguageSwitcher />
      </div>
    </aside>
  );
}
