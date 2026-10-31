import { Concerns } from "@/components/home/concerns";
import { Experience } from "@/components/home/experience";
import { Hero } from "@/components/home/hero";
import { Membership } from "@/components/home/membership";
import { Services } from "@/components/home/services";
import { Visit } from "@/components/home/visit";

export default function Home() {
  return (
    <>
      <Hero />
      <Concerns />
      <Services />
      <Experience />
      <Membership />
      <Visit />
    </>
  );
}
