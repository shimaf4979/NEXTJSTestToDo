import SideMenu from "@/components/SideMenu/SideMenu";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-screen'>
      <SideMenu />
      <div className='bg-slate-50-300 flex-1 overflow-auto'>{children}</div>
    </div>
  );
};

export default MainLayout;
