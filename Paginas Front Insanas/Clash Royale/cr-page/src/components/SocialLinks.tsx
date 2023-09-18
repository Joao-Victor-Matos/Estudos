import Image from "next/image"
import Reddit from "@/assets/red.webp";
import Facebook from "@/assets/fb.webp";
import Youtube from "@/assets/yt.webp";
import Instagram from "@/assets/ig.webp";
import Twitter from "@/assets/x.webp";

export function SocialLinks (){
  return(
    <div className="flex items-center flex-row gap-5">
      <a href="https://reddit.com">
      <Image className="w-7 h-7"
              src={Reddit}
              alt="Reddit"
              />
      </a>
      <a href="https://facebook.com/ClashRoyale">
      <Image className="w-7 h-7"
              src={Facebook}
              alt="Facebook"
              />
      </a>
      <a href="https:youtube.com/clashroyale">
      <Image className="w-8 h-7" 
              src={Youtube}
              alt="Youtube"
              />
      </a>
      <a href="https://instagram.com/ClashRoyale">
      <Image className="w-7 h-7"
              src={Instagram}
              alt="Instagram"
              />
      </a>
      <a href="https://twitter.com/ClashRoyale">
      <Image className="w-7 h-7"
              src={Twitter}
              alt="Twitter"
              />
      </a>
    </div>
  )
}