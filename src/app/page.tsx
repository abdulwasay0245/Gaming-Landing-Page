import Image from "next/image";


import Hero from "./component/Hero";
import ExperienceSection from "./component/Experience";
import CardSection from "./component/CardSection";
import JoinSection from "./component/JoinSection";
import SecondCardSection from "./component/SecondCardSection";
import PlanSection from "./component/PlanSection";



export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <CardSection />
      <JoinSection />
      <SecondCardSection />
      <PlanSection />
    </>
  );
}
