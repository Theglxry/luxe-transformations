export const processes = [
  {
    id: "1",
    title: "Planning Phase",
    children: [
      { id: "1.1", label: "Onsite consultation meeting" },
      { id: "1.2", label: "Architecture Drawings" },
      { id: "1.3", label: "Planning Information" },
      { id: "1.4", label: "Interior Design Process" },
      { id: "1.5", label: "Project Programmer Preparations" },
    ],
    leftBorder: false,
  },

  {
    id: "2",
    title: "Construction Phase",
    children: [
      { id: "2.1", label: "Assigning a Project Manager" },
      { id: "2.2", label: "Assigning a Site Manager" },
      { id: "2.3", label: "Project manager-client communication " },
      { id: "2.4", label: "Install  Materials & Finishes" },
    ],
    leftBorder: true,
  },

  {
    id: "3",
    title: "Finishing Phase",
    children: [
      { id: "3.1", label: "Video Production" },
      { id: "3.2", label: "Gift Bag which Includes footage of the project" },
    ],
    leftBorder: true,
  },
];
