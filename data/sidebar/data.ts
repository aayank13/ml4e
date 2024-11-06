import {
    BookOpen,
    Brain,
    Code2,
    Cpu,
    FileText,
    GraduationCap,
    LayoutDashboard,
    Network,
    PieChart,
    Settings2,
    House
  } from "lucide-react";

const data = {
    user: {
      name: "Aayan",
      email: "aayank1306@gmail.com",
      avatar: "/avatars/alice.jpg",
    },
    courses: [
      {
        name: "ML Fundamentals",
        icon: Brain,
        progress: "In Progress",
      },
      {
        name: "Deep Learning",
        icon: Network,
        progress: "Not Started",
      },
      {
        name: "NLP Basics",
        icon: FileText,
        progress: "Completed",
      },
    ],
    navMain: [
      {
        title: "Home",
        url: "/",
        icon: House,
      },
      {
        title: "Dashboard",
        url: "/learn",
        icon: LayoutDashboard,
      },
      {
        title: "Courses",
        icon: GraduationCap,
        items: [
          {
            title: "My Courses",
            url: "/learn/courses/my-courses",
          },
          {
            title: "Course Catalog",
            url: "/learn/courses/catalog",
          },
          {
            title: "Learning Paths",
            url: "/learn/courses/learning-paths",
          },
        ],
      },
      {
        title: "Projects",
        icon: Code2,
        items: [
          {
            title: "My Projects",
            url: "/learn/projects/my-projects",
          },
          {
            title: "Project Gallery",
            url: "/learn/projects/gallery",
          },
          {
            title: "Submit Project",
            url: "/learn/projects/submit",
          },
        ],
      },
      {
        title: "Resources",
        icon: BookOpen,
        items: [
          {
            title: "Documentation",
            url: "/learn/resources/documentation",
          },
          {
            title: "API Reference",
            url: "/learn/resources/api",
          },
          {
            title: "Community Forum",
            url: "/learn/resources/forum",
          },
        ],
      },
      {
        title: "Settings",
        icon: Settings2,
        items: [
          {
            title: "Account",
            url: "/learn/settings/account",
          },
          {
            title: "Preferences",
            url: "/learn/settings/preferences",
          },
          {
            title: "Notifications",
            url: "/learn/settings/notifications",
          },
        ],
      },
    ],
    learningPaths: [
      {
        name: "Data Science Track",
        url: "/learn/paths/data-science",
        icon: PieChart,
      },
      {
        name: "AI Engineering",
        url: "/learn/paths/ai-engineering",
        icon: Cpu,
      },
      {
        name: "ML Ops",
        url: "/learn/paths/ml-ops",
        icon: Settings2,
      },
    ],
  };

export default data;