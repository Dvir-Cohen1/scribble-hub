import React from "react";
const Home = React.lazy(() => import("../pages/Home"));
const Blogs = React.lazy(() => import("../pages/Blogs/Blogs"));
const Post = React.lazy(() => import("../pages/Blogs/Post"));

const appRoutes = [
  { linkLable: "Home", path: "/", component: Home, isNavBarLink: true },

  // Blogs
  { linkLable: "Posts", path: "/posts", component: Blogs, isNavBarLink: true },
  { linkLable: "Post", path: "/blogs/:id", component: Post },
];

export default appRoutes;
