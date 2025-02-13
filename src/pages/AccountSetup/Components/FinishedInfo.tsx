import { CheckCheck } from "lucide-react"
import { Link } from "react-router-dom"

const FinishedInfo = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <div className="max-w-md w-full text-center">
      <div className="w-24 h-24 bg-blue-50 rounded-full mx-auto mb-6 flex items-center justify-center">
        <CheckCheck className="w-12 h-12 text-blue-500" />
      </div>
      
      <h2 className="text-2xl font-semibold mb-4">
        🎉 Congratulations, Your profile is 100% complete!
      </h2>
      
      <p className="text-gray-600 mb-8">
        Donec hendrerit, ante mattis pellentesque eleifend, tortor urna 
        malesuada ante, eget aliquam nulla augue hendrerit ligula. Nunc 
        mauris arcu, mattis sed sem vitae.
      </p>
      
      <div className="flex gap-4 justify-center">
        <Link to='/' className="px-6 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors">
          View Dashboard
        </Link>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center">
          Post Job
          <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  </div>
  )
}
export default FinishedInfo