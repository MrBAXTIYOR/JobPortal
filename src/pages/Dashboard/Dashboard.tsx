import JobList from "./Components/JobList"
import ProfileAlert from "./Components/ProfileAlert"
import Sidebar from "./Components/Sidebar"
import StatCard from "./Components/StatCard"

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
    <Sidebar />
    
    <div className="flex-1 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-1">Hello, Esther Howard</h1>
          <p className="text-gray-600">Here is your daily activities and job alerts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard type="applied" count={589} />
          <StatCard type="favorite" count={238} />
          <StatCard type="alerts" count={574} />
          <StatCard type="alerts" count={574} />
        </div>

        <div className="mb-8">
          <ProfileAlert />
        </div>

        <JobList />
      </div>
    </div>
  </div>
  )
}
export default Dashboard