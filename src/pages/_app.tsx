import type { AppProps as INextAppProps } from 'next/app';
import localFont from 'next/font/local';

import { Favicon } from '@/components/Favicon/Favicon';
import { Meta } from '@/components/Meta/Meta';
import { RouterHistoryProvider } from '@/context/routerHistory';

import '@/styles/style.scss';

export interface IAppProps extends INextAppProps<object> {}

const pixelFont = localFont({
  src: [
    {
      path: '../styles/fonts/pixelfont_7.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
});

const App = ({ Component, pageProps }: IAppProps) => {
  return (
    <>
      <Meta />
      <Favicon />
      <RouterHistoryProvider>
        <main className={pixelFont.className}>
          <Component {...pageProps} />
        </main>
      </RouterHistoryProvider>
    </>
  );
};

export default App;
