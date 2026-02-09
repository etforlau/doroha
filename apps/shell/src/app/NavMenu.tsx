import React from 'react';
import { MFEs } from '../mfeRegister';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

type NavMenuProps = {
  className?: string;
} & React.ComponentProps<'div'>;

const NavMenu: React.FC<NavMenuProps> = ({ className, ...props }) => {
  const appRoutes = MFEs.map((mfe) => (
    <NavigationMenuItem key={mfe.name} className="nav-menu-item">
      <NavigationMenuLink href={mfe.route} className="nav-menu-link">
        {mfe.name}
      </NavigationMenuLink>
    </NavigationMenuItem>
  ));

  return (
    <div className={`min-w-[20%] p-5 ${className}`} {...props}>
      <NavigationMenu
        orientation="vertical"
        className="min-w-full h-full flex-col justify-start list-none m-0 px-[15px] py-[50px] bg-[#f06231] rounded"
      >
        <NavigationMenuItem className="nav-menu-item">
          <NavigationMenuLink href="/" className="nav-menu-link">
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        {appRoutes}
      </NavigationMenu>
    </div>
  );
};

export default NavMenu;
