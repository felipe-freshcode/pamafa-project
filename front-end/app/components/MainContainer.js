import styled from "styled-components";

const SIDEBAR_WIDTH = 280;

const Container = styled.div`
  margin-left: ${SIDEBAR_WIDTH}px;
  width: calc(100% - ${SIDEBAR_WIDTH}px);
  box-sizing: border-box;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: #eaeaea;

  @media (max-width: 767px) {
    margin-left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;

export default function MainContainer({ children }) {
  return <Container>{children}</Container>;
}
