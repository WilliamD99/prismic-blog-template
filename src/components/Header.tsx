import Link from "next/link";
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import { HorizontalDivider } from "./HorizontalDivider";

// Types
import { SettingsDocument, NavigationDocument } from "../../prismicio-types";
import SearchBtn from "./SearchBtn";

interface ProfileProps {
  name: prismic.TitleField;
  description: prismic.RichTextField;
  profilePicture: prismic.ImageField<never>;
}
const Profile = ({ name, description, profilePicture }: ProfileProps) => {
  return (
    <div className="" id="test">
      <div className="flex flex-row justify-between justify-items-center gap-8">
        {(prismic.isFilled.richText(name) ||
          prismic.isFilled.richText(description)) && (
          <div className="flex flex-col justify-center space-y-7 flex-1">
            {prismic.isFilled.richText(name) && (
              <Heading>
                <PrismicNextLink href="/">
                  <PrismicText field={name} />
                </PrismicNextLink>
              </Heading>
            )}
            {prismic.isFilled.richText(description) && (
              <>
                <p className="font-serif text-lg leading-normal tracking-tight text-gray-600">
                  <PrismicText field={description} />
                </p>
                <span className="line h-1 w-20 bg-black"></span>
              </>
            )}
          </div>
        )}
        <PrismicNextLink
          className="flex-1 flex justify-center"
          href="/"
          tabIndex={-1}
        >
          <div className="relative h-64 w-96 overflow-hidden rounded-md bg-slate-300">
            {prismic.isFilled.image(profilePicture) && (
              <PrismicNextImage
                field={profilePicture}
                fill={true}
                sizes="100vw"
                className="object-cover"
              />
            )}
          </div>
        </PrismicNextLink>
      </div>
    </div>
  );
};

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

export const Header = ({
  withDivider = true,
  withProfile = true,
  navigation,
  settings,
}: HeaderProps) => {
  return (
    <Bounded as="header" size="widest">
      <div id="test2" className="grid grid-cols-1 justify-items-center gap-20">
        <nav>
          <ul className="flex flex-wrap justify-center items-center gap-10">
            <NavItem>
              <Link href="/">
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
            {/* <SearchBtn /> */}
          </ul>
        </nav>
        {withProfile && (
          <Profile
            name={settings.data.name}
            description={settings.data.description}
            profilePicture={settings.data.profilePicture}
          />
        )}
        {/* {withDivider && <HorizontalDivider />} */}
      </div>
    </Bounded>
  );
};
