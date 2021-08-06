// import

function createParagraphContent(text) {
  const paragraph = document.createElement('p');
  paragraph.innerText = text;

  return paragraph;
}

// Add export
function createLoremIpsumParagraphContent() {
  return createParagraphContent(loremIpsum);
}

// Add export default
export default createParagraphContent;
