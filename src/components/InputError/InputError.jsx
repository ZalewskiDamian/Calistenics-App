import styled from "styled-components";

const StyledError = styled.p(
  ({ theme }) => `
    font-size: ${theme.font.font_14};
    font-weight: ${theme.weight.regular};
    color: ${theme.colors.red};
    margin-top: .8rem;
    text-align: left;
    `
);

const InputError = ({ children }) => {
  return <StyledError>{children}</StyledError>;
};

export default InputError;
