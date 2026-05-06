import "./globals.css";

import Footer from "./components/Footer";
import Menu from "./components/Menu";
import MainContainer, { MainContent } from "./components/MainContainer";

export const metadata = {
  title: "Pamafa",
  description: "Teste Prático para a empresa Pamafa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Menu />
        <MainContainer>
          <MainContent>{children}</MainContent>
          <Footer />
        </MainContainer>
      </body>
    </html>
  );
}
