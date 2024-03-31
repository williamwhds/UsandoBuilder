import { Element } from './Element.js';
import { PDF } from './PDF.js';
export class PDFBuilder {
    constructor() {
        this.elements = [];
    }
    addPage() {
        let element = new Element();
        element.content = '';
        element.type = 'page';
        this.elements.push(element);
        return this;
    }
    addTitle(content) {
        let element = new Element();
        element.content = content;
        element.type = 'title';
        this.elements.push(element);
        return this;
    }
    addSubtitle(content) {
        let element = new Element();
        element.content = content;
        element.type = 'subtitle';
        this.elements.push(element);
        return this;
    }
    addParagraph(content) {
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
    build(filename) {
        return new PDF(filename, this.elements, '1.0', false, '');
    }
}
