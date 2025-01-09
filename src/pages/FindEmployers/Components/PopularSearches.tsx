const searches = [
  'Front-end',
  'Back-end',
  'Development',
  'PHP',
  'Laravel',
  'Bootstrap',
  'Developer',
  'Team Lead',
  'Product Testing',
  'Javascript',
];

const PopularSearches = () => {
  return (
    <div className="mt-4">
      <p className="text-sm text-gray-500 mb-2">Popular searches:</p>
      <div className="flex flex-wrap gap-2">
        {searches.map((search) => (
          <button
            key={search}
            className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200"
          >
            {search}
          </button>
        ))}
      </div>
    </div>
  );
};
export default PopularSearches;
