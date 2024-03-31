import { Document } from './Document.js';
import { Element } from './Element.js';
export class PDF implements Document {
  name: string;
  contents: Element[];
  type: string;
  version: string;
  isProtected: boolean;
  password: string;

  constructor(
    name: string,
    contents: Element[],
    version: string,
    isProtected: boolean,
    password: string
  ) {
    this.type = 'PDF';
    this.name = name;
    this.contents = contents;
    this.version = version;
    this.isProtected = isProtected;
    this.password = password;
  }
}
