const handleMouseDown = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

export default handleMouseDown;
