import "../styles/globals.css";
import "../styles/index.css"

import { Inter, Libre_Baskerville } from "next/font/google";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const libre_baskerville = Libre_Baskerville({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  variable: "--libre-baskerville",
  display: "swap",
});

export default async function RootLayout({ children } : { children: React.ReactNode }) {
  const client = createClient();
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  
  return (
    <html
      lang="en"
      className={`${inter.className} ${libre_baskerville.className}`}
    >
      <body className="overflow-x-hidden antialiased">
        <main>
         <Layout
            withHeaderDivider={false}
            navigation={navigation}
            settings={settings}
          >
          {children}
          </Layout>
          <PrismicPreview repositoryName={repositoryName} />
        </main>
      </body>
    </html>
  );
}
