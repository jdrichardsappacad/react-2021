export default function createHeading(text, type=1) {
  const headingType = `h${type}`;
  const heading = document.createElement(headingType);
  heading.innerText = text;

  return heading;
}

// Add export statements somwhere
