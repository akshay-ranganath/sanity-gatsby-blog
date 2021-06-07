export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60be680fe402b00ce6c2f021",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-dzx9c9n6",
                  apiId: "ea4a70f5-e3bf-4d07-b664-3fdf982dae2b",
                },
                {
                  buildHookId: "60be6810debb920c93d28ea4",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-yx2durzn",
                  apiId: "8b27001d-0e7e-4403-8f5a-5083ad8b50ae",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/akshay-ranganath/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-yx2durzn.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
