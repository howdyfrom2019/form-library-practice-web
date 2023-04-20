import { ComponentProps } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props extends ComponentProps<'textarea'>{
  prefix?: string;
  register?: UseFormRegisterReturn<string>
}

const TextAreaWithPrefix = ({ prefix, register, ...props }: Props) => {
  return (
    <div className={'flex flex-col gap-8 w-full'}>
      <span className={'font-sans font-bold tracking-tight'}>{prefix}</span>
      <textarea className={'h-20 outline-none bg-white rounded-sm border-[1px] border-gray-200 focus:shadow-2xl focus:border-blue-500 px-2 py-1'} {...props} {...register} />
    </div>
  )
}

export default TextAreaWithPrefix;
