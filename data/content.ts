
export interface ContentItem {
    title: string;
    content: string;
  }
  
  export interface Category {
    title: string;
    items: {
      [key: string]: ContentItem;
    };
  }
  
  export const contentData: { [key: string]: Category } = {
    courses: {
      title: "Courses",
      items: {
        "my-courses": {
          title: "My Courses",
          content: "Here you can find all your enrolled courses.",
        },
        "course-catalog": {
          title: "Course Catalog",
          content: "Browse our extensive catalog of machine learning courses.",
        },
        "learning-paths": {
          title: "Learning Paths",
          content: "Discover curated learning paths to achieve your ML goals.",
        },
      },
    },
    projects: {
      title: "Projects",
      items: {
        "my-projects": {
          title: "My Projects",
          content: "View and manage your ongoing ML projects.",
        },
        "project-gallery": {
          title: "Project Gallery",
          content: "Explore a showcase of completed ML projects by our students.",
        },
        "submit-project": {
          title: "Submit Project",
          content: "Submit your latest ML project for review and feedback.",
        },
      },
    },
    resources: {
      title: "Resources",
      items: {
        "documentation": {
          title: "Documentation",
          content: "Access comprehensive documentation for ML concepts and tools.",
        },
        "api-reference": {
          title: "API Reference",
          content: "Detailed API references for popular ML libraries and frameworks.",
        },
        "community-forum": {
          title: "Community Forum",
          content: "Join discussions and get help from our vibrant ML community.",
        },
      },
    },
    settings: {
      title: "Settings",
      items: {
        "account": {
          title: "Account",
          content: "Manage your account settings and preferences.",
        },
        "preferences": {
          title: "Preferences",
          content: "Customize your learning experience on ML4E.",
        },
        "notifications": {
          title: "Notifications",
          content: "Configure your notification settings for courses and updates.",
        },
      },
    },
  };