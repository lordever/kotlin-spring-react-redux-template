import React from 'react';
import './login.component.css';
import Container from '../common/container/container.component';
import { Input } from '../common/input/input.component';
import Button from '../common/button/button.component';

const Login = () => {
  return (
    <main className="login-bg">
      <div className="login-bg flex min-h-screen flex-col items-center justify-center gap-16 px-6 md:px-20 lg:flex-row">
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
              <Input placeholder="First Name" onValueChange={() => {}} />
              <Input placeholder="Last Name" onValueChange={() => {}} />
              <Input placeholder="Email Address" onValueChange={() => {}} />
              <Input placeholder="Password" onValueChange={() => {}} />

              <div className="flex flex-col gap-4">
                <Button onClick={() => {}}>CLAIM YOUR FREE TRIAL</Button>
                <p className="text-center text-preset-5-medium text-gray-200">
                  By clicking the button, you are agreeing to our{' '}
                  <b className="text-red-400">Terms and Services</b>
                </p>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </main>
  );
};

export default Login;
