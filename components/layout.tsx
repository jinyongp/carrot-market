import {
  ChatIcon,
  ChevronLeftIcon,
  HomeIcon,
  NewspaperIcon,
  UserIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';

type LayoutProps = {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
};

export default function Layout({
  title = 'Title',
  canGoBack = false,
  hasTabBar = true,
  children,
}: LayoutProps) {
  const { pathname, back } = useRouter();

  return (
    <main className="flex flex-col h-screen">
      <header className="fixed top-0 w-full h-16 px-4 grid grid-cols-3 place-content-center  bg-white border-b">
        <button
          className={`grow ${canGoBack || 'invisible'}`}
          onClick={() => back()}
        >
          {canGoBack && <ChevronLeftIcon className="w-6 aspect-square" />}
        </button>
        <h1 className="grow text-gray-800 font-bold text-lg text-center">
          {title}
        </h1>
        <button className="grow" role="none"></button>
      </header>
      <section className={`mt-16 overflow-y-auto ${hasTabBar && 'mb-16'}`}>
        {children}
      </section>
      {hasTabBar && (
        <nav className="fixed bottom-0 w-full h-16 bg-white border-t">
          <ul className="h-full flex items-center justify-around relative">
            {[
              ['홈', HomeIcon, '/'],
              ['동네생활', NewspaperIcon, '/community'],
              ['채팅', ChatIcon, '/chats'],
              ['라이브', VideoCameraIcon, '/streams'],
              ['계정', UserIcon, '/profile'],
            ].map(([name, Icon, path], i) => (
              <li
                key={i}
                className={`
                  relative group grow h-full flex flex-col justify-center items-center gap-1 transition-transform
                  ${
                    path === pathname
                      ? 'text-orange-500 -translate-y-2 cursor-default'
                      : 'hover:text-orange-500 hover:-translate-y-2 cursor-pointer'
                  }
                `}
              >
                <Link href={path as string}>
                  <a className="flex flex-col items-center justify-center w-full h-full">
                    <Icon className="w-6 aspect-square" />
                    <span
                      className={`
                        absolute bottom-0 text-xs transition opacity-0
                        group-hover:opacity-100 group-hover:translate-y-0
                        ${path === pathname ? 'opacity-100' : '-translate-y-3'}
                      `}
                    >
                      {name as string}
                    </span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </main>
  );
}
