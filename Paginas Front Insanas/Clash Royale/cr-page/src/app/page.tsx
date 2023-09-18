import { SectionImageLogo } from "@/components/SectionImageLogo";
import { SectionRealTimeBattles } from "@/components/SectionRealTimeBattles";
import { SectionNews } from "@/components/SectionNews";
import Image from "next/image";
import { SectionSeeTheLatest } from "@/components/SectionSeeTheLatest";
import { SectionVideos } from "@/components/SectionVideos";
import { SectionInteresedWork } from "@/components/SectionInteresedWork";

export default function Home() {
  return (
    <>
      <SectionImageLogo />
      <SectionRealTimeBattles />
      <SectionNews />
      <SectionSeeTheLatest />
      <SectionVideos />
      <SectionInteresedWork />
    </>
  );
}
