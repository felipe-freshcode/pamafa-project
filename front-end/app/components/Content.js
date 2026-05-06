import styled from "styled-components";

export default function Content({ children }) {
  const Content = styled.div`
    background-color: #eaeaea;
    width: 100%;
    height: 100%;

    /* Inside auto layout */
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 1;
  `;
  return <Content>{children}</Content>;
}
