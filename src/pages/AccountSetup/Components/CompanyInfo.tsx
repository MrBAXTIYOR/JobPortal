import { ListOrdered, Upload } from "lucide-react"

const CompanyInfo = () => {
  return (
    <div className="space-y-6">
    <h2 className="text-xl font-semibold mb-6">Logo & Banner Image</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center cursor-pointer">
        <div className="flex flex-col items-center ">
          <Upload className="w-8 h-8 text-gray-400 mb-2" />
          <p className="font-medium">Browse photo or drop here</p>
          <p className="text-sm text-gray-500 mt-1">
            A photo larger than 400 pixels work best. Max photo size 5 MB
          </p>
        </div>
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center cursor-pointer">
        <div className="flex flex-col items-center">
          <Upload className="w-8 h-8 text-gray-400 mb-2" />
          <p className="font-medium">Browse photo or drop here</p>
          <p className="text-sm text-gray-500 mt-1">
            Banner images typical dimension 1520×400. Supported format
            JPEG, PNG. Max photo size 5 MB
          </p>
        </div>
      </div>
    </div>

    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Company name
      </label>
      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Enter company name"
      />
    </div>

    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        About Us
      </label>
      <div className="border border-gray-300 rounded-lg">
        <div className="border-b border-gray-300 p-2">
          <div className="flex gap-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <ListOrdered className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        <textarea
          className="w-full p-4 rounded-b-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows={6}
          placeholder="Write down about your company here. Let the candidate know who we are..."
        ></textarea>
      </div>
    </div>

    <div className="flex justify-start">
      <button className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 flex items-center justify-center">
        Save & Next
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
  )
}
export default CompanyInfo