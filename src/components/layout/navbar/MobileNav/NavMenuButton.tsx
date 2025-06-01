import * as React from "react";
import { useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";

const MenuToggle = ({
  toggle,
  dark = true,
}: {
  toggle?: any;
  dark?: boolean;
}) => (
  <motion.button
    onClick={toggle}
    className=" select-none outline-none cursor-pointer  z-30 absolute top-[15px] right-[calc(60/1420*100vw)]">
    {dark ? (
      <motion.img
        src="/icons/menu_yellow.svg"
        variants={{
          closed: { display: "block" },
          open: { display: "none" },
        }}
        className="w-[clamp(30px,calc(50/1420*100vw),80px)] pt-2"
      />
    ) : (
      <motion.img
        src="/icons/menu_black.svg"
        variants={{
          closed: { display: "block" },
          open: { display: "none" },
        }}
        className="w-[clamp(30px,calc(50/1420*100vw),80px)]"
      />
    )}
    <motion.img
      src="/icons/close_outlined_white.svg"
      variants={{
        closed: { display: "none" },
        open: { display: "block" },
      }}
      className="w-[clamp(30px,calc(60/1420*100vw),80px)]"
    />
  </motion.button>
);

const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};

const NavMenuButton = ({
  dark = true,
  children,
}: {
  dark?: boolean;
  children?: React.ReactNode;
}) => {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={"closed"}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}>
      <motion.div
        className="absolute top-[0] right-[0] bottom-[0] w-[100%] bg-[#0f0f0f]"
        variants={{
          open: (height = 1000) => ({
            clipPath: `circle(${height * 3 + 200}px at 130% 340px)`,
            transition: {
              type: "spring",
              stiffness: 20,
              restDelta: 2,
              duration: 0.1,
            },
            // scale: 1,
          }),
          closed: {
            clipPath: "circle(30px at 120% 40px)",
            transition: {
              delay: 0,
              type: "spring",
              stiffness: 400,
              damping: 40,
            },
            // scale: 0,
          },
        }}
      />
      {children}

      <MenuToggle dark={dark} toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default NavMenuButton;
