
/* getElementById */

// Retorna uma string com o conteúdo (incluindo tags HTML) do elemento com id 'div1'
// R: <strong>Teste</strong> innerHTML e innerText
console.log(document.getElementById('div1').innerHTML);

// Retorna uma string com o conteúdo (apenas texto visível) do elemento com id 'div1'
// R: Teste innerHTML e innerText
console.log(document.getElementById('div1').innerText);

// Altera o conteúdo do elemento com id 'div2' para 'Novo conteúdo'
document.getElementById('div2').innerText = 'Novo conteúdo';

/* ########################################### */



/* getElementsByClassName */

const PARAGRAPHS = [
  "first paragraph",
  "second paragraph",
  "third paragraph", 
]

// Retorna uma coleção de elementos <p> que contém a class 'paragraphs'
const PARAGRAPHS_ELEMENTS = document.getElementsByClassName('paragraphs');

// Adiciona um conteúdo de cada elemento <p> da coleção PARAGRAPHS_ELEMENTS
for (let index = 0; index < PARAGRAPHS_ELEMENTS.length; index+=1) {
  PARAGRAPHS_ELEMENTS[index].innerText = PARAGRAPHS_ELEMENTS[index].innerText + " + " + PARAGRAPHS[index];
}

/* ########################################### */



/* getElementsByTagName */

// Retorna uma coleção de elementos <p> que contém a tag 'p' 
const PARAGRAPHS_ELEMENTS_TAG = document.getElementsByTagName('p');
console.log(PARAGRAPHS_ELEMENTS_TAG);

/* ########################################### */