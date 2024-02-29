//mobile menu

interface NavProps {
  toggleMenu: () => void;
  isOpen: boolean;
}

 const MobileMenu = ({ toggleMenu, isOpen }: NavProps) => {
 
  
 
   return (
     <div   className={`lg:hidden w-full h-screen flex flex-col items-center bg-black rounded-3xl fixed top-0 left-0 z-50 transition-all duration-1000 ease-in-out  transform sm:border-x-8 border-white ${
      isOpen ? "translate-y-0" : "hidden"
    }`}>MobileMenu</div>
   )
 }
 
 export default MobileMenu;