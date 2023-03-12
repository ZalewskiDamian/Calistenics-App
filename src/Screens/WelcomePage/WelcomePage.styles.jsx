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
export const Heading = styled.h1(
  ({ theme }) => `
    font-size: ${theme.font.font_46};
    font-weight: ${theme.weight.bold};    
    line-height: 5.4rem;
    text-align: center;
    color: ${theme.colors.white};
    margin-bottom: 3.5rem;
    `
);
export const Logo = styled.img`
  margin: 0 auto 5rem;
  max-width: 24rem;
`;
export const Text = styled.p(
  ({ theme, link }) => `
    font-size: ${theme.font.font_16};
    font-weight: ${theme.weight.semiBold};
    color: ${link ? theme.colors.red : theme.colors.gray};
    margin-top: 1.5rem;
    text-align: center;
    text-decoration: ${link ? "underline" : ""};
    `
);
