import { CheckCircleIcon, ChatIcon } from '@heroicons/react/outline';

export default function CommunityPost() {
  return (
    <div>
      <div className="px-4 pt-8">
        <span className="text-xs text-gray-700 bg-gray-100 w-fit px-1.5 py-0.5 rounded-sm">
          동네질문
        </span>
        <div className="flex gap-2 py-4 items-center cursor-pointer">
          <div className="w-12 aspect-square rounded-full bg-slate-300" />
          <div className="flex flex-col grow">
            <p className="text-gray-700 font-medium text-sm">Steve Jebs</p>
            <p className="text-gray-500 font-medium text-xs">
              View profile &rarr;
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-1 font-normal text-gray-800 p-4 border-t">
        <span className="text-orange-400">Q.</span>
        <span className="">What is the best mandu restaurant?</span>
      </div>
      <p className="text-sm text-gray-600 px-4 pb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia distinctio
        nulla tempora quas! Magnam cum eos dolore consectetur hic aut error
        eveniet dolorem quas recusandae, incidunt nesciunt, iste libero harum.
      </p>
      <div className="flex gap-4 border-t text-sm text-gray-500 px-4 py-2 border-b-2">
        <span className="flex gap-1 items-center">
          <CheckCircleIcon className="w-4 h-4" />
          <span>궁금해요 1</span>
        </span>
        <span className="flex gap-1 items-center">
          <ChatIcon className="w-4 h-4" />
          <span>답변 1</span>
        </span>
      </div>
      <ul className="">
        {[...Array(3)].map((_, i) => (
          <li key={i} className="border-b p-4 space-y-0.5">
            <div className="flex gap-2 items-center cursor-pointer w-fit">
              <div className="w-10 aspect-square rounded-full bg-slate-300" />
              <div className="flex flex-col">
                <p className="text-gray-700 font-medium text-sm">Steve Jebs</p>
                <p className="text-gray-500 font-medium text-xs">2시간 전</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm px-10">
              Dolore ut Lorem et cillum minim non elit tempor esse commodo
              consectetur.
            </p>
          </li>
        ))}
      </ul>
      <form className="space-y-2 px-4 mt-4">
        <label className="flex flex-col gap-1">
          <textarea
            rows={4}
            placeholder="Answer this question!"
            className="input-default min-h-[8rem]"
          />
        </label>
        <button className="btn-primary">Reply</button>
      </form>
    </div>
  );
}
