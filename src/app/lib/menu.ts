import { LayoutDashboard, HeartPulse, Wheat, Egg, Fence } from "lucide-react";

export const dashboardMenu = [
  { id: 0, name: "accueil", href: "/dashboard" },
  { id: 1, name: "animaux", href: "/animals" },
  { id: 2, name: "production", href: "/production" },
  { id: 3, name: "soins", href: "/care" },
  { id: 3, name: "santé", href: "/dashboard/health" },
];

export const menuData = {
  user: {
    name: "shadcn",
    email: "eddy@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Menu",

      items: [
        {
          title: "vue d'ensemble",
          url: "/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "mes animaux",
          url: "/dashboard/animals",
          icon: Fence,
          color: "brown",
        },
        {
          title: "production",
          url: "/dashboard/production",
          icon: Egg,
          color: "",
        },
        {
          title: "santé",
          url: "/dashboard/health",
          icon: HeartPulse,
          color: "pink",
        },
        {
          title: "alimentation",
          url: "/dashboard/food",
          icon: Wheat,
          color: "amber",
        },
      ],
    },
  ],
};
