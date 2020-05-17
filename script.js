const listItem = document.querySelectorAll('li');
const input = document.querySelector('.search');
const boxWithMaterials = document.querySelector('.product-list');
const subtitle = document.querySelector('h2');


const searchProduct = e => {
  const inputValue = e.target.value.toLowerCase();
  const inputValueFirstLet = inputValue.charAt(0).toLowerCase();

  listItem.forEach(el => {
      const listsContents = el.textContent
      const listsContentsFirstLet = el.textContent.charAt(0).toLowerCase();

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