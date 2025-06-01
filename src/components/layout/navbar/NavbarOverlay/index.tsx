import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import { listItems } from "./data";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";
import BorderedNavWrapper from "@/components/layout/wrappers/BorderedNavWrapper/BorderedNavWrapper";





function NavbarOverlay({ onClose = () => null }: { onClose?: any }) {
  const [current, setcurrent] = React.useState(undefined);
  const [selected, setselected] = React.useState(undefined);
  const router = useRouter();



  
  return (
    <BorderedNavWrapper>
      <div className="w-full h-full rounded-[10px] overflow-hidden  flex flex-col items-start px-[clamp(15px,calc(45/1420*100vw),100px)] bg-[#0f0f0f]">
        <div className="flex w-full justify-between items-start   pt-[15px] sm:pt-[30px]">
          <Image
            src={"/icons/logo.svg"}
            alt="logo"
            width={123}
            height={54}
            className="
                    
            w-[clamp(123px,calc(213/1420*100vw),200px)]
            h-[clamp(54px,calc(54/1420*100vw),96px)]
            "
          />

          <motion.button
            whileHover={{ scale: 1.2, rotate: 20 }}
            onClick={() => {
              onClose();
              setselected(undefined);
            }}>
            <img
              src="/icons/close_outlined_white.svg"
              className="w-[clamp(50px,calc(60/1420*100vw),80px)]"
            />
          </motion.button>
        </div>

        {/* SMALL SCREEN */}
        <div
          className="w-full relative  flex-col md:flex-row 
           mt-[60px] gap-x-[10px] gap-y-[20px] items-center justify-between  
           flex md:hidden
            ">
          {!selected ? null : (
            <button onClick={() => setselected(undefined)}>
              <AiOutlineArrowLeft className="mb-[10px] text-2xl text-white absolute left-0" />
            </button>
          )}
          {listItems.map((item, indx) => {
            const isSelected = selected && selected === item?.id ? true : false;
            const isCurrent = current === item.id || isSelected;

            if (selected !== undefined && !isSelected) return null;
            return (
              <React.Fragment key={item?.id || `${indx}`}>
                <div>
                  <motion.button
                    onClick={() =>
                      item?.link
                        ? router.push(item?.link)
                        : setselected(item?.id)
                    }
                    onHoverStart={() => setcurrent(item.id)}
                    className={`${styles.main_button} `}
                    animate={isCurrent ? "hover" : undefined}
                    variants={{
                      hover: {
                        backgroundColor: "#2D2D2D",
                        transition: {
                          delay: 0,
                          duration: 0.1,
                        },
                      },
                    }}>
                    <motion.small
                      initial={{
                        scale: 1,
                      }}
                      animate={
                        isCurrent
                          ? {
                              scale: 0.9,

                              transition: {
                                delay: 0,
                                duration: 0.1,
                              },
                            }
                          : undefined
                      }>
                      {item?.title}
                    </motion.small>
                    <motion.img
                      src={"/icons/arrorw_top_right_light.svg"}
                      alt="logo"
                      width={24}
                      height={24}
                      className="w-[clamp(12px,calc(24/1420*100vw),50px)]"
                    />
                  </motion.button>
                </div>

                {isCurrent ? (
                  <div className="hidden md:block absolute w-full mt-[500px]">
                    {item?.component}
                  </div>
                ) : null}
              </React.Fragment>
            );
          })}
        </div>
        {/* END SMALL SCREEN */}

        {/* BIG SCREEN */}
        <div
          className="w-full relative  flex-col md:flex-row 
           mt-[60px] gap-x-[10px] gap-y-[20px] items-center justify-between  
           hidden md:flex 
            ">
          {listItems.map((item?: any, indx?: any) => {
            const isCurrent = current === item.id;
            const isSelected = selected && selected === item?.id ? true : false;

            return (
              <React.Fragment key={item?.id || `${indx}`}>
                <div>
                  <motion.button
                    onClick={() => {
                      if (item?.link) {
                        router.push(item?.link);
                        onClose();
                      }
                    }}
                    onHoverStart={() => setcurrent(item.id)}
                    className={`${styles.main_button} `}
                    animate={isCurrent ? "hover" : undefined}
                    variants={{
                      hover: {
                        backgroundColor: "#2D2D2D",
                        transition: {
                          delay: 0,
                          duration: 0.1,
                        },
                      },
                    }}>
                    <motion.small
                      initial={{
                        scale: 1,
                      }}
                      animate={
                        isCurrent
                          ? {
                              scale: 0.9,

                              transition: {
                                delay: 0,
                                duration: 0.1,
                              },
                            }
                          : undefined
                      }>
                      {item?.title}
                    </motion.small>
                    <motion.img
                      src={"/icons/arrorw_top_right_light.svg"}
                      alt="logo"
                      width={24}
                      height={24}
                      className="w-[clamp(12px,calc(24/1420*100vw),50px)]"
                    />
                  </motion.button>
                </div>

                {isCurrent ? (
                  <div className="hidden md:block absolute w-full mt-[500px] lg:mt-[50%] xl:mt-[40%] ">
                    {item?.component}
                  </div>
                ) : null}
              </React.Fragment>
            );
          })}
        </div>

        {/* END BIG SCREEN */}

        {selected ? (
          listItems?.length ? (
            <div className="block md:hidden  w-full mt-[50px]">
              {listItems.find((item) => item?.id === selected)?.component}
            </div>
          ) : null
        ) : null}
      </div>
    </BorderedNavWrapper>
  );
}

export default NavbarOverlay;
