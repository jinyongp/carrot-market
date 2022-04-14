import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <ul className="flex flex-col divide-y py-4">
        {[...Array(10)].map((_, i) => (
          <li
            key={i}
            className="flex py-2 px-4 cursor-pointer"
            onClick={() => router.push('/items/3')}
          >
            <div className="flex items-center flex-1">
              <div className="w-24 h-24 bg-slate-400 rounded-lg" />
              <div className="ml-4 flex flex-col">
                <h3 className="text-gray-700 text-sm">New iPhone 14</h3>
                <span className="text-gray-500 text-xs">Black</span>
                <span className="text-gray-900 font-medium text-lg mt-2">
                  $95
                </span>
              </div>
            </div>
            <div className="flex items-end gap-4 text-gray-700">
              <div className="flex items-center gap-0.5 text-pink-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
                <span>{Math.round(Math.random() * 100)}</span>
              </div>
              <div className="flex items-center gap-0.5 text-indigo-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                <span>{Math.round(Math.random() * 100)}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button className="fixed bottom-12 right-12 bg-orange-400 hover:bg-orange-500 transition-colors text-white p-4 rounded-full pointer-cursor shadow-md">
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </>
  );
}
