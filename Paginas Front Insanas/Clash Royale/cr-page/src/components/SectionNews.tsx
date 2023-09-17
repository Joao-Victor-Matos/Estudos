import Image from "next/image";
import Logo from "@/assets/crlogo.png";
import { Container } from "./Container";
import { Title } from "./Title";
import { Section } from "./Section";
import New1 from "@/assets/news1.webp";
import New2 from "@/assets/news2.webp";

export function SectionNews() {
  return (
    <Section>
      <Container>
        <div className="flex items-center gap-10 flex-col ">
          <Title name="news" />
          <div className="flex flex-row gap-8">
            <div>
              <Image src={New1} alt="Clash Royale News" />
            </div>
            <div>
              <Image src={New2} alt="Clash Royale News" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
