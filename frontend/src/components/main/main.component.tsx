import React, { useState } from 'react';
import Alert from '../common/alert/alert.component';
import { Input } from '../common/input/input.component';

const Main = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      Main Component
      <Alert>
        <b>Try it free 7 days then $20/mo.</b> thereafter
      </Alert>

      <div className="w-[350px]">
        <Input
          placeholder="First name"
          onValueChange={(v) => setInputValue(v!)}
          value={inputValue}
          error="Last name is mandatory"
        />
      </div>
    </div>
  );
};

export default Main;
