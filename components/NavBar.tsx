import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = {
  "/": {
    name: "home",
  },
  "/work": {
    name: "work",
  },
  "/blog": {
    name: "blog",
  },
  "/guestbook": {
    name: "guestbook",
  },
};

export function Navbar() {
  return (
    <aside className="mb-16 tracking-tight w-full">
      <div className="flex lg:sticky lg:top-20 items-center justify-between">
        <div className="flex justify-center flex-grow">
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
                    {name}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
        <div className="ml-auto">
          <LanguageSwitcher />
        </div>
      </div>
    </aside>
  );
}
