export const explorer = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "public nested folder 1",
          isFolder: true,
          items: [
            {
              name: "index.html",
              isFolder: false,
              items: []
            },
            {
              name: "index.css",
              isFolder: false,
              items: []
            }
          ]
        },
        {
          name: "public nested file 1",
          isFolder: false,
          items: []
        }
      ]
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "app.js",
          isFolder: false,
          items: []
        },
        {
          name: "index.js",
          isFolder: false,
          items: []
        },
        {
          name: "style.css",
          isFolder: false,
          items: []
        }
      ]
    },
    {
      name: "package.json",
      isFolder: false,
      items: []
    }
  ]
};
