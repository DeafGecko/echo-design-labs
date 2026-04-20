export interface Chapter {
      slug: string;
      title: string;
      description: string;
      order: number;
}

export const chapters: Chapter[] = [
      {
            slug: 'builders-toolkit',
            order: 1,
            title: "The Builder's Toolkit",
            description: "Understand variables, functions, and the building blocks every developer needs to start.",
      },
      {
            slug: 'jsx-and-components',
            order: 2,
            title: "JSX and Your First Component",
            description: "Learn how React turns JavaScript into UI, and why components are the heart of everything.",
      },
      {
            slug: 'props-and-reuse',
            order: 3,
            title: "Props: Making Components Reusable",
            description: "Pass data into components like function arguments. Build once, use everywhere.",
      },
      {
            slug: 'state-and-events',
            order: 4,
            title: "State and Events",
            description: "Make your UI react to user actions. Buttons that do things, forms that remember what you typed.",
      },
      {
            slug: 'project-1',
            order: 5,
            title: "Project 1: Build a To-Do App",
            description: "Put it all together. Build a real app that lets you add, complete, and delete tasks.",
      }
];