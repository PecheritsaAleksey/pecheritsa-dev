import AboutMe from "@/components/AboutMe";
import CurrentWork from "@/components/CurrentWork";
import Technologies from "@/components/Technologies";
import { PageParams } from "@/types/pageParams";

export default function Home({ params: { lang } }: PageParams) {
  return (
    <>
      <AboutMe lang={lang} />
      <CurrentWork lang={lang} />
      <Technologies lang={lang} />
    </>
  );
}
