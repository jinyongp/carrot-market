export default function Write() {
  return (
    <div className="px-4 py-8 space-y-8">
      <h1 className="text-gray-900 font-bold text-3xl text-center">
        Write a Question
      </h1>
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
  );
}
