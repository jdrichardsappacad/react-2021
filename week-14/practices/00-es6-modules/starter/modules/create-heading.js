// Export this function as the default export of this file
function createHeading(text, type=1) {
  const headingType = `h${type}`;
  const heading = document.createElement(headingType);
  heading.innerText = text;

  return heading;
}
