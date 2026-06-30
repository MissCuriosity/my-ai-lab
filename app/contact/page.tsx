import { createMetadata } from "@/lib/metadata";
import { ContactPage } from "@/components/contact/contact-page";

export const metadata = createMetadata({
  title: "Contact",
  description: "Get in touch to discuss projects, collaborations, or just say hello.",
  path: "/contact/",
});

export default function Page() {
  return <ContactPage />;
}
