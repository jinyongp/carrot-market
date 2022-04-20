import { VideoCameraIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import Fab from '../../components/fab';
import Layout from '../../components/layout';

export default function Streams() {
  const { push, pathname } = useRouter();

  return (
    <Layout title="Live Streams">
      <ul className="p-4 space-y-4">
        {[...Array(10)].map((_, i) => (
          <li
            key={i}
            className="space-y-2 cursor-pointer"
            onClick={() => push(`${pathname}/3`)}
          >
            <div className="w-full bg-slate-200 aspect-video rounded-md shadow" />
            <h3 className="font-medium text-gray-700 text-lg">Sample Video</h3>
          </li>
        ))}
      </ul>
      <Fab path={`${pathname}/create`}>
        <VideoCameraIcon className="w-6 h-6" />
      </Fab>
    </Layout>
  );
}
