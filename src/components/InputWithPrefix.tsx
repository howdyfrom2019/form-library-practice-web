import { ComponentProps } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props extends ComponentProps<'input'>{
  prefix?: string;
  register?: UseFormRegisterReturn<string>;
  error?: string;
}

const InputWithPrefix = ({ prefix, register, error, ...props }: Props) => {
  return (
    <div className={'relative flex gap-8 items-center w-full'}>
      <span className={'font-sans font-bold tracking-tight'}>{prefix}</span>
      <input className={'flex-1 outline-none bg-white rounded-sm border-[1px] border-gray-200 focus:shadow-2xl focus:border-blue-500 px-2 py-1'} {...props} {...register} />
      <p className={'text-red-500 absolute top-1/2 right-0 -translate-y-1/2'}>{error}</p>
    </div>
  )
}

export default InputWithPrefix;
