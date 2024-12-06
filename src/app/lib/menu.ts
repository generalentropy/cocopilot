import {
  LayoutDashboard,
  HeartPulse,
  Wheat,
  Egg,
  Fence,
  Settings2,
} from "lucide-react";

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

export const sidebarSettings = {
  title: "Réglages",
  url: "#",
  icon: Settings2,
  color: "amber",
  items: [
    {
      title: "Charger les données de test",
      url: "#",
    },
    {
      title: "Team",
      url: "#",
    },
    {
      title: "Billing",
      url: "#",
    },
    {
      title: "Limits",
      url: "#",
    },
  ],
};
