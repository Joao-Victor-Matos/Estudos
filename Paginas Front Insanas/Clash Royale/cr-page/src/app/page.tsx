import { SectionImageLogo } from "@/components/SectionImageLogo";
import { SectionRealTimeBattles } from "@/components/SectionRealTimeBattles";
import { SectionNews } from "@/components/SectionNews";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SectionImageLogo />
      <SectionRealTimeBattles />
      <SectionNews />
    </>
  );
}
