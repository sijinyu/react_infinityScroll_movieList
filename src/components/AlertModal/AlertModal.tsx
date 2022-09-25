import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";

export interface Props {
  open: boolean;
  handleModal: () => void;
  handleSubmit: () => void;
  title: string;
  content: string;
  actionLabel?: string;
}

export default function AlertModal({
  handleModal,
  handleSubmit,
  open,
  title,
  content,
  actionLabel = "확인",
}: Props) {
  const closeModalAndSubmit = () => {
    handleSubmit();
    handleModal();
  };

  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleModal} color="error">
            취소
          </Button>
          <Button onClick={closeModalAndSubmit} color="success" autoFocus>
            {actionLabel}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
