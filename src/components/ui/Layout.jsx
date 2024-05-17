const Layout = ({ maxWidth, children }) => {
  return (
    <div
      className={`
    py-[100px] px-2 ${maxWidth}  mx-auto bg-[#F5F8FF]
    `}
    >
      {children}
    </div>
  );
};
export default Layout;
