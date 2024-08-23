// app/page.tsx

import Header from "@/component/custom/Header";
import Header2 from "@/component/custom/Header2";
import Image from "next/image"
import { AspectRatio } from "@/component/ui/aspect-ratio"
import '../globals.css';
import FundingCards from "@/component/custom/FundingCards"

export default function page() {

  return (
    <>
    <Header/>

        <Image
            src="NourishFunds_Funds.svg"
            alt="Photo by Drew Beamer"
            width={100}
            height={100}
            className="static h-full w-full left-0 right-0 text-transparent"
          />

      <div className="flex justify-center items-center mx-auto max-w-screen-lg p-4"> 
        <FundingCards/>
      </div>

    </>
  );
}
