// Add import statements

function connectToRoot(node) {
  const rootNode = document.getElementById('root');

  if (node) rootNode.appendChild(node);
}

function main() {
  const heading = createHeading("Hi! I'm a heading");
  const paragraph = createParagraph("Hi! I'm a paragraph");
  const loremIpsum = createLoremIpsumParagraphContent();

  const arrayOfNodes = [heading, paragraph, loremIpsum];
  for (const node of arrayOfNodes) {
    connectToRoot(node);
  }
}

main();
