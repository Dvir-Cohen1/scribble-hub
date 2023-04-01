import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../services/blog.services";
import { Box } from "@mui/material";
const Post = () => {
  const [post, setPost] = useState({});

  const { id } = useParams();

  const fetchData = async (id) => {
    const response = await getPost(id);
    setPost(response);
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <div>
      <Box component={"h3"}>{post.title}</Box>
      <Box component={"p"}>{post.content}</Box>
      <Box component={"p"}>{post.tags?.map((i)=> i)}</Box>
      <Box component={"p"}>{post.createdAt}</Box>
      <Box component={"div"}>
        <img width={300} src={post.image} />
      </Box>
    </div>
  );
};

export default Post;
