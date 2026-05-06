import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div`
  padding: 30px 20px;
`;

const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;

  color: #2a2a2a;
`;

export default function Exercicio04() {
  return (
    <>
      <Header title="Exercício 04" />
      <Container>
        <Title>Exercício 04</Title>
      </Container>
    </>
  );
}
