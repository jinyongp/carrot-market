import { PhotographIcon, UploadIcon } from '@heroicons/react/outline';
import Layout from '../../components/layout';

export default function Upload() {
  return (
    <Layout title="Upload New Product" canGoBack hasTabBar={false}>
      <div className="px-4 py-8 flex flex-col gap-8">
        <label className="cursor-pointer flex justify-center items-center p-16 rounded-lg border-dashed border-4 border-gray-300 text-gray-500 hover:border-orange-500 transition-colors group">
          <div className="w-16 h-16 overflow-hidden">
            <PhotographIcon className="w-16 h-16 transition-transform group-hover:-translate-y-16 duration-200" />
            <UploadIcon className="w-16 h-16 text-orange-500 transition-transform group-hover:-translate-y-16 duration-200" />
          </div>
          <input type="file" className="hidden" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-gray-600 text-sm">Price</span>
          <div className="relative flex items-center">
            <span className="absolute left-4 pointer-events-none text-gray-500">
              $
            </span>
            <input
              required
              type="number"
              placeholder="0.00"
              className="input-default pl-8 pr-16 text-gray-700"
            />
            <span className="absolute right-4 pointer-events-none text-gray-500">
              USD
            </span>
          </div>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-gray-600 text-sm">Description</span>
          <textarea rows={4} className="input-default min-h-[8rem]" />
        </label>
        <button className="btn-primary">Upload product</button>
      </div>
    </Layout>
  );
}
