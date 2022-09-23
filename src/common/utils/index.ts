const handleOnKeyEnter = (e: React.KeyboardEvent, callback: () => void) => {
  if (e.key === "Enter") {
    if (typeof callback === "function") {
      callback();
    }
  }
};

export { handleOnKeyEnter };
