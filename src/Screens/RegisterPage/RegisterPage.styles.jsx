import styled from "styled-components";
import rectangle from "../../assets/images/rectangle_bg.svg";

export const Section = styled.section`
  position: relative;
  z-index: 0;
  background-color: ${({ theme }) => theme.colors.black};
  min-height: 100vh;
  width: 100%;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -5rem;
    left: -10rem;
    width: 20rem;
    height: 20rem;
    z-index: -1;
    background: url(${rectangle}) no-repeat center;
    background-size: contain;
    rotate: 45deg;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 5rem;
    right: -15rem;
    width: 20rem;
    height: 20rem;
    z-index: -1;
    background: url(${rectangle}) no-repeat center;
    background-size: contain;
    rotate: 75deg;
  }
`;
export const Container = styled.div`
  width: min(100% - 3rem, 97rem);
  margin-inline: auto;
  padding-top: 10rem;
`;
export const Form = styled.form``;
export const Logo = styled.img`
  margin: 0 auto 5rem;
  max-width: 24rem;
`;
export const Inner = styled.div`
  margin-bottom: 1.5rem;
`;
export const ButtonWrapper = styled.div`
  margin: 8rem 0 5rem;
`;
