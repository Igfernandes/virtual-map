"use client";
import Image from "next/image";
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

export function TitleProfile() {
  return (
    <div className="border-b-2 border-gray-100 pb-2 flex items-center justify-between">
      <div>
        <h3 className="text-xl font-semibold font-sans">{"Super Mercado"}</h3>
      </div>
      <div className="flex items-center">
        <span className="text-xs mr-2">
          <i>Siga em: </i>
        </span>
        <FacebookShareButton className="mr-1" url={"http://localhost.com"}>
          <FacebookIcon size={20} round={true} />
        </FacebookShareButton>
        <TelegramShareButton className="mr-1" url={"http://localhost.com"}>
          <TelegramIcon size={20} round={true} />
        </TelegramShareButton>
        <TwitterShareButton className="mr-1" url={"http://localhost.com"}>
          <TwitterIcon size={20} round={true} />
        </TwitterShareButton>
        <WhatsappShareButton className="mr-1" url={"http://localhost.com"}>
          <WhatsappIcon size={20} round={true} />
        </WhatsappShareButton>
        <a href="">
          <Image
            src={"/images/instagram-icon.png"}
            alt="instagram icon"
            width={20}
            height={20}
          />
        </a>
      </div>
    </div>
  );
}
