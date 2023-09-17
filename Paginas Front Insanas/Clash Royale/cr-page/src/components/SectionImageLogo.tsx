import Image from "next/image";
import Logo from "@/assets/crlogo.png";
import { Container } from "./Container";
export function SectionImageLogo() {
  return (
    <section className="w-full h-[800px] bg-cr-bg bg-no-repeat bg-cover flex flex-col items-center">
      <Image src={Logo} alt="Logo" className="w-[520px] mt-20" />
    </section>
);
}