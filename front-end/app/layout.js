import "./globals.css";

import Footer from "./components/Footer";
import Menu from "./components/Menu";
import MainContainer, { MainContent } from "./components/MainContainer";
import MobileTopBar from "./components/MobileTopBar";
import MobileTabs from "./components/MobileTabs";

export const metadata = {
  title: "Pamafa",
  description: "Teste Prático para a empresa Pamafa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Menu />
        <MobileTopBar />
        <MobileTabs />
        <MainContainer>
          <MainContent>{children}</MainContent>
          <Footer />
        </MainContainer>
      </body>
    </html>
  );
}
