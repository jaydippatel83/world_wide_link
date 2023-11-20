import Iconify from "./Iconify";

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;


const sidebarConfig = [
  {
    title: "POR",
    path: "/dashboard/landing",
    icon: getIcon("mdi:police-badge-outline"),
  },
  {
    title: "Stacks",
    path: "/dashboard/stack",
    icon: getIcon("material-symbols:collections-bookmark-outline"),
  },
];

export default sidebarConfig;
