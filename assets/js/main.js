// console.log(`This is Body${document.querySelector('body')}`)
// const myList = document.querySelector('ul');
// const myRequest = new Request('products.json');

// fetch(myRequest)
//   .then(response => response.json())
//   .then(data => {
  //     for (const product of data.products) {
    //       let listItem = document.createElement('li');
    //       listItem.appendChild(
      //         document.createElement('strong')
      //       ).textContent = product.Name;
      //       listItem.append(
        //         ` can be found in ${
          //           product.Location
          //         }. Cost: `
          //       );
          //       listItem.appendChild(
            //         document.createElement('strong')
            //       ).textContent = `£${product.Price}`;
            //       myList.appendChild(listItem);
            //     }
            //   })
            //   .catch(console.error);
            
            const model = {
              "name": "Abdallah",
              "Age": "22",
              "From": "Egypt"
            }
            
            let jsonString = JSON.stringify(model.name)
let info = document.querySelector('#info')

// info.textContent = jsonString

let btn = document.getElementById('btn')

btn.addEventListener('click', () => {
  console.log(`This is Body`)
  document.querySelector('.cart').classList.add('cart-heddn')
  info.classList.add('info-show')
  info.textContent = jsonString
  
})

function close() {
  
  let btnClose = document.querySelector('.btn-close');

  btnClose.addEventListener('click', () => {
    document.querySelector('.cart').classList.add('hidden-cart');
    document.querySelector('.data-clint').classList.remove('data-clint-hidden');
    console.log('True')
  })


}
close();

function hidden() {
  
  let btnClose = document.querySelector('.btn-hidden');
  let btnProt = document.querySelector('.icon-windows');

  btnClose.addEventListener('click', () => {
    document.querySelector('.cart').classList.add('hidden-cart');
    document.querySelector('.icon-windows').classList.add('windows-show');
    console.log('True')
  })

  btnProt.addEventListener('click', () => {
    document.querySelector('.cart').classList.remove('hidden-cart');
    document.querySelector('.icon-windows').classList.remove('windows-show');
    console.log('True')
  })


}
hidden();