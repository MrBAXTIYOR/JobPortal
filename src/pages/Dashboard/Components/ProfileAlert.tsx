
const ProfileAlert = () => {
  return (
    <div className="bg-red-500 text-white p-4 rounded-lg flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <div className="font-medium">Your profile editing is not completed.</div>
          <div className="text-red-100">Complete your profile editing & build your custom Resume</div>
        </div>
      </div>
      <button className="bg-white text-red-500 px-4 py-2 rounded hover:bg-red-50 transition-colors">
        Edit Profile →
      </button>
    </div>
  );
};

export default ProfileAlert;