import { FaTasks, FaCheck, FaTimes } from "react-icons/fa";
import NavItem from "./NavItem/NavItem";

interface NavItemType {
  id: number;
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavList = () => {
  const navItems: NavItemType[] = [
    { id: 1, label: "All Tasks", link: "/", icon: <FaTasks /> },
    { id: 2, label: "Completed Tasks", link: "/completed", icon: <FaCheck /> },
    {
      id: 3,
      label: "Expired Tasks",
      link: "/expired",
      icon: <FaTimes />,
    },
  ];
  return (
    <div className='mt-24'>
      {navItems.map((item) => (
        <NavItem
          key={item.id}
          label={item.label}
          link={item.link}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default NavList;
