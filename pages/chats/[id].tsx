import { PaperAirplaneIcon } from '@heroicons/react/outline';

export default function ChatRoom() {
  return (
    <div className="bg-slate-100 h-screen py-8 pb-16 overflow-hidden">
      <ul className="space-y-4 h-full overflow-y-auto p-4">
        {[...Array(30)].map((_, i) => (
          <li
            key={i}
            className={`flex gap-1 ${i & 1 ? 'flex-row-reverse' : ''}`}
          >
            <div className="rounded-full w-8 h-8 bg-slate-400" />
            <p
              className={`max-w-[70%] text-sm text-gray-700 px-2 py-1 rounded-md relative shadow bg-white ${
                i & 1 ? 'text-right' : ''
              }`}
            >
              Exercitation adipisicing non est est aliqua
            </p>
            <small className="text-[0.6rem] text-gray-500 self-end">
              오후 9:11
            </small>
          </li>
        ))}
      </ul>
      <form className="fixed h-16 bottom-0 inset-x-0 flex items-center border-t p-2 text-lg bg-slate-100 z-10">
        <label className="grow rounded-full overflow-hidden shadow">
          <input className="w-full p-2 text-gray-700 px-6 pr-12" />
        </label>
        <button className="absolute right-4 text-white aspect-square w-8 rounded-full bg-orange-500 transition hover:bg-orange-600 flex justify-center items-center focus:ring-2 focus:ring-orange-500 focus:ring-offset-1">
          <PaperAirplaneIcon className="w-5 h-5 mb-0.5" />
        </button>
      </form>
    </div>
  );
}
