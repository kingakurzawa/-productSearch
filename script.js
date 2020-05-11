let listItem = document.querySelectorAll('li');
let input = document.querySelector('.search');
let boxWithMaterials = document.querySelector('.product-list');
let subtitle = document.querySelector('h2');


let searchProduct = e => {
  let inputValue = e.target.value.toLowerCase();
  let inputValueFirstLet = inputValue.charAt(0).toLowerCase();

  listItem.forEach(el => {
      let listsContents = el.textContent
      let listsContentsFirstLet = el.textContent.charAt(0).toLowerCase();

      if (listsContentsFirstLet === inputValueFirstLet && listsContents.toLowerCase().indexOf(inputValue) !== -1) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
  })
  subtitle.style.display = 'block'

  if (inputValue.length > 0 ) {
    boxWithMaterials.style.display = 'block'
  } else {
    boxWithMaterials.style.display = 'none'
  }
}

input.addEventListener('keyup', searchProduct)