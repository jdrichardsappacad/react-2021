import createHeading from './modules/create-heading.js';
// import createParagraph, { createLoremIpsumParagraphContent } from './modules/create-paragraph-content.js';
// Add import statements

function connectToRoot(node) {
  const rootNode = document.getElementById('root');

  if (node) rootNode.appendChild(node);
}

function main() {
  const heading = createHeading("Hi! I'm a heading");
  connectToRoot(heading);
  const paragraph = createParagraph("Hi! I'm a paragraph");
  connectToRoot(paragraph);
  const loremIpsum = createLoremIpsumParagraphContent();
  connectToRoot(loremIpsum);
}

main();
