import Layout from '@/components/layout';
import { HeartIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

export default function Item() {
  const router = useRouter();

  return (
    <Layout title="Galaxy S50" hasTabBar={false} canGoBack>
      <div className="aspect-square bg-slate-300" />
      <section className="flex gap-2 p-4 items-center border-b cursor-pointer">
        <div className="w-12 aspect-square rounded-full bg-slate-300" />
        <div className="flex flex-col grow">
          <p className="text-gray-700 font-medium text-sm">Steve Jebs</p>
          <p className="text-gray-500 font-medium text-xs">
            View profile &rarr;
          </p>
        </div>
      </section>
      <dl className="flex flex-col px-4 pt-4 gap-4">
        <dt
          className="text-3xl font-semibold text-gray-800 cursor-pointer"
          onClick={({ target }) =>
            (target as HTMLElement).scrollIntoView({ behavior: 'smooth' })
          }
        >
          Galaxy S50
        </dt>
        <dd className="text-sm text-gray-700">
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
      <section className="px-4 py-8">
        <h2 className="text-gray-700 font-semibold text-2xl border-t py-4">
          Similar items
        </h2>
        <div className="grid grid-cols-2 gap-2 mb-8">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col text-center p-2 rounded-lg hover-active"
            >
              <div className="aspect-square bg-slate-300 rounded-lg mb-2" />
              <h3 className="text-gray-700 font-medium text-base">
                Galaxy S60
              </h3>
              <p className="text-gray-500 font-medium text-sm">$100</p>
            </div>
          ))}
        </div>
      </section>
      <div className="py-2 px-4 flex items-center justify-between gap-2 divide-x fixed z-50 bottom-0 left-0 w-full bg-white border-t">
        <button className="border-none text-gray-400 hover:text-pink-400 shadow-none">
          <HeartIcon className="w-6 h-6" />
        </button>
        <div className="px-2 grow">
          <span className="text-gray-700 font-medium">$190</span>
        </div>
        <button className="btn-primary w-fit px-4">Chat</button>
      </div>
    </Layout>
  );
}
