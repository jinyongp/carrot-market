import {
  ChatIcon,
  CheckCircleIcon,
  PencilIcon,
} from '@heroicons/react/outline';
import { useRouter } from 'next/router';

export default function Community() {
  const router = useRouter();

  return (
    <div className="py-8">
      <ul className="flex flex-col gap-2 divide-y-8 divide-slate-200">
        {[...Array(10)].map((_, i) => (
          <li
            key={i}
            className="flex flex-col cursor-pointer"
            onClick={() => router.push('/community/3')}
          >
            <div className="flex flex-col gap-2 p-4">
              <span className="text-xs text-gray-700 bg-gray-100 w-fit px-1.5 py-0.5 rounded-sm">
                동네질문
              </span>
              <div className="flex gap-1 font-normal text-gray-800">
                <span className="text-orange-400">Q.</span>
                <span className="">What is the best mandu restaurant?</span>
              </div>
              <p className="text-sm text-gray-600 text-ellipsis line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                distinctio nulla tempora quas! Magnam cum eos dolore consectetur
                hic aut error eveniet dolorem quas recusandae, incidunt
                nesciunt, iste libero harum.
              </p>
              <span className="text-xs text-gray-500 flex items-center justify-end">
                니꼬 &bull; 18시간 전
              </span>
            </div>
            <div className="flex gap-4 border-t text-sm text-gray-500 px-4 py-2">
              <span className="flex gap-1 items-center">
                <CheckCircleIcon className="w-4 h-4" />
                <span>궁금해요 1</span>
              </span>
              <span className="flex gap-1 items-center">
                <ChatIcon className="w-4 h-4" />
                <span>답변 1</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="fixed bottom-12 right-12 bg-orange-400 hover:bg-orange-500 transition-colors text-white p-4 rounded-full pointer-cursor shadow-md"
        onClick={() => router.push('/community/write')}
      >
        <PencilIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
