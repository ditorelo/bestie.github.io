import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "_posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
            required: true,
          },     
          {
            type: "string",
            name: "tags",
            label: "Tags",
            required: true,
          },          
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },               
          {
            type: "string",
            name: "categories",
            label: "Categories",
            required: true,
            list: true
          },   
          {
            type: "image",
            name: "post_image",
            label: "Image",
            required: true,
          },                  
          {
            type: "image",
            name: "gallery",
            label: "Image Gallery",
            list: true            
          },    
          {
            type: "boolean",
            name: "trending",
            label: "Trending?",     
          },                                           
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
