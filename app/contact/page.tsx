// app/contact/page.tsx
import ContactForm from "@/components/ContactForm";
import { Toaster } from "react-hot-toast";

export default function ContactPage() {
  return (
    <main className="min-h-screen px-4 py-20 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Let&apos;s Connect</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-10 text-center max-w-md">
        Have a project or just want to say hello? Fill out the form and I&apos;ll get back to you.
      </p>
      <ContactForm />
      <Toaster position="top-center" />
    </main>
  );
}
