import Layout from '@/components/layout';
import { useRouter } from 'next/router';

export default function Chats() {
  const router = useRouter();

  return (
    <Layout title="채팅">
      <ul className="divide-y-[1px]">
        {[...Array(10)].map((_, i) => (
          <li
            key={i}
            tabIndex={0}
            className="px-4 cursor-pointer border-dashed"
            onClick={() => router.push('/chats/3')}
          >
            <div className="flex gap-2 py-4 items-center cursor-pointer">
              <div className="w-12 aspect-square rounded-full bg-slate-300" />
              <div className="flex flex-col grow">
                <p className="text-gray-700 font-medium text-sm">Steve Jebs</p>
                <p className="text-gray-500 font-medium text-xs line-clamp-1 text-ellipsis">
                  Amet ad velit Lorem nulla incididunt laborum qui magna ullamco
                  voluptate nulla Lorem nulla.
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
