export default function item() {
  return (
    <div className="py-8 px-4">
      <div className="aspect-square bg-slate-300 rounded-2xl" />
      <div className="flex gap-2 py-4 items-center cursor-pointer border-b">
        <div className="w-12 aspect-square rounded-full bg-slate-300" />
        <div className="flex flex-col group">
          <p className="text-gray-700 font-medium text-sm">Steve Jebs</p>
          <p className="text-gray-500 font-medium text-xs group-hover:translate-x-1 transition-transform">
            View profile &rarr;
          </p>
        </div>
      </div>
      <div className="flex flex-col my-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-gray-800 mt-2 mb-1">
            Galaxy S50
          </h1>
          <p className="text-2xl font-medium bg-orange-500 shadow w-fit text-white px-2 rounded-md">
            $140
          </p>
        </div>
        <p className="my-4 text-sm text-gray-700">
          My money&apos;s in that office, right? If she start giving me some
          bullshit about it ain&apos;t there, and we got to go someplace else
          and get it, I&apos;m gonna shoot you in the head then and there. Then
          I&apos;m gonna shoot that bitch in the kneecaps, find out where my
          goddamn money is. She gonna tell me too. Hey, look at me when I&apos;m
          talking to you, motherfucker. You listen: we go in there, and that
          ni**a Winston or anybody else is in there, you the first motherfucker
          to get shot. You understand?
        </p>
        <div className="flex gap-2">
          <button className="btn-primary">Talk to seller</button>
          <button className="btn-default w-fit border-none hover:bg-pink-100 hover:text-pink-400">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="py-2">
        <h2 className="text-gray-700 font-semibold text-2xl">Similar items</h2>
        <div className="grid grid-cols-2 gap-2">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col text-center p-2 rounded-lg hover:shadow cursor-pointer transition-shadow"
            >
              <div className="aspect-square bg-slate-300 rounded-lg mb-2" />
              <h3 className="text-gray-700 font-medium text-base">
                Galaxy S60
              </h3>
              <p className="text-gray-500 font-medium text-sm">$100</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
