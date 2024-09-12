import { useState } from "react";
import { useForm } from "react-hook-form";
import { ContactFormData } from "@/types/contact";
import { Input, Textarea } from "@nextui-org/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { NeuButton } from "@/components/ui/neu-button";
import { handleContactFormSubmit } from "@/actions/contact";
import { contactFormZodSchema } from "@/zod-schemas/contact";

export function ContactForm() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },

    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormZodSchema),
  });

  async function onSubmit(data: ContactFormData) {
    try {
      setLoading(true);

      const res = await handleContactFormSubmit(data);

      if (res.success) reset();
    } catch (error) {
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="my-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
        <Input
          type="text"
          variant="underlined"
          label="Your name"
          {...register("name")}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <Input
          type="email"
          variant="underlined"
          label="Your email"
          {...register("email")}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <Textarea
          variant="underlined"
          labelPlacement="outside"
          placeholder="Enter your message"
          {...register("message")}
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
        <NeuButton
          text="Send"
          type="submit"
          className="w-full"
          disabled={isLoading}
        />
      </form>
    </div>
  );
}
