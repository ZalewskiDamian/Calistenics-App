import styled from "styled-components";

const StyledButton = styled.button(
  ({ theme }) => `
    font-size: ${theme.font.font_16};
    line-height: 2rem;
    font-weight: ${theme.weight.bold};
    color: ${theme.colors.white};
    background-color: ${theme.colors.orange};
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    padding: 1.8rem 2.5rem;
    border-radius: 1.2rem;
    outline: 0;
    border: 0;
    box-shadow: 0 .4rem .4rem 0 rgba(180, 182, 76, .25);

    :hover {
        cursor: pointer;
    }
    `
);

const Button = ({ type, children }) => {
  return <StyledButton type={type ? type : "button"}>{children}</StyledButton>;
};

export default Button;
