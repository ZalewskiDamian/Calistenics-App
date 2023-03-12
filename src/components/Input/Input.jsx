import React from "react";
// import { StyledInput } from "./Input.styles";
import styled from "styled-components";

export const StyledInput = styled.input(
  ({ theme }) => `
  font-size: ${theme.font.font_16};
  font-weight: ${theme.weight.semiBold};
  color: ${theme.colors.white};
  line-height: 2.2rem;
  width: 100%;
  padding: 1.8rem 2.5rem;
  outline: 0;
  border: .1rem solid ${theme.colors.inputBorder};
  border-radius: 1.2rem;
  background-color: transparent;
  transition: all .2s ease-in-out;

  &:placeholder {
    font-size: ${theme.font.font_16};
    color: ${theme.colors.gray};
    font-weight: ${theme.weight.semiBold};
    line-height: 2.2rem;
  }
  &:focus {
    border: .1rem solid ${theme.colors.orange};
  }
  `
);

const Input = ({ type, id, name, onChange }) => {
  return <StyledInput type={type ? type : "text"} id={id} name={name} onChange={onChange} />;
};

export default Input;
