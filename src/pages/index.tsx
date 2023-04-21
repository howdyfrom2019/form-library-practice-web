import InputWithPrefix from '@/components/InputWithPrefix';
import TextAreaWithPrefix from '@/components/TextAreaWithPrefix';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';

const schema = yup.object({
  name: yup.string().required('이름은 필수입력입니다.').min(2, '최소 2글자 이상 입력해주세요'),
  age: yup.number().required('나이는 필수입력입니다.').min(19, '19세 이상만 가입할 수 있습니다.'),
});

export default function Home() {
  const { register, watch, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => console.log(value, name, type));
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-16">
      <h2 className={'text-4xl font-bold text-center'}>React-Hook-Form + yup은 어떻게 쓰는가?</h2>
      <form
        className={'flex flex-col gap-6 bg-white shadow-2xl rounded-md px-4 py-6 w-[380px]'}
        onSubmit={handleSubmit((data) => console.log(JSON.stringify(data)))}>
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
          error={errors.age?.message}
          defaultValue={19}
          type={'number'}
          register={register('age', { min: 19, max: 120 })}
        />
        <TextAreaWithPrefix id={'irl'} prefix={'자기소개'} />
        <input type={'submit'} value={'제출하기'} className={'rounded-md bg-lime-500 text-white font-bold text-2xl px-6 py-2'} />
      </form>
    </main>
  )
}
