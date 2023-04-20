import InputWithPrefix from '@/components/InputWithPrefix';
import TextAreaWithPrefix from '@/components/TextAreaWithPrefix';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  name: yup.string().required('이름은 필수인데요..?').min(2, '이름이 한글자는 좀...'),
});

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  console.log(errors);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-16">
      <h2 className={'text-4xl font-bold text-center'}>React-Hook-Form + yup은 어떻게 쓰는가?</h2>
      <form className={'flex flex-col gap-6 bg-white shadow-2xl rounded-md px-4 py-6 w-[380px]'}>
        <InputWithPrefix
          id={'name'}
          prefix={'이름'}
          error={errors.name?.message}
          register={register('name', { required: true, min: 2, max: 10 })}
        />
        <InputWithPrefix
          id={'nickname'}
          prefix={'닉네임'}
          register={register('nickname')}
        />
        <InputWithPrefix
          id={'position'}
          prefix={'직무'}
          register={register('position')}
        />
        <InputWithPrefix
          id={'age'}
          prefix={'나이'}
          register={register('age', { min: 19, max: 120 })} />
        <TextAreaWithPrefix id={'irl'} prefix={'자기소개'} />
        <button className={'rounded-md bg-lime-500 text-white font-bold text-2xl px-6 py-2'}>제출하기</button>
      </form>
    </main>
  )
}
