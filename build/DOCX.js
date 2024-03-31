import { Element } from './Element.js';
export class DOCX {
    constructor(name, type, version) {
        this.type = 'DOCX';
        this.name = name;
        this.type = type;
        this.version = version;
        this.contents = [];
    }
    setName(name) {
        this.name = name;
    }
    addPage() {
        let element = new Element();
        element.content = '';
        element.type = 'page';
    }
    addTitle(content) {
        let element = new Element();
        element.content = content;
        element.type = 'title';
        this.contents.push(element);
    }
    addSubtitle(content) {
        let element = new Element();
        element.content = content;
        element.type = 'subtitle';
        this.contents.push(element);
    }
    addParagraph(content) {
        let element = new Element();
        element.content = content;
        element.type = 'paragraph';
        this.contents.push(element);
    }
}
