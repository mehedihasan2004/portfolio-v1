"use client";

import { Div } from "@/lib/motion";
import { ContactForm } from "./_contact-form";
import { slideIn } from "@/lib/motion-animations";
import { EarthCanvas } from "@/components/canvas/earth-canvas";

export function Contact() {
  return (
    <section id="contact">
      <h4 className="tracking-wider py-2">Let&apos;s work together</h4>

      <div className="max-lg:flex flex-col-reverse lg:grid grid-cols-2 gap-x-4">
        <ContactForm />
        <Div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 lg:h-full md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </Div>
      </div>
    </section>
  );
}
