import { PDFBuilder } from './PDFBuilder.js';
import { DOCXBuilder } from './DOCXBuilder.js';
let a = new PDFBuilder();
const filea = a
    .addTitle('Título 1')
    .addSubtitle('Subtitulo 1')
    .addParagraph('Parágrafo 1')
    .addSubtitle('Subtitulo 2')
    .addParagraph('Parágrafo 2')
    .build('exemplo');
console.log(filea);
const b = new DOCXBuilder();
const fileb = b
    .addTitle('Título 1')
    .addSubtitle('Subtitulo 1')
    .addParagraph('Parágrafo 1')
    .addSubtitle('Subtitulo 2')
    .addParagraph('Parágrafo 2')
    .build('exemplo');
console.log(fileb);
