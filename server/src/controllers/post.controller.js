import Post from "../models/post.model.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getPost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);

    if (!post) return res.send("Not Found");

    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const createPost = async (req, res) => {
  try {
    const response = await Post.create(req.body);

    res.send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const editPost = async (req, res) => {
  try {
    const { id } = req.body;
    const post = await Post.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    res.send(post);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);

    if (!post) return res.send(`Post Not Found!`);

    res.send(`Post ${post.id} Deleted!`);
  } catch (error) {
    res.status(500).send(error);
  }
};
