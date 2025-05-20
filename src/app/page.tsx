import Hero from "./component/Hero";
import ExperienceSection from "./component/Experience";
import CardSection from "./component/CardSection";
import JoinSection from "./component/JoinSection";
import SecondCardSection from "./component/SecondCardSection";
import PlanSection from "./component/PlanSection";
import TestimonialsSection from "./component/Testimonial";



export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <CardSection />
      <JoinSection />
      <SecondCardSection />
      <PlanSection />
      <TestimonialsSection />
    </>
  );
}
