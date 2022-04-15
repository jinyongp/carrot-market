import { useRouter } from 'next/router';

export default function Chats() {
  const router = useRouter();

  return (
    <ul className="py-8 divide-y-[1px]">
      {[...Array(10)].map((_, i) => (
        <li
          key={i}
          className="px-4 cursor-pointer"
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
  );
}
