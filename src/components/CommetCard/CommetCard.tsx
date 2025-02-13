import { Reply } from "lucide-react";

interface Comment {
  id: number;
  author: string;
  avatar: string;
  content: string;
  time: string;
  replies?: Comment[];
}
const CommetCard = ({ comment, isReply = false }: { comment: Comment, isReply?: boolean }) => {
  return (
    <div className={`flex gap-4 ${isReply ? 'ml-12 mt-4' : 'mt-6'}`}>
    <img 
      src={comment.avatar} 
      alt={comment.author}
      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
    />
    <div className="flex-1">
      <div className="flex items-center gap-2">
        <h3 className="font-semibold text-gray-900">{comment.author}</h3>
        <span className="text-sm text-gray-500">{comment.time}</span>
      </div>
      <p className="mt-1 text-gray-600">{comment.content}</p>
      <button className="mt-2 flex items-center gap-2 text-blue-600 hover:text-blue-700">
        <Reply className="w-4 h-4" />
        <span className="text-sm">Reply</span>
      </button>
      
      {comment.replies?.map(reply => (
        <CommetCard key={reply.id} comment={reply} isReply={true} />
      ))}
    </div>
  </div>  )
}
export default CommetCard