"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { PiCertificateFill } from "react-icons/pi";
import { SlPuzzle } from "react-icons/sl";
import { MdOutlineAddLocationAlt } from "react-icons/md";

export function FAQ() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

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
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="location"
          aria-label="Location"
          indicator={<MdOutlineAddLocationAlt size={24} />}
          title="Location"
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </section>
  );
}
