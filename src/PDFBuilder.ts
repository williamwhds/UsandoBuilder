import { DocumentBuilder } from './DocumentBuilder.js';
import { Element } from './Element.js';
import { PDF } from './PDF.js';
import { Document } from './Document.js';

export class PDFBuilder implements DocumentBuilder {
  private elements: Element[] = [];

  addPage() {
    let element = new Element();
    element.content = '';
    element.type = 'page';
    this.elements.push(element);
    return this;
  }

  addTitle(content: string) {
    let element = new Element();
    element.content = content;
    element.type = 'title';
    this.elements.push(element);
    return this;
  }

  addSubtitle(content: string) {
    let element = new Element();
    element.content = content;
    element.type = 'subtitle';
    this.elements.push(element);
    return this;
  }

  addParagraph(content: string): DocumentBuilder {
    let element = new Element();
    element.content = content;
    element.type = 'paragraph';
    this.elements.push(element);
    return this;
  }

  reset() {
    this.elements = [];
    return this;
  }

  build(filename: string): Document {
    return new PDF(filename, this.elements, '1.0', false, '');
  }
}
