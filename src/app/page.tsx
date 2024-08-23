// app/page.tsx

import Header from "@/component/custom/Header";
import Header2 from "@/component/custom/Header2";
import Image from "next/image"
import { AspectRatio } from "@/component/ui/aspect-ratio"
import './globals.css';
import BentoGridDemo from "@/component/custom/BentoGridDemo"
import { Title } from "../component/custom/Title";
import RootLayout from "@/app/layout";


export default function HomePage() {

  return (
    <>
    <RootLayout>
    <Header/>
    <Title></Title>
    <div>hi</div>
    </RootLayout>
    

    
        
    </>
  );
}
