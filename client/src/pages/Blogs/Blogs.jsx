import React, { useState, useEffect } from "react";
import { getPosts } from "../../services/blog.services";
import Card from "../../components/CustomCard";
import { Box, Button } from "@mui/material";
import NewPostModal from "./components/NewPostModal";
import { usePostsContext } from "../../context/Posts.context";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts()
      .then((res) => setPosts(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {}, [posts]);

  const { handleClickOpenNewPostModal } = usePostsContext();

  return (
    <div>
      <Box></Box>
      <Box sx={{ textAlign: "right" }} component={"div"}>
        <Button onClick={handleClickOpenNewPostModal} variant="contained">
          New
        </Button>
        <NewPostModal />
      </Box>

      <Box sx={{ display: "flex", gap: 3 }}>
        {posts &&
          posts.map((post, indexId) => {
            return <Card key={indexId} post={post} />;
          })}
      </Box>
    </div>
  );
};

export default Blogs;
