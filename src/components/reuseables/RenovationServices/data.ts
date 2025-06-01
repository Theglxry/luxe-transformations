import { pages_data } from "@/data/pages_data";

export const tabs = [
  {
    id: "1",
    title: "Commercial",
    items: [
      ...pages_data
        .filter((item) => item.type === "Commercial")
        .map((item, index) => {
          return {
            id: `0${index + 1}`,
            label: item?.label,
            link: item?.link,
          };
        }),
    ],
  },

  {
    id: "2",
    title: "Residential",
    items: [
      ...pages_data
        .filter((item) => item.type === "Residential")
        .map((item, index) => {
          return {
            id: `0${index + 1}`,
            label: item?.label,
            link: item?.link,
          };
        }),
    ],
  },
];
