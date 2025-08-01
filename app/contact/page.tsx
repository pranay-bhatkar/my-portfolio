"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import * as z from "zod";
import toast from "react-hot-toast";

const schema = z.object({
  name: z.string().min(2, "Name too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message too short"),
});

type ContactForm = z.infer<typeof schema>;

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      toast.success("Message sent!");
      reset();
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 h-[100vh] bg-white dark:bg-slate-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-2xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 border-2 p-5 rounded-lg dark:border-white"
        >
          <div>
            <label className="block mb-1">Name</label>
            <input
              {...register("name")}
              className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded bg-white dark:bg-slate-800"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              {...register("email")}
              type="email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded bg-white dark:bg-slate-800"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1">Message</label>
            <textarea
              {...register("message")}
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded bg-white dark:bg-slate-800"
              placeholder="Your message"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            className="bg-secondary text-black font-semibold px-6 py-2 rounded hover:opacity-90 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </div>
    </section>
  );
}
