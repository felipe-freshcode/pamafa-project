import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  /* Auto layout */

  width: 280px;
  height: 100%;

  background: #203e88;

  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
`;

const PaddingImg = styled.div`
  padding: 40px 20px 30px 20px;
`;

const PaddingLinks = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 30px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
`;

const Text = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  color: #c9c9c9;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  padding-bottom: 20px;
`;

const routes = [
  { label: "Exercício 01", link: "/" },
  { label: "Exercício 02", link: "/exercicio02" },
  { label: "Exercício 03", link: "/exercicio03" },
  { label: "Exercício 04", link: "/exercicio04" },
  { label: "Exercício 05", link: "/exercicio05" },
  { label: "Exercício 06", link: "/exercicio06" },
];

export default function Menu() {
  return (
    <Container>
      <PaddingImg>
        <Link href="/">
          <Image
            src="/LogoPamafa.svg"
            width={220}
            height={48}
            alt="Pamafa logo"
            priority
          />
        </Link>
      </PaddingImg>
      <PaddingLinks>
        {routes.map((route) => (
          <Text key={route.link}>
            <Link href={route.link}>{route.label}</Link>
          </Text>
        ))}
      </PaddingLinks>
    </Container>
  );
}
