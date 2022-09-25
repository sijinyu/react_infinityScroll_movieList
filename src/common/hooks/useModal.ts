import React, { useState } from "react";

const useModal = () => {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  return {
    open,
    handleModal,
  };
};

export default useModal;
