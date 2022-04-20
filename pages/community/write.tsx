import Layout from '../../components/layout';

export default function Write() {
  return (
    <Layout title="Write a Question" canGoBack hasTabBar={false}>
      <div className="p-4 space-y-8">
        <form className="space-y-2">
          <input
            required
            type="text"
            className="input-default"
            placeholder="What is your question?"
          />
          <label className="flex flex-col gap-1">
            <textarea
              rows={4}
              placeholder="Description"
              className="input-default min-h-[8rem]"
            />
          </label>
          <button className="btn-primary">Reply</button>
        </form>
      </div>
    </Layout>
  );
}
