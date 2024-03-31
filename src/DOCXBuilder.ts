import { DocumentBuilder } from './DocumentBuilder.js';
import { Element } from './Element.js';
import { DOCX } from './DOCX.js';
import { Document } from './Document.js';

export class DOCXBuilder implements DocumentBuilder {
  private document: DOCX = new DOCX('', 'DOCX', '1.0');

  addPage() {
    let element = new Element();
    element.content = '';
    element.type = 'page';
    this.document.contents.push(element);
    return this;
  }

  addTitle(content: string) {
    let element = new Element();
    element.content = content;
    element.type = 'title';
    this.document.contents.push(element);
    return this;
  }

  addSubtitle(content: string) {
    let element = new Element();
    element.content = content;
    element.type = 'subtitle';
    this.document.contents.push(element);
    return this;
  }

  addParagraph(content: string): DocumentBuilder {
    let element = new Element();
    element.content = content;
    element.type = 'paragraph';
    this.document.contents.push(element);
    return this;
  }

  reset() {
    this.document.contents = [];
    return this;
  }

  build(filename: string): Document {
    this.document.setName(filename);
    return this.document;
  }
}
