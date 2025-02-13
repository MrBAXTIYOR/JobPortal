import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full flex  flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-4xl font-bold">Opps! Page not found</h1>
          <p className="text-muted-foreground max-w-md">
            Something went wrong. It&apos;s look like the link is broken or the
            page is removed.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link className='p-2 bg-blue-600 rounded text-white' to="/">Home</Link>
            <button className='p-2 border-2 rounded'>Go Back</button>
          </div>
        </div>
        <div className="relative w-full max-w-md">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-a7WpVmRKISWsbSraao0BMse4vx644c.png"
            alt="404 illustration"
          />
        </div>
      </div>
    </div>
  );
};
export default NotFound;
