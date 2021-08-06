// Import loremIpsum

// This already gets exported as the default export for this file.
function createParagraphContent(text) {
  const paragraph = document.createElement('p');
  paragraph.innerText = text;

  return paragraph;
}

// Export this function as a named export
function createLoremIpsumParagraphContent() {
  return createParagraphContent(loremIpsum);
}

export default createParagraphContent;
