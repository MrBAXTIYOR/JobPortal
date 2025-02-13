import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import Pagination from '../../components/Pagination/Pagination';
import BlogCard from '../../components/BlogCard/BlogCard';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [categories] = useState([
    'Graphics & Design',
    'Code & Programming',
    'Digital Marketing',
    'Video & Animation',
    'Music & Audio',
    'Finance & Accounting',
    'Health & Care',
    'Data Science',
  ]);

  const tags = [
    'Design',
    'Programming',
    'Health & Care',
    'Motion Design',
    'Photography',
    'Politics',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Blog</h1>
          <div className="flex gap-2 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Blog</span>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Search</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-4 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Category</h2>
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    defaultChecked={category === 'Code & Programming'}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Recent Post</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=100&h=100&q=80"
                    alt="Post thumbnail"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="text-xs text-gray-500">
                      Nov 12, 2021 • 25 Comments
                    </p>
                    <p className="text-sm font-medium">
                      Integer volutpat fringilla ipsum
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Gallery</h2>
            <div className="grid grid-cols-3 gap-2">
              {[...Array(6)].map((_, i) => (
                <img
                  key={i}
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=150&h=150&q=80"
                  alt={`Gallery image ${i + 1}`}
                  className="w-full h-20 object-cover rounded"
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4">Popular Tag</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full hover:bg-gray-200 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map(() => (
              <Link to='/blog/detail'>
                <BlogCard />
              </Link>
            ))}
            <Pagination />
          </div>
        </main>
      </div>
    </div>
  );
};
export default Blog;
