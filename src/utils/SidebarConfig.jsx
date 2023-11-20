import Iconify from "./Iconify";

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;


const sidebarConfig = [
  {
    title: "Swap",
    path: "/dashboard/swap",
    icon: getIcon("entypo:swap"),
  },
  {
    title: "Stacks",
    path: "/dashboard/stack",
    icon: getIcon("bi:window-stack"),
  },
  {
    title: "Assets",
    path: "/dashboard/assets",
    icon: getIcon("fluent:web-asset-24-regular"),
  },
  {
    title: "Pool",
    path: "/dashboard/pool",
    icon: getIcon("fluent-mdl2:s-q-l-analytics-pool"),
  },
  {
    title: "Bridge",
    path: "/dashboard/bridge",
    icon: getIcon("arcticons:flowfreebridges"),
  },
  {
    title: "Proof Of Reserve",
    path: "/dashboard/landing",
    icon: getIcon("mdi:police-badge-outline"),
  },

];

export default sidebarConfig;
