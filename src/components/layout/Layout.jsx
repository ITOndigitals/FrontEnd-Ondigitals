
const Layout = ({ children, className }) => {
  return (
    <div className={className}>
      <main id="main">{children}</main>
    </div>
  );
};

export default Layout;
