import {
  ChatIcon,
  PencilIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/outline';
import { useRouter } from 'next/router';

export default function Community() {
  const router = useRouter();

  return (
    <ul className="py-8 px-4 flex flex-col gap-4">
      {[...Array(10)].map((_, i) => (
        <li
          key={i}
          className="p-4 flex flex-col rounded-lg hover-active"
          onClick={() => router.push('/community/3')}
        >
          <span className="text-xs text-gray-800 bg-gray-200 w-fit px-1.5 py-0.5 rounded-full">
            동네질문
          </span>
          <div className="flex gap-1 text-lg">
            <span className="text-orange-400">Q.</span>
            <span className="">What is the best mandu restaurant?</span>
          </div>
          <span className="text-xs text-gray-500 flex items-center justify-end my-2">
            니꼬 &bull; 18시간 전
          </span>
          <div className="flex gap-4 border-t p-2 border-b-2">
            <span className="flex gap-1 items-center text-sm text-gray-700">
              <QuestionMarkCircleIcon className="w-4 h-4" />
              <span>궁금해요 1</span>
            </span>
            <span className="flex gap-1 items-center text-sm text-gray-700">
              <ChatIcon className="w-4 h-4" />
              <span>답변 1</span>
            </span>
          </div>
        </li>
      ))}
      <button className="fixed bottom-12 right-12 bg-orange-400 hover:bg-orange-500 transition-colors text-white p-4 rounded-full pointer-cursor shadow-md">
        <PencilIcon className="w-6 h-6" />
      </button>
    </ul>
  );
}
