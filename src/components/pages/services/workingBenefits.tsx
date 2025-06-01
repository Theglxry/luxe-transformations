import React, { Fragment } from "react";
import HeaderTitle from "@/components/reuseables/HeaderTitle/HeaderTitle";
import { motion } from "framer-motion";

const data = [
  {
    title: "Commercial Renovation Solutions",
    description:
      "Luxe Transformation specializes in renovating hotels, restaurants, retail spaces, offices, and more. We understand the importance of creating a memorable ambiance that attracts customers and enhances productivity.",
  },

  {
    title: "Sustainable Construction Practices Comfort",
    description:
      "At Luxe Transformation, we prioritize sustainability in every aspect of our construction process.",
  },
  {
    title: "Tailored Design Consultations",
    description:
      "We offer personalized consultations to ensure that every aspect of your renovation project aligns with your taste and lifestyle.",
  },
  {
    title: "Quality Craftsmanship Guarantee",
    description:
      "Luxe Transformation is committed to delivering exceptional craftsmanship in every renovation project. Our skilled artisans and tradespeople bring years of experience and expertise to the table.",
  },
  {
    title: "Project Management Excellence",
    description:
      "With clear communication and attention to deadlines, we strive to exceed your expectations at every step.",
  },
  {
    title: "Improved Safety",
    description:
      "Upgrades to electrical, plumbing, and structural systems can improve the safety and security of your home.",
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

function WorkingBenefits() {
  return (
    <div className="flex flex-col gap-[0px] lg:flex-row  lg:gap-[70px] xl:gap-[121px] py-[32px] lg:py-[60px]">
      <div className="flex-1 max-w-[auto] lg:max-w-[411px] 2xl:max-w-[600px]">
        <HeaderTitle
          title_top="BENEFITS "
          title_bottom="WORKING WITH US"
          title_color="#100E10"
          title_font_size="56px"
        />
      </div>

      <motion.div
        transition={{ delay: 0.1 }}
        initial={"hidden"}
        viewport={{ once: true }}
        whileInView="visible"
        variants={parentVariants}
        className="flex flex-1 flex-col  md:gap-8 gap-5 text-[#100E10] font-archivo md:mb-14 mb-5">
        {data?.map((item, index) => (
          <Fragment key={`${index}`}>
            <motion.div
              className="flex flex-col gap-4 "
              variants={childVariants}>
              <div className="text-[28px] ">{item.title}</div>
              <div>{item.description}</div>
            </motion.div>
            {index + 1 !== data?.length && (
              <div className="h-[1px] w-full bg-[#E5E5E5]" />
            )}
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export default WorkingBenefits;
