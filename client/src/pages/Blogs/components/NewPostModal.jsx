import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { usePostsContext } from "../../../context/Posts.context";

const NewPostModal = () => {
  const { isNewPostModalOpen, handleCloseNewPostModal } = usePostsContext();

  return (
    <div>
      <Dialog open={isNewPostModalOpen} onClose={handleCloseNewPostModal}>
        <DialogTitle>New Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNewPostModal}>Cancel</Button>
          <Button onClick={handleCloseNewPostModal}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NewPostModal;
