import { useState } from "react";
import { Section, Container, Form, Logo, Inner, ButtonWrapper } from "./RegisterPage.styles";
import { Button, Input, InputError, Label } from "../../components";
import logo from "../../assets/images/Logo.svg";

const RegisterPage = () => {
  const initialValues = { login: "", password: "", repeatPassword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    let errors = {};

    if (!values.login) {
      errors.login = "Login is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    if (!values.repeatPassword) {
      errors.repeatPassword = "Password repeat is required!";
    }
    if (values.password != values.repeatPassword) {
      errors.repeatPassword = "Passwords are not the same!";
    }

    return errors;
  };

  return (
    <Section>
      <Container>
        <Logo src={logo} alt="Logo" />
        <Form onSubmit={handleSubmit}>
          <Inner>
            <Label for="login">Login:</Label>
            <Input id="login" name="login" value={formValues.login} onChange={handleChange} />
            {formErrors.login && <InputError>{formErrors.login}</InputError>}
          </Inner>
          <Inner>
            <Label for="password">Password:</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            {formErrors.password && <InputError>{formErrors.password}</InputError>}
          </Inner>
          <Inner>
            <Label for="repeatPassword">Repeat password:</Label>
            <Input
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              value={formValues.repeatPassword}
              onChange={handleChange}
            />
            {formErrors.repeatPassword && <InputError>{formErrors.repeatPassword}</InputError>}
          </Inner>
          <ButtonWrapper>
            <Button type="submit">Sign in</Button>
          </ButtonWrapper>
        </Form>
      </Container>
    </Section>
  );
};

export default RegisterPage;
