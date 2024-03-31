import { Document } from './Document.js';
import { Element } from './Element.js';
export class DOCX implements Document {
  name: string;
  contents: Element[];
  version: string;
  type: string;

  constructor(name: string, type: string, version: string) {
    this.type = 'DOCX';
    this.name = name;
    this.type = type;
    this.version = version;
    this.contents = [];
  }

  setName(name: string) {
    this.name = name;
  }

  addPage() {
    let element = new Element();
    element.content = '';
    element.type = 'page';
  }

  addTitle(content: string) {
    let element = new Element();
    element.content = content;
    element.type = 'title';
    this.contents.push(element);
  }

  addSubtitle(content: string) {
    let element = new Element();
    element.content = content;
    element.type = 'subtitle';
    this.contents.push(element);
  }

  addParagraph(content: string) {
    let element = new Element();
    element.content = content;
    element.type = 'paragraph';
    this.contents.push(element);
  }
}
