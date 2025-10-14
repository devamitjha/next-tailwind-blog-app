const Header = ()=>{
    return(
        <div className="text-2xl">Admin Header</div>
    )
};
const Footer = ()=>{
    return(
        <div className="text-2xl">Admin Footer</div>
    )
}
export default function AdminLayout({ children }) {
  return (    
      <div className="max-w-[1024px] h-full w-full mx-auto">
        <Header />
          <main>{children}</main>
        <Footer />
      </div>
  );
}
