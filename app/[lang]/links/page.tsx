import LinkCard from "@/components/LinkCard";
import { dictionary } from "@/locales";
import { PageParams } from "@/types/pageParams";
import { get } from "@vercel/edge-config";
import {
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTiktok,
  FaTwitch,
} from "react-icons/fa";
import { FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { SlSocialVkontakte } from "react-icons/sl";

const ICONS = [
  { id: "twitter", Component: FaSquareXTwitter, color: "#1DA1F2" },
  { id: "instagram", Component: IoLogoInstagram, color: "#E4405F" },
  { id: "linkedin", Component: FaLinkedinIn, color: "#0077B5" },
  { id: "vk", Component: SlSocialVkontakte, color: "#4C75A3" },
  { id: "t.me", Component: FaTelegramPlane, color: "#0088CC" },
  { id: "youtube", Component: FaYoutube, color: "#FF0000" },
  { id: "tiktok", Component: FaTiktok, color: "#000000" },
  { id: "github", Component: FaGithub, color: "#181717" },
  { id: "twitch", Component: FaTwitch, color: "#9146FF" },
];

interface Link {
  readonly name: string;
  readonly avatar: string;
  readonly socials: readonly {
    readonly title: string;
    readonly href: string;
  }[];
  readonly links: readonly {
    readonly href: string;
    readonly title: string;
    readonly image?: string;
  }[];
}

export default async function Links({ params: { lang } }: PageParams) {
  const data: Link | undefined = await get("get-touch");

  if (!data) return <p>No data</p>;

  return (
    <div className="flex flex-col items-center w-4/5">
      <h1 className="font-bold mt-4 mb-8 text-xl">
        {dictionary[lang]?.helloIAm}
      </h1>
      {data.links.map((link) => {
        return <LinkCard key={link.href} {...link} />;
      })}

      <div className="flex items-center gap-4 mt-8 text-white">
        {ICONS.map(({ id, Component, color }) =>
          data.socials.some((social) => social.href.includes(id)) ? (
            <a
              key={id}
              href={
                data.socials.find((social) => social.href.includes(id))?.href
              }
              className="mr-4 hover:scale-110 transition-transform"
              style={{ color }}
            >
              <Component size={50} />
            </a>
          ) : null
        )}
      </div>
    </div>
  );
}
