export default function EditProfile() {
  return (
    <div className="py-8 px-4">
      <label className="cursor-pointer inline-flex">
        <div className="flex gap-3 items-center">
          <div className="w-16 aspect-square rounded-full bg-slate-300" />
          <span
            tabIndex={0}
            className="btn-default text-xs w-fit focus:outline-none focus:border-gray-500"
          >
            Change
          </span>
          <input type="file" className="hidden" accept="image/*" />
        </div>
      </label>
      <form className="flex flex-col gap-4 mt-4">
        <label className="text-sm text-gray-600">
          <span>Email address</span>
          <input required type="text" className="input-default" />
        </label>
        <label className="text-sm text-gray-600">
          <span>Phone number</span>
          <div className="flex">
            <span className="empty:hidden border-2 border-r-0 rounded-l-lg p-2 text-sm px-3 flex justify-center items-center">
              +82
            </span>
            <input
              required
              type="text"
              className="input-default rounded-l-none"
            />
          </div>
        </label>
        <button className="btn-primary mt-6">Update Profile</button>
      </form>
    </div>
  );
}
