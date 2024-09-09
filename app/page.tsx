import { Hero } from "./_hero";
import { Skills } from "./_skills";
import { Contact } from "./_contact";
import { Projects } from "./_projects";

export default function Home() {
  return (
    <div className="space-y-40">
      <Hero />
      <Skills />
      <Contact />
      <Projects />
    </div>
  );
}
