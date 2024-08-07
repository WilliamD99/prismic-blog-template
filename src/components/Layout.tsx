import { Header } from "./Header";
import { Footer } from "./Footer";

// Types
import { SettingsDocument, NavigationDocument } from "../../prismicio-types";

interface LayoutProps {
  navigation: NavigationDocument;
  settings: SettingsDocument;
  withHeaderDivider?: boolean;
  withProfile?: boolean;
  withSignUpForm?: boolean;
  children: React.ReactNode;
}

export function Layout({
  navigation,
  settings,
  withHeaderDivider,
  withProfile,
  withSignUpForm,
  children,
}: LayoutProps) {
  return (
    <div className="text-slate-700 h-full flex flex-col">
      <Header
        withProfile={withProfile}
        withDivider={withHeaderDivider}
        navigation={navigation}
        settings={settings}
      />
      <main className="flex-1">{children}</main>
      <Footer withSignUpForm={withSignUpForm} settings={settings} />
    </div>
  );
}
