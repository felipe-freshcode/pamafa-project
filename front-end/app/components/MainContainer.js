import styled from "styled-components";

const SIDEBAR_WIDTH = 280;

const Container = styled.div`
  margin-left: ${SIDEBAR_WIDTH}px;
  width: calc(100% - ${SIDEBAR_WIDTH}px);
  min-height: 100vh;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  background-color: #eaeaea;
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
