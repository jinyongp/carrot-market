import { PaperAirplaneIcon } from '@heroicons/react/outline';
import Layout from '../../components/layout';

export default function StreamRoom() {
  return (
    <Layout title="Galaxy S50" canGoBack hasTabBar={false}>
      <div className="grow sticky top-0 z-10">
        <div className="w-full bg-slate-200 aspect-video shadow" />
      </div>
      <dl className="p-4 border-b">
        <dt
          className="text-3xl font-semibold text-gray-800 mb-1 cursor-pointer"
          onClick={({ target }) =>
            (target as HTMLElement).scrollIntoView({ behavior: 'smooth' })
          }
        >
          Galaxy S50
        </dt>
        <dd className="my-4 text-sm text-gray-700">
          My money&apos;s in that office, right? If she start giving me some
          bullshit about it ain&apos;t there, and we got to go someplace else
          and get it, I&apos;m gonna shoot you in the head then and there. Then
          I&apos;m gonna shoot that bitch in the kneecaps, find out where my
          goddamn money is. She gonna tell me too. Hey, look at me when I&apos;m
          talking to you, motherfucker. You listen: we go in there, and that
          ni**a Winston or anybody else is in there, you the first motherfucker
          to get shot. You understand?
        </dd>
      </dl>
      <ul className="space-y-4 mb-16 p-4">
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
    </Layout>
  );
}
