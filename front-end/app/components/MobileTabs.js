"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { routes } from "../constants/routes";

const Container = styled.nav`
  width: 100%;
  background-color: #eaeaea;
  box-sizing: border-box;

  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`;

const Row = styled.div`
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

const Tab = styled(Link)`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  color: #656565;
  text-decoration: none;
  padding: 15px 20px 10px 20px;
  border-bottom: 1px solid transparent;
  white-space: nowrap;

  &[data-active="true"] {
    color: #203e88;
    border-bottom-color: #203e88;
  }
`;

function normalizePathname(pathname) {
  if (pathname === "/") return "/";
  return pathname.replace(/\/+$/, "");
}

export default function MobileTabs() {
  const pathname = normalizePathname(usePathname());

  return (
    <Container>
      <Row>
        {routes.map((route) => {
          const isActive = pathname === normalizePathname(route.link);
          return (
            <Tab
              key={route.link}
              href={route.link}
              data-active={isActive ? "true" : "false"}
            >
              {route.label}
            </Tab>
          );
        })}
      </Row>
    </Container>
  );
}
