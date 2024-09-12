"use client";

import { SlPuzzle } from "react-icons/sl";
import { PiCertificateFill } from "react-icons/pi";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { Accordion, AccordionItem } from "@nextui-org/react";

export function FAQ() {
  return (
    <section id="faq">
      <Accordion>
        <AccordionItem
          key="education"
          aria-label="Education"
          indicator={<PiCertificateFill size={24} />}
          title="Education"
        >
          <p className="tracking-wider">Diploma in mechanical engineering.</p>
        </AccordionItem>
        <AccordionItem
          key="experience"
          aria-label="Experience"
          indicator={<SlPuzzle size={24} />}
          title="Experience"
        >
          <p className="tracking-wider">Around 2 years in web.</p>
        </AccordionItem>
        <AccordionItem
          key="location"
          aria-label="Location"
          indicator={<MdOutlineAddLocationAlt size={24} />}
          title="Location"
        >
          <p className="tracking-wider">Mirpur-01, Dhaka-1216, Bangladesh.</p>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
