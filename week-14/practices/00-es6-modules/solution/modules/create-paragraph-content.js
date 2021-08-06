import { loremIpsum } from './lorem-ipsum.js';

function createParagraphContent(text) {
  const paragraph = document.createElement('p');
  paragraph.innerText = text;

  return paragraph;
}

export function createLoremIpsumParagraphContent() {
  return createParagraphContent(loremIpsum);
}

// Add export statements somewhere
export default createParagraphContent;
