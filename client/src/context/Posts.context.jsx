import React, { createContext, useContext } from "react";

const PostsContext = createContext();

export const usePostsContext = () => {
  return useContext(PostsContext);
};

export default function PostsProvider({ children }) {
  const [isNewPostModalOpen, setOpen] = React.useState(false);

  const handleClickOpenNewPostModal = () => {
    setOpen(true);
  };

  const handleCloseNewPostModal = () => {
    setOpen(false);
  };

  return (
    <PostsContext.Provider
      value={{
        isNewPostModalOpen,
        handleClickOpenNewPostModal,
        handleCloseNewPostModal,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}
