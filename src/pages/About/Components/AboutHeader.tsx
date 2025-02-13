import Container from '../../../container/Container';

const AboutHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <Container>

        <div className="flex justify-between items-center py-4">
          <h1 className="text-xl font-semibold text-gray-900">About us</h1>
          <nav className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">About us</span>
          </nav>
        </div>
      </Container>
    </header>
  );
};
export default AboutHeader;
