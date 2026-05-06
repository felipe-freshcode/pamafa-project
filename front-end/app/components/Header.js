import styled from "styled-components";

const Container = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;

  height: 120px;

  background: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  @media (max-width: 767px) {
    display: none;
  }
`;

const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;

  color: #2a2a2a;
`;

const Label = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;

  color: #656565;
`;

export default function Header({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Label>Felipe Nascimento</Label>
    </Container>
  );
}
