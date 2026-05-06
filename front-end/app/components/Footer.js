import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  flex-shrink: 0;

  width: 100%;
  box-sizing: border-box;

  background: #ffffff;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
`;

const Text = styled.p`
  color: #656565;
  text-align: center;
`;

export default function Footer() {
  return (
    <Container>
      <Text>© Pamafa Serviços em Teleinformática Ltda</Text>
    </Container>
  );
}
