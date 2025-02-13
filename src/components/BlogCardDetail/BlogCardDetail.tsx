import { ArrowRight } from "lucide-react";
interface BlogPost {
    id: number;
    title: string;
    description: string;
    image: string;
  }
  
const BlogCardDetail = ({ post }: { post: BlogPost }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
    <img
      src={post.image}
      alt={post.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
        {post.title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
      <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 group">
        Read more
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  </div>
);

export default BlogCardDetail;
