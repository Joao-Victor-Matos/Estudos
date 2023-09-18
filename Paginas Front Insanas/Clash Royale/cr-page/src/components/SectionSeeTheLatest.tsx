import Image from "next/image";
import Phone from "@/assets/Gameplay2.webp";
import { Section } from "./Section";
import { Title } from "./Title";
import { Container } from "./Container";
import { SocialLinks } from "./SocialLinks";

export function SectionSeeTheLatest () {
  return (
<Section>
  <div className="bg-cr-bg2 bg-cover">
      <Container>
        <div className="flex items-center gap-40 justify-items-start pt-10">
          <Image
            src={Phone}
            alt="Gameplay Clash Royale"
            className="max-w-[450px]"
          />
          <div className="flex flex-col items-start gap-10 text-white">
            <Title name="See the latest" />
            <blockquote className="text-2xl">
            To stay on top of your game, keep an eye on the in-game News section. Follow us on social media for the latest chatter and sneak peeks on what the team is working on. Don’t be a stranger and join the conversation.
            </blockquote>
            <p>FOLLOW CLASH ROYALE ON</p>
            <SocialLinks />
          </div>
        </div>
      </Container>
      </div>
    </Section>
  )
}