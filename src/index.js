import Pizza from './pizza.jpg';
import { LoremIpsum, loremIpsum  } from 'lorem-ipsum';

function createDiv(){
    const contentDiv = document.createElement('div');
    contentDiv.id = 'content';

    return contentDiv
}

function Headline(){
    const title = document.createElement('h1');
    title.innerHTML = 'My Restaurant';

    return title;
}

function appendToDiv(item) {
    let contentDiv = document.getElementById("content");
    contentDiv.appendChild(item);
}

function createImage(path){
    const image = new Image();
    image.src = path;

    return image;
}

function paragraph(para){
    const paragraph = document.createElement('p');
    paragraph.innerHTML = para;

    return paragraph;
}

document.body.appendChild(createDiv());

appendToDiv(Headline());
appendToDiv(createImage(Pizza));
appendToDiv(paragraph(loremIpsum({count:10})));
