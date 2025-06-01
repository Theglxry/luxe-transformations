import { pages_data } from "@/data/pages_data";

export const quickLinks = [
  {
    hideInSmallScreen: false,
    title: "Quick Link",
    children: [
      {
        id: "11",
        title: "Home",
        link: "/",
      },
      {
        title: "Testimonials",
        link: "/testimonial",
      },
      {
        title: "Portfolio",
        link: "/portfolio",
      },
      {
        title: "Gallery",
        link: "/gallery",
      },
      {
        title: "Contact Us",
        link: "/contact",
      },
      {
        title: "Privacy Policy",
        link: "/cookie-policy",
      },
    ],
  },

  {
    hideInSmallScreen: true,
    title: "Commercial Renovation",
    children: [
      ...pages_data
        .filter((item) => item.type === "Commercial")
        .map((item, index) => {
          return {
            id: `0${index + 1}`,
            title: item?.label,
            link: item?.link,
          };
        }),
    ],
  },

  {
    hideInSmallScreen: true,
    title: "Residential Renovation",
    children: [
      ...pages_data
        .filter((item) => item.type === "Residential")
        .map((item, index) => {
          return {
            id: `0${index + 1}`,
            title: item?.label,
            link: item?.link,
          };
        }),
    ],
  },
];
