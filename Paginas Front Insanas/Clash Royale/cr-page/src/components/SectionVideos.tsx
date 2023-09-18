import Image from "next/image";
import Video1 from "@/assets/video2.webp";
import YoutubeIcon from "@/assets/youtubeicon.webp";
import { Container } from "./Container";
import { Title } from "./Title";
import { TinyTitle } from "./TinyTitle";
import { Button } from "./Button";
import { ExtraTinyTitle } from "./ExtraTinyTitle";

export function SectionVideos() {
  return (
    <Container>
      <div className="flex items-center gap-10 flex-col mt-20">
        <div className="flex flex-row gap-8">
          <div className="items-center flex flex-col gap-2 shadow-2xl py-3">
            <Image src={Video1} alt="Clash Royale Video" />
            <div className="flex flex-row items-center gap-20">
              <TinyTitle name="Its time to evolve !" />
              <Image src={YoutubeIcon} alt="Youtube" className="w-20" />
            </div>
          </div>
          <div className="items-center flex flex-col gap-2 shadow-2xl py-3">
            <Image src={Video1} alt="Clash Royale Video" />
            <div className="flex flex-row items-center gap-20">
              <TinyTitle name="Super archers !" />
              <Image src={YoutubeIcon} alt="Youtube" className="w-20" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
