import {
  HeartIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

export default function Profile() {
  const router = useRouter();

  return (
    <div className="py-8 px-4">
      <div
        className="flex gap-2 py-4 items-center cursor-pointer w-fit"
        onClick={() => router.push('/profile/edit')}
      >
        <div className="w-12 aspect-square rounded-full bg-slate-300" />
        <div className="flex flex-col">
          <p className="text-gray-700 font-medium text-sm">Steve Jebs</p>
          <p className="text-gray-500 font-medium text-xs">
            Edit profile &rarr;
          </p>
        </div>
      </div>
      <div className="flex justify-around text-sm text-center my-8">
        {[
          [ShoppingCartIcon, '판매내역', '/profile/sales'],
          [ShoppingBagIcon, '구매내역', '/profile/purchases'],
          [HeartIcon, '관심목록', '/profile/interests'],
        ].map(([Icon, text, url], i) => (
          <div
            key={i}
            className="cursor-pointer group"
            onClick={() => router.push(url as string)}
          >
            <div className="flex justify-center items-center p-4 rounded-full bg-orange-500 text-white mb-1 transition group-hover:bg-orange-600">
              <Icon className="w-6 h-6" />
            </div>
            <span>{text as string}</span>
          </div>
        ))}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <div className="w-12 aspect-square rounded-full bg-slate-300" />
          <div>
            <p className="text-gray-700 font-medium text-sm">니꼬</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-5 w-5 ${
                    i < 4 ? 'text-yellow-400' : 'text-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="mt-4 text-xs text-gray-600">
          Normally, both your asses would be dead as fucking fried chicken, but
          you happen to pull this shit while I&apos;m in a transitional period
          so I don&apos;t wanna kill you, I wanna help you. But I can&apos;t
          give you this case, it don&apos;t belong to me. Besides, I&apos;ve
          already been through too much shit this morning over this case to hand
          it over to your dumb ass.
        </p>
      </div>
    </div>
  );
}
