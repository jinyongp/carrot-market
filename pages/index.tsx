import { useRouter } from 'next/router';
import { ChatIcon, HeartIcon, PlusIcon } from '@heroicons/react/outline';
import Layout from '../components/layout';
import Fab from '../components/fab';

export default function Home() {
  const router = useRouter();

  return (
    <Layout title="홈">
      <ul className="flex flex-col divide-y">
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
                <span className="text-gray-500 text-xs">
                  Black &bull; 10분 전
                </span>
                <span className="text-gray-900 font-medium text-lg mt-2">
                  $95
                </span>
              </div>
            </div>
            <div className="flex items-end gap-2 text-gray-700 text-xs">
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
      <Fab path="/items/upload">
        <PlusIcon className="w-6 h-6" />
      </Fab>
    </Layout>
  );
}
