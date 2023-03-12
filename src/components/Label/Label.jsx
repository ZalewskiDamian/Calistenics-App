import styled from "styled-components";

const StyledLabel = styled.label(
  ({ theme }) => `
    font-size: ${theme.font.font_16};
    font-weight: ${theme.weight.semiBold};
    color: ${theme.colors.white};
    line-height: 2rem;
    text-align: left;
    margin-bottom: .8rem;
    display: block;
    padding-left: .5rem;    
    `
);

const Label = ({ children }) => <StyledLabel>{children}</StyledLabel>;

export default Label;
