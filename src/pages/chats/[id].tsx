import Layout from '@/components/layout';
import MessageForm from '@/components/message-form';

export default function ChatRoom() {
  return (
    <Layout title="이름" canGoBack hasTabBar={false}>
      <div className="bg-slate-100 fixed w-full top-16 h-full overflow-auto pb-32">
        <ul className="space-y-4 overflow-y-auto p-4">
          {[...Array(20)].map((_, i) => (
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
        <MessageForm />
      </div>
    </Layout>
  );
}
