import GithubLogo from '@/assets/svg/GithubLogo';
import TwitterLogo from '@/assets/svg/TwitterLogo';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type InputMethod = 'email' | 'phone';

type UserForm = {
  email?: string;
  phone?: string;
};

export default function Enter() {
  const [method, setMethod] = useState<InputMethod>('email');
  const { register, handleSubmit, reset } = useForm<UserForm>();

  const changeMethod = (m: InputMethod) => (setMethod(m), reset());
  const isCurrentMethod = (m: InputMethod) => method === m;

  const onSubmit = handleSubmit((data: UserForm) => {
    console.log(data);
  });

  return (
    <div className="py-8">
      <h3 className="text-gray-900 font-bold text-3xl text-center py-2">
        Enter to Carrot
      </h3>
      <div className="px-4">
        <div className="py-3 relative">
          <h5 className="text-center text-gray-700 text-sm">Enter using:</h5>
          <div className="grid grid-cols-2 border-b text-gray-600">
            <button
              className={`p-2 mx-5 border-b-4 transition ${
                isCurrentMethod('email')
                  ? 'text-orange-400 border-orange-400'
                  : 'border-transparent'
              }`}
              onClick={() => changeMethod('email')}
            >
              Email
            </button>
            <button
              className={`p-2 mx-5 border-b-4 transition ${
                isCurrentMethod('phone')
                  ? 'text-orange-400 border-orange-400'
                  : 'border-transparent'
              }`}
              onClick={() => changeMethod('phone')}
            >
              Phone
            </button>
          </div>
        </div>
        <form className="px-4 py-2" onSubmit={onSubmit}>
          <label htmlFor={method}>
            <span className="text-sm text-gray-600 ml-1">
              {isCurrentMethod('email') ? 'Email address' : 'Phone number'}
            </span>
            <div className="flex">
              <span className="empty:hidden border-2 border-r-0 rounded-l-lg p-2 text-sm px-3 flex justify-center items-center">
                {isCurrentMethod('phone') && '+82'}
              </span>
              <input
                {...(isCurrentMethod('email')
                  ? register('email', {
                      required: 'Email is required',
                    })
                  : register('phone', {
                      required: 'Phone number is required',
                    }))}
                id={method}
                type="text"
                autoCapitalize="off"
                autoComplete="off"
                autoCorrect="off"
                className={`input-default ${
                  isCurrentMethod('phone') && 'rounded-l-none'
                }`}
              />
            </div>
          </label>
          <button className="btn-primary mt-6">
            {isCurrentMethod('email')
              ? 'Get Login Link'
              : 'Get One-Time Password'}
          </button>
        </form>
        <div className="mt-6 mx-4">
          <div className="relative">
            <div className="absolute border-b bg-gray-500 w-full" />
            <div className="relative -top-3 text-center">
              <span className="bg-white px-2 text-gray-500">OR</span>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-2 gap-3">
            <button className="btn-default hover:text-[#1DA1F2] hover:border-[#1DA1F2]">
              <TwitterLogo className="w-5 h-5" />
            </button>
            <button className="btn-default hover:text-[#333] hover:border-[#333]">
              <GithubLogo className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
