import { Container } from "./Container";
import { Title } from "./Title";
import Image from "next/image";
import MiniPekka from "@/assets/minipeka.webp";
import { Section } from "./Section";

export function SectionInteresedWork() {
  return (
    <Section>
      <div>
        <Image
          src={MiniPekka}
          alt="Mini Pekka Clash Royale"
          className="w-80 absolute right-96 mt-10"
        />
      </div>
      <div className="w-full bg-primary-blue h-min mt-32">
        <Container>
          <div className="flex flex-row gap-32 p-10">
            <div className="flex items-center flex-col gap-10  mx-10 text-white">
              <Title name="Interested in working with us?" />
              <button className="bg-white rounded-lg  px-6 py-3">
                <span className="text-1xl text-black uppercase font-semibold">
                  SEE ALL POSITIONS
                </span>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
