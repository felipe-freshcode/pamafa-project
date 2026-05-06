import Image from "next/image";
import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  background: #203e88;
  color: #ffffff;
  box-sizing: border-box;

  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  padding: 14px 16px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`;

const Candidate = styled.div`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  text-align: right;
  white-space: nowrap;
`;

export default function MobileTopBar() {
  return (
    <Container>
      <Inner>
        <Left>
          <Image
            src="/LogoPamafa.svg"
            width={146}
            height={32}
            alt="Pamafa logo"
            priority
          />
        </Left>
        <Candidate>Felipe Nascimento</Candidate>
      </Inner>
    </Container>
  );
}
