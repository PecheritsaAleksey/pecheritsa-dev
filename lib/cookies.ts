import { setCookie, getCookie } from "cookies-next";

export const setLangCookie = (lang: string) => {
  setCookie("lang", lang, {
    path: "/",
  });
};

export const getLangCookie = () => {
  const cookie = getCookie("lang");

  if (!cookie) return undefined;

  return cookie;
};
