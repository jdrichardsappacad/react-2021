// Import the createHeading function
// Import the createParagraphContent function as createParagraph
// Import the createLoremIpsumParagraphContent function

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
