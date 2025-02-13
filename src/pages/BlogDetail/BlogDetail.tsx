import {
  Calendar,
  MessageCircle,
  Search,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import {
  blogDetailCommet,
  blogPosts,
  galleryImages,
  portfolioItems,
  recentPosts,
} from '../../data/data';

import { useState } from 'react';
import CommetCard from '../../components/CommetCard/CommetCard';
import BlogCard from '../../components/BlogCardDetail/BlogCardDetail';

function BlogDetail() { 
  const [newComment, setNewComment] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-semibold">Blog Single</h1>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                Blog List
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 font-medium"
              >
                Blog Single
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              <h2 className="text-3xl font-bold px-6 pt-6">
                20 cool fonts for web and graphic design
              </h2>

              <div className="flex flex-wrap items-center space-x-4 px-6 py-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=32&h=32&q=80"
                  alt="Author"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="font-medium">Kevin Gilbert</span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Nov 12, 2021</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span>25 Comments</span>
                  </div>
                </div>
              </div>

              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Blog header"
                className="w-full h-80 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Check out these 20 cool fonts for your next web or graphic
                  design project. Typography, font, and typeface are focal
                  design elements.
                </h3>

                <p className="text-gray-600 mb-4">
                  Their aesthetic nature influences people's perception of a
                  brand, making font all the more necessary for digital
                  designers to consider when designing for the web and beyond.
                  Font goes the extra mile, it cements a brand's messaging,
                  aligning a brand to its target audience with each line of
                  header text and subtext within a web design.
                </p>

                <p className="text-gray-600 mb-4">
                  The Graphik family has 18 different styles, from bold to
                  regular, compact light, semibold, medium, and so on. Graphik
                  is a gorgeous typeface with a wide range of font styles, each
                  contemporary in its own respect.
                </p>

                <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic bg-blue-50 p-4 rounded-r">
                  Vintage meets vogue is the only way to describe this serif
                  typeface. Neue World encompasses the mode high-fashion
                  aesthetic of the 1960s with a commercial take.
                </blockquote>

                <h4 className="text-xl font-semibold mb-4">
                  EB Garamond and Relative (free+paid).
                </h4>

                <p className="text-gray-600 mb-8">
                  Relative is an OpenType sans-serif font known for its range.
                  Designed by The Entente in 2011, this type font family comes
                  in two halves: Book to Black (with italics) and faux
                  monospace. This range gives you versatility and readability.
                  Coming in four weights and 12 styles, Relative is great for
                  both personal and commercial use due to its quality.
                </p>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {portfolioItems.map((item) => (
                    <div
                      key={item.id}
                      className="relative group overflow-hidden rounded-lg"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-100">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white text-sm font-medium">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Share */}
                <div className="border-t border-b border-gray-200 py-4 mb-8">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-600">Share this post:</span>
                    <a href="#" className="text-blue-500 hover:underline">
                      Facebook
                    </a>
                    <a href="#" className="text-blue-500 hover:underline">
                      Twitter
                    </a>
                    <a href="#" className="text-blue-500 hover:underline">
                      Pinterest
                    </a>
                  </div>
                </div>

                {/* Comments Section */}
                <div>
                  <h4 className="text-xl font-semibold mb-6">
                    Write a Comments
                  </h4>
                  <textarea
                    placeholder="Share your thoughts on this post?"
                    className="w-full h-32 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
                  />
                  <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Post A Comments
                  </button>

                  <h4 className="text-2xl font-semibold mt-12 mb-6">
                    Comments
                  </h4>
                  {/* New Comment Input */}
                  <div className="flex gap-4 mb-8">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
                      alt="Current user"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Share your thoughts on this comment..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                        rows={2}
                      />
                      <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Post Reply
                      </button>
                    </div>
                  </div>

                  {/* Comments List */}
                  <div className="space-y-6">
                    {blogDetailCommet.map((comment) => (
                      <CommetCard key={comment.id} comment={comment} />
                    ))}
                  </div>

                  {/* Load More Button */}
                  <button className="mt-8 w-full py-2 text-blue-600 hover:text-blue-700 font-medium">
                    Load More
                  </button>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Search</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Category</h3>
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </div>
              <div className="space-y-3">
                {[
                  'Graphics & Design',
                  'Code & Programming',
                  'Digital Marketing',
                  'Video & Animation',
                  'Music & Audio',
                  'Finance & Accounting',
                  'Health & Care',
                  'Data Science',
                ].map((category) => (
                  <label key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded text-blue-500 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-600">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Recent Post</h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex space-x-4">
                    <img
                      src={post.image}
                      alt=""
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-2">{post.title}</h4>
                      <div className="flex items-center text-sm text-gray-500 space-x-3">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          <span>{post.comments} Comments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Gallery</h3>
              <div className="grid grid-cols-3 gap-2">
                {galleryImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Popular Tag</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm">
                  Design
                </span>
                <span className="px-4 py-1.5 bg-blue-500 text-white rounded-full text-sm">
                  Programming
                </span>
                <span className="px-4 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm">
                  Health & Care
                </span>
                <span className="px-4 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm">
                  Motion Design
                </span>
                <span className="px-4 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm">
                  Photography
                </span>
                <span className="px-4 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm">
                  Politics
                </span>
              </div>
            </div>
          </div>
        </div>
          <div className="flex justify-between items-center mb-4 mt-12">
            <h2 className="text-3xl font-bold text-gray-900">Related Blog</h2>
            <div className="flex-row gap-4">
              <button
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}

export default BlogDetail;
