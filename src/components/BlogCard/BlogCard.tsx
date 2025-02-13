const BlogCard = () => {
  return (
    <article className="bg-white mt-4 rounded-lg overflow-hidden flex flex-col md:flex-row">
      <img
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
        alt="Blog post image"
        className="w-full md:w-72 h-48 md:h-auto object-cover"
      />
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path
                d="M12 2H4C2.89543 2 2 2.89543 2 4V12C2 13.1046 2.89543 14 4 14H12C13.1046 14 14 13.1046 14 12V4C14 2.89543 13.1046 2 12 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 6H14M6 3V1M10 3V1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Nov 12, 2021</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path
                d="M14 9H10L8 11L6 9H2V13C2 13.5304 2.21071 14.0391 2.58579 14.4142C2.96086 14.7893 3.46957 15 4 15H12C12.5304 15 13.0391 14.7893 13.4142 14.4142C13.7893 14.0391 14 13.5304 14 13V9Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 3C2 2.46957 2.21071 1.96086 2.58579 1.58579C2.96086 1.21071 3.46957 1 4 1H12C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V9H10L8 11L6 9H2V3Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>25 Comments</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3">
          <a href="#" className="hover:text-blue-600">
            Proin sit amet massa eget odio consectetur ultrices
          </a>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          Integer imperdiet mauris eget nisi ultrices, quis hendrerit est
          consectetur. Vivamus ut volutpat odio. Maecenas porta erat sed massa
          bibendum pellentesque.
        </p>
        <a
          href="#"
          className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
        >
          Read more
          <svg className="w-4 h-4 ml-1" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8H13M9 4L13 8L9 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </article>
  );
};
export default BlogCard;
