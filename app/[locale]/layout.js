import "../globals.css";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Provider from "@/components/Provider";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Flats for rent | شقق للايجار",
  description: "Furnished flat for daily and yearly rent",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.log(error);
    notFound();
  }

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="bg-[#fafbfa] scroll-smooth">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Provider locale={locale}>
            {children}
            <Contact />
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
