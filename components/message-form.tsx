import { PaperAirplaneIcon } from '@heroicons/react/outline';

export default function MessageForm() {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="fixed h-16 bottom-0 inset-x-0 flex items-center border-t p-2 text-lg bg-slate-100 z-10"
    >
      <label className="grow rounded-full overflow-hidden shadow">
        <input name="message" className="w-full p-2 text-gray-700 px-6 pr-12" />
      </label>
      <button className="absolute right-4 text-white aspect-square w-8 rounded-full bg-orange-500 transition hover:bg-orange-600 flex justify-center items-center focus:ring-2 focus:ring-orange-500 focus:ring-offset-1">
        <PaperAirplaneIcon className="w-5 h-5 mb-0.5" />
      </button>
    </form>
  );
}
