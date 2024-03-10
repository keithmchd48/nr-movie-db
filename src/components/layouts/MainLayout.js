import Header from '../Header';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-netflix-black">
      <Header />
      {children}
    </div>
  );
}

export default MainLayout;