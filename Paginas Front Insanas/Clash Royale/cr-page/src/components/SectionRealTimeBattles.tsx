import Image from "next/image";
import Phone from "@/assets/Gameplay.webp";
import Apple from "@/assets/applestore.webp";
import GooglePlay from "@/assets/googleplay.webp";
import { Container } from "./Container";
import { Title } from "./Title";
import { Section } from "./Section";

export function SectionRealTimeBattles() {
  return (
    <Section>
      <Container>
        <div className="flex items-center gap-40 justify-items-start">
          <Image
            src={Phone}
            alt="Gameplay Clash Royale"
            className="max-w-[500px]"
          />
          <div className="flex flex-col items-start gap-10">
            <Title name="epic real-time battles" />
            <blockquote className="text-2xl">
              Clash Royale is a real-time multiplayer game starring the Royales,
              your favourite Clash characters and much, much more. Collect and
              upgrade dozens of cards featuring the Clash of Clans troops,
              spells and defenses you know and love, as well as the Royales:
              Princes, Knights, Baby Dragons and more. Knock the enemy King and
              Princesses from their towers to defeat your opponents and win
              Trophies, Crowns and glory in the Arena.
            </blockquote>
            <div className="flex items-center flex-row gap-10">
              <Image src={Apple} alt="Apple Store" className="max-w-[200px]" />
              <Image
                src={GooglePlay}
                alt="Google Play Store"
                className="max-w-[220px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
