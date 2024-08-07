import Link from "next/link";
import { PrismicText } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import { HorizontalDivider } from "./HorizontalDivider";
import { PrismicRichText } from "./PrismicRichText";

// Types
import { SettingsDocument } from "../../prismicio-types";

function SignUpForm({ settings }: { settings: SettingsDocument }) {
  return (
    <div className="px-4">
      <form
        action="/api/sign-up"
        method="post"
        className="grid w-full max-w-xl grid-cols-1 gap-6"
      >
        {prismic.isFilled.richText(settings.data.newsletterDisclaimer) && (
          <div className="text-center font-serif tracking-tight text-slate-500">
            <PrismicRichText
              field={settings.data.newsletterDescription}
              components={{
                heading1: ({ children }: { children: React.ReactNode }) => (
                  <Heading as="h2" className="mb-4 last:mb-0">
                    {children}
                  </Heading>
                ),
                paragraph: ({ children }: { children: React.ReactNode }) => (
                  <p className="mb-4 italic last:mb-0">{children}</p>
                ),
              }}
            />
          </div>
        )}
        <div className="grid grid-cols-1 gap-2">
          <div className="relative">
            <label>
              <span className="sr-only">Email address</span>
              <input
                name="email"
                type="email"
                placeholder="jane.doe@example.com"
                required={true}
                className="w-full rounded-none border-b border-slate-200 py-3 pl-3 pr-10 text-slate-800 placeholder-slate-400"
              />
            </label>
            <button
              type="submit"
              className="absolute bottom-0 right-0 top-0 flex items-center justify-center px-3 text-2xl text-slate-400"
            >
              <span className="sr-only">Submit</span>
              <span aria-hidden={true}>&rarr;</span>
            </button>
          </div>
          {prismic.isFilled.richText(settings.data.newsletterDisclaimer) && (
            <p className="text-center text-xs tracking-tight text-slate-500">
              <PrismicText field={settings.data.newsletterDisclaimer} />
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

interface FooterProps {
  withSignUpForm?: boolean;
  settings: SettingsDocument;
}

export function Footer({ withSignUpForm = true, settings }: FooterProps) {
  return (
    <Bounded as="footer" size="widest" className="bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-5">
          <div className="flex flex-col space-y-3">
            <p className="text-white text-lg">Links</p>
            <div className="flex flex-col space-y-2">
              <p className="text-white text-sm">My Books</p>
              <p className="text-white text-sm">Newsletter</p>
              <p className="text-white text-sm">About</p>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="text-white text-lg">More</p>
            <div className="flex flex-col space-y-2">
              <p className="text-white text-sm">Content 1</p>
              <p className="text-white text-sm">Content 2</p>
              <p className="text-white text-sm">Content 3</p>
            </div>
          </div>

          <div className="flex flex-col justify-end space-y-3 col-span-2">
            <div className="flex flex-col justify-end space-y-2">
              <p className="text-white text-sm">
                &#169; Will Doan 2024. All Rights Reserved.
              </p>
              <div className="flex flex-row space-x-4">
                <p className="text-white text-sm">Privacy Policy</p>
                <p className="text-white text-sm">Cookie Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
}
