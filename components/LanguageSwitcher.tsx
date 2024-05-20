"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { getLangCookie, setLangCookie } from "@/lib/cookies";

const LANG_LIST = [{ code: "ru" }, { code: "en" }];

const LanguageSwitcher = () => {
  const [currentLangCode, setCurrentLangCode] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    const lang = getLangCookie();
    setCurrentLangCode(lang);
  }, []);

  const langChangeHandler = () => () => {
    const currentLangIndex = LANG_LIST.findIndex(
      (lang) => lang.code === currentLangCode
    );
    const nextLangIndex = (currentLangIndex + 1) % LANG_LIST.length;
    setLangCookie(LANG_LIST[nextLangIndex].code);
    router.refresh();
  };

  return (
    <>
      <button
        className="hover:text-neutral-600 dark:hover:text-neutral-200"
        onClick={langChangeHandler()}
      >
        {currentLangCode?.toLocaleUpperCase()}
      </button>
    </>
  );
};

export default LanguageSwitcher;
