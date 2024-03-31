import { DocumentBuilder } from './DocumentBuilder.js';
import { DOCXBuilder } from './DOCXBuilder.js';
import { PDFBuilder } from './PDFBuilder.js';
import { Document } from './Document.js';

export class DocumentDirector {
  private builder: DocumentBuilder;

  constructor(builder: DocumentBuilder) {
    this.builder = builder;
  }

  createContract(content: string[], filename: string): Document {
    for (let paragraph of content) {
      this.builder.addParagraph(paragraph);
    }
    return this.builder.build(filename);
  }
}
