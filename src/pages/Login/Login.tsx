// Styles
import { Container, Content, Title } from './styles';

// Components
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

const Login = () => {
  return (
    <Container>
      <Content>
        <Title>Login</Title>
        <form>
          <Input 
            labelName="Email" 
            name="email" 
            placeholder="Digite seu e-mail"
          />
          <Input 
            labelName="Senha" 
            name="password" 
            type="password"
            placeholder="Digite sua senha" 
          />
          <Button title="Login" />
        </form>
      </Content>
    </Container>
  );
};

export default Login;