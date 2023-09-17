import Image from "next/image";
import Logo from "@/assets/supercell logo.webp";
import { ItemMenu } from "./ItemMenu";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="flex items-center w-screen h-20 bg-black fixed">
      <Container>
        <div>
          <div className="flex items-center gap-12">
            <Image className="max-w-[80px]" src={Logo} alt="logo" />
            <ul className="flex items-center gap-12">
              <li>
                <ItemMenu name="Home" />
              </li>
              <li>
                <ItemMenu name="About Us" />
              </li>
              <li>
                <ItemMenu name="Support" />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
}