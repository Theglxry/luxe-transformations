import HeaderTitle from "@/components/reuseables/HeaderTitle/HeaderTitle";
import { motion } from "framer-motion";

const data = [
  {
    id: "01",
    title: "INITIAL CONSULTATION",
  },
  {
    id: "05",
    title: "CONSTRUCTION PLANNING",
  },
  {
    id: "02",
    title: "DESIGN DEVELOPMENT",
  },
  {
    id: "06",
    title: "CONSTRUCTION EXECUTION",
  },
  {
    id: "03",
    title: "DESIGN REFINEMENT",
  },
  {
    id: "07",
    title: "QUALITY CONTROL",
  },
  {
    id: "04",
    title: "MATERIAL SELECTION",
  },

  {
    id: "08",
    title: "FINAL INSPECTION",
  },
];
const parentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren", // Start animation before children
      staggerChildren: 0.2, // Stagger child animations by 0.2 seconds
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 20, // Initial position offset for stagger
  },
  visible: {
    opacity: 1,
    y: 0, // Final position after stagger
  },
};

const OurProcess = () => {
  return (
    <div className="md:p-16 p-6 bg-[#0F0F0F] md:flex flex-col  py-[32px] lg:py-[60px]">
      <div>
        <HeaderTitle
          title_top="OUR PROCESS "
          title_color="#ffffff"
          title_font_size="56px"
        />
      </div>
      <motion.div
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        initial={"hidden"}
        whileInView="visible"
        variants={parentVariants}
        className="grid md:grid-cols-2 gap-x-[48px] gap-y-[32px]  lg:mt-[32px] mt-[0px]">
        {data?.map((item, idx) => (
          <motion.div
            viewport={{ once: true }}
            whileHover={{
              backgroundColor: "#282828",
              paddingRight: 20,
              paddingLeft: 20,
            }}
            variants={childVariants}
            className="border-b border-b-[#FFFFFF] py-[16px] flex gap-6"
            key={`${idx}`}>
            <div className="bg-[#2E2E2E] rounded-full md:text-xl text-[#DDAE31] h-12 w-12 flex">
              <div className="m-auto">{item.id}</div>
            </div>
            <div className="my-auto md:text-2xl text-[17px]">{item.title}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurProcess;
