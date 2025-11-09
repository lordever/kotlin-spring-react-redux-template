import React, { ChangeEvent, useId } from 'react';
import clsx from 'clsx';

type CommonProps = {
  placeholder: string;
  error?: string;
};

type StringInputProps = CommonProps & {
  kind?: 'string';
  value?: string;
  onValueChange: (value: string | undefined) => void;
};

type NumberInputProps = CommonProps & {
  kind: 'number';
  value?: number;
  onValueChange: (value: number | undefined) => void;
  allowNegative?: boolean;
};

export type InputProps = StringInputProps | NumberInputProps;

export function Input(props: InputProps) {
  const id = useId();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;

    if (props.kind === 'number') {
      const trimmed = raw.trim();

      if (trimmed === '') {
        props.onValueChange(undefined);
        return;
      }

      const n = Number(trimmed.replace(',', '.'));

      if (!Number.isFinite(n)) {
        return;
      }
      if (!props.allowNegative && n < 0) return;

      props.onValueChange(n);
    } else {
      const next = raw === '' ? undefined : raw;
      props.onValueChange(next);
    }
  };

  const errorLabelClassName = clsx('text-preset-5-italic italic text-red-400');
  const inputClassName = clsx(
    'w-full min-w-[279px] rounded-md border p-4 pl-8 text-left text-preset-4 text-gray-900' +
      ' border-gray-200',
    'outline-none focus:border-green-400 focus:border-purple-700 focus-visible:border-green-400',
    !!props.error && 'border-2 border-orange-400',
  );

  const stringValue =
    props.kind === 'number'
      ? props.value === undefined
        ? ''
        : String(props.value)
      : (props.value ?? '');

  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <input
          id={id}
          className={inputClassName}
          type="text"
          inputMode={props.kind === 'number' ? 'decimal' : 'text'}
          placeholder={props.placeholder}
          value={stringValue}
          onChange={handleInputChange}
          aria-invalid={!!props.error}
        />

        {props.error && (
          <img
            src="/images/icon-error.svg"
            className="absolute right-8 top-[19px] h-6 w-6"
            alt="error"
          />
        )}
      </div>

      {props.error && (
        <div className="flex flex-row justify-between self-end">
          <label className={errorLabelClassName} htmlFor={id}>
            {props.error}
          </label>
        </div>
      )}
    </div>
  );
}
