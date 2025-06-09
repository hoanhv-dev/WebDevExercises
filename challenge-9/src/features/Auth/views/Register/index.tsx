import { useState } from 'react';

import { RoutePath } from '@shared/constants/RouteConst';
import { useRegisterMutation } from '@features/Auth/services';

const Register = () => {
  const [doRegister] = useRegisterMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const onFinish = () => {
    doRegister({ email, password });
  };

  return (
    <>
      <div className='w-screen flex h-screen justify-center items-center'>
        <form
          name='loginForm'
          autoComplete='off'
          className='flex w-full min-w-fit max-w-md flex-col border border-solid rounded border-blue-400 p-6 gap-6'
        >
          <h1 className='text-center font-semibold text-xl'>Welcome to Register</h1>
          <div>
            <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Your email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={onChangeEmail}
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
              required
            />
          </div>
          <div>
            <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Your password
            </label>
            <input
              type='password'
              value={password}
              onChange={onChangePassword}
              id='password'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
              required
            />
          </div>

          <button
            type='button'
            onClick={onFinish}
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Submit
          </button>
          <div className='flex justify-center'>
            <label className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              Already have account? Login&nbsp;
              <a className='text-blue-600 hover:underline dark:text-blue-500' href={RoutePath.Login}>
                here
              </a>
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
