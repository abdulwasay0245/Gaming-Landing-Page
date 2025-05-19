import Image from "next/image";


import Hero from "./component/Hero";
import ExperienceSection from "./component/Experience";
import CardSection from "./component/CardSection";



export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <CardSection />
    </>
  );
}
