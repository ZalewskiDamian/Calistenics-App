import { Container, Heading, Logo, Section, Text } from "./WelcomePage.styles";
import logo from "../../assets/images/Logo.svg";
import { Button } from "../../components";

const WelcomePage = () => {
  return (
    <Section>
      <Container>
        <Heading>Welcome To</Heading>
        <Logo src={logo} alt="logo" />
        <Button>log in</Button>
        <Text>or</Text>
        <Text link>Create a new account</Text>
      </Container>
    </Section>
  );
};

export default WelcomePage;
