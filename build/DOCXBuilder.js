import { Element } from './Element.js';
import { DOCX } from './DOCX.js';
export class DOCXBuilder {
    constructor() {
        this.document = new DOCX('', 'DOCX', '1.0');
    }
    addPage() {
        let element = new Element();
        element.content = '';
        element.type = 'page';
        this.document.contents.push(element);
        return this;
    }
    addTitle(content) {
        let element = new Element();
        element.content = content;
        element.type = 'title';
        this.document.contents.push(element);
        return this;
    }
    addSubtitle(content) {
        let element = new Element();
        element.content = content;
        element.type = 'subtitle';
        this.document.contents.push(element);
        return this;
    }
    addParagraph(content) {
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
    build(filename) {
        this.document.setName(filename);
        return this.document;
    }
}
