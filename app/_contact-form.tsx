import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";

export function ContactForm() {
  return (
    <div className="">
      <h4>Let&apos;s work together</h4>
      <div className="lg:flex items-center h-full">
        <form action="" className="space-y-4 w-full">
          <Input type="name" variant="underlined" label="Your name" />
          <Input type="email" variant="underlined" label="Your email" />

          <Textarea
            variant="underlined"
            label="Message"
            labelPlacement="outside"
            placeholder="Enter your message"
            className="col-span-12 md:col-span-6 mb-6 md:mb-0"
          />
        </form>
      </div>
    </div>
  );
}
