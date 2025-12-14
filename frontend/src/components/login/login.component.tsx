import React, { useState } from 'react';
import Container from '../common/container/container.component';
import { Input } from '../common/input/input.component';
import Button from '../common/button/button.component';
import Layout from '../layout/layout.component';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth.context';

const Login = () => {

  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const loginSubmit = async () => {
    setServerMessage(null);

    const result = await login(email, password);

    if (result.token) {
      navigate('/products');
      return;
    }

    setServerMessage("Incorrect email or password");
  };

  return (
    <Layout>
      {/*Left info section*/}
      <section className="relative z-10 mt-16 flex max-w-[525px] flex-col gap-4 text-center md:gap-12 lg:text-left">
        <h1 className="text-preset-2 text-white md:text-preset-1">
          Learn to code by watching others
        </h1>
        <p className="text-preset-3 text-white">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think
          is invaluable.
        </p>
      </section>

      {/*Right info section*/}
      <section className="flex flex-col gap-6">
        <Container variant="info">
          <div className="flex items-center justify-center">
            <b>Try it free 7 days then $20/mo.</b> thereafter
          </div>
        </Container>

        <Container>
          <div className="flex flex-col gap-6 px-10 py-8">

            <Input placeholder="Email"
                   kind="string"
                   value={email}
                   onValueChange={(email) => {
                     setEmail(email!);
                   }} />

            <Input placeholder="Password"
                   kind="string"
                   value={password}
                   onValueChange={(password) => {
                     setPassword(password!);
                   }} />

            <div className="flex flex-col gap-4">
              <Button onClick={loginSubmit}>Login</Button>
              {serverMessage &&
                <p className="text-center text-preset-5-medium text-red-400">{serverMessage}</p>
              }
              <p className="text-center text-preset-5-medium text-gray-200">
                By clicking the button, you are agreeing to our{' '}
                <b className="text-red-400">Terms and Services</b>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Login;
