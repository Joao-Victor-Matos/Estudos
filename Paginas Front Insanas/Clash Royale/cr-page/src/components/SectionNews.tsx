import Image from "next/image";
import Logo from "@/assets/crlogo.png";
import { Container } from "./Container";
import { Title } from "./Title";
import { Section } from "./Section";
import New1 from "@/assets/news1.webp";
import New2 from "@/assets/news2.webp";
import { TinyTitle } from "./TinyTitle";
import { Button } from "./Button";
import { ExtraTinyTitle } from "./ExtraTinyTitle";

export function SectionNews() {
  return (
    <Section>
      <Container>
        <div className="flex items-center gap-10 flex-col">
          <Title name="news" />
          <div className="flex flex-row gap-8">
            <div className="items-center flex flex-col gap-2">
              <Image src={New1} alt="Clash Royale News" />
              <ExtraTinyTitle/>
              <TinyTitle
              name="Card gold cost reduced !" />
            </div>
            <div className="items-center flex flex-col gap-2">
              <Image src={New2} alt="Clash Royale News" />
              <ExtraTinyTitle/>
              <TinyTitle
              name="Kings gambit season" />
            </div>
          </div>
          <Button 
          name="Clash Royale News"
          />
        </div>
      </Container>
    </Section>
  );
}
