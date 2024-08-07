import Link from "next/link";
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

import { Bounded } from "./Bounded";

// Types
import { SettingsDocument, NavigationDocument } from "../../prismicio-types";

const NavItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="font-semibold tracking-tight text-slate-800">{children}</li>
  );
};

interface HeaderProps {
  withDivider?: boolean;
  withProfile?: boolean;
  navigation: NavigationDocument;
  settings: SettingsDocument;
}

export const Header = ({ navigation }: HeaderProps) => {
  return (
    <Bounded as="header" size="widest">
      <div className="grid grid-cols-1 justify-items-center gap-20">
        <nav>
          <ul className="flex flex-wrap justify-center items-center gap-10">
            <NavItem>
              <Link href="/" className="font-bold text-3xl">
                <PrismicText field={navigation.data.homepageLabel} />
              </Link>
            </NavItem>
            {navigation.data?.links.map((item) => (
              <NavItem key={prismic.asText(item.label)}>
                <PrismicNextLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              </NavItem>
            ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
};
