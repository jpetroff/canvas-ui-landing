/* eslint-disable no-unused-vars */
import * as RadixToast from '@radix-ui/react-toast'
import { useState } from 'react'

const setCookie = (name: string, value: string, days: number, path: string) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=${path}`;
};

const getCookie = (name: string) => document.cookie.split('; ').reduce((r, v) => {
  const parts = v.split('=');
  return parts[0] === name ? decodeURIComponent(parts[1]) : r;
}, '');

const useCookie = (
	cookieName: string, initialValue: string
) : [
	string, 
	(value: string, days?: number, path?: string) => void, 
	(path?: string) => void
] => {
  const [cookieValue, setCookieValue] = useState<string>(() => getCookie(cookieName) || initialValue);

  const updateCookie = (value: string, days: number = 365, path: string = '/') => {
    setCookieValue(value);
    setCookie(cookieName, value, days, path);
  };

  const deleteCookie = (path: string = '/') => {
    updateCookie('', -1, path);
    setCookieValue('');
  };

  return [cookieValue, updateCookie, deleteCookie];
}

const Toast = () => {
	const [agreement, setAgreement] = useCookie('cookieAgreement', 'false')

	return (
		<RadixToast.Provider swipeDirection="right">
			<RadixToast.Root
        className={`bg-zinc-850 rounded-md shadow-lg p-[15px] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide 
					flex flex-row gap-8 `}
        open={agreement == 'false'}
      >
				<div className={`typo-base font-medium flex-grow`}>
					Cookies are everywhere
				</div>
        <RadixToast.Action className="[grid-area:_action]" asChild altText="Agree to use cookies">
          <button 
						className="flex typo-base font-medium items-center justify-center rounded typo-base px-8 py-1 outline-none bg-zinc-150 text-zinc-850 focus:ring-2 focus:ring-zinc-600"
						onClick={ () => {setAgreement('true')} }
					>
            Ok
          </button>
        </RadixToast.Action>
      </RadixToast.Root>
      <RadixToast.Viewport className="[--viewport-padding:_16px] fixed bottom-0 right-[50%] translate-x-1/2 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
		</RadixToast.Provider>
	)
}

export default Toast
