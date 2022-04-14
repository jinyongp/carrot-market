import { useRouter } from 'next/router';
import { ChatIcon, HeartIcon, PlusIcon } from '@heroicons/react/outline';

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
                <HeartIcon className="w-4 h-4" />
                <span>100</span>
              </div>
              <div className="flex items-center gap-0.5 text-indigo-400">
                <ChatIcon className="w-4 h-4" />
                <span>100</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={() => router.push('/items/upload')}
        className="fixed bottom-12 right-12 bg-orange-400 hover:bg-orange-500 transition-colors text-white p-4 rounded-full pointer-cursor shadow-md"
      >
        <PlusIcon className="w-6 h-6" />
      </button>
    </>
  );
}
