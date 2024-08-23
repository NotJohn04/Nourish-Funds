// app/page.tsx

import Header from "@/component/custom/Header";
import Header2 from "@/component/custom/Header2";
import Image from "next/image"
import { AspectRatio } from "@/component/ui/aspect-ratio"
import VoucherCards from "@/component/custom/VoucherCards"
import RootLayout from "@/app/layout";



export default function Funding() {

  return (
    <>
    <RootLayout>
    <Header/>

        <Image
            src="/Chain-Funds (2).svg"
            alt="Photo by Drew Beamer"
            width={100}
            height={100}
            className="static h-full w-full left-0 right-0 text-transparent"
          />

    {/* <Header2/> */}
      <div className="flex justify-center items-center mx-auto max-w-screen-lg p-4"> 
        <VoucherCards/>
      </div>
      <div className="flex justify-center items-center mx-auto max-w-screen-lg p-4"> 
        <VoucherCards/>
      </div>
      </RootLayout>
    </>
  );
}
