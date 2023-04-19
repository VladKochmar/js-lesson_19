// Відображаємо картки товарів, які користувач може вибирати. Вибраний товар має зелену рамку

class ProductCard {
   constructor(initData) {
      Object.assign(this, initData)
   }

   selectProduct() {
      this.classList.toggle('selected')
   }

   render(containerSelector) {
      const cardContainer = document.createElement('div')
      cardContainer.className = 'product'
      cardContainer.onclick = this.selectProduct

      const label = document.createElement('label')
      label.innerText = this.label
      label.className = 'product__label'
      if (this.label === 'Акція') label.classList.add('product__label_discount')
      cardContainer.append(label)

      const imgContainer = document.createElement('a')
      imgContainer.className = 'product__image'
      imgContainer.href = this.link
      cardContainer.append(imgContainer)

      const img = document.createElement('img')
      img.src = this.imgSrc
      imgContainer.append(img)

      const productBody = document.createElement('div')
      productBody.className = 'product__body'
      cardContainer.append(productBody)

      const title = document.createElement('a')
      title.className = 'product__title'
      title.href = this.link
      title.innerText = this.title
      productBody.append(title)

      const price = document.createElement('div')
      price.innerText = this.price
      price.className = 'product__price'
      productBody.append(price)

      const targetContainer = document.querySelector(containerSelector)
      targetContainer.append(cardContainer)
   }
}

const productsList = [
   {
      label: 'Топ продажів',
      title: 'Ноутбук Acer Aspire 7 A715-42G-R3EZ',
      link: 'https://rozetka.com.ua/ua/acer_nh_qbfeu_00c/p288376303/',
      imgSrc: '../img/image01.png',
      price: '29 999₴',
   },
   {
      label: 'Акція',
      title: 'Ноутбук ASUS TUF Gaming F15 FX506LHB-HN323',
      link: 'https://rozetka.com.ua/ua/asus-90nr03u2-m008e0/p353689830/',
      imgSrc: '../img/image02.png',
      price: '16 999₴',
   },
   {
      label: 'Топ продажів',
      title: 'Ноутбук Lenovo IdeaPad L3 15ITL6',
      link: 'https://rozetka.com.ua/ua/lenovo-82hl00hcra/p352335126/',
      imgSrc: '../img/image03.png',
      price: '29 999₴',
   },
   {
      label: 'Топ продажів',
      title: 'Ноутбук Acer Aspire 7 A715-42G-R3EZ',
      link: 'https://rozetka.com.ua/ua/acer_nh_qbfeu_00c/p288376303/',
      imgSrc: '../img/image01.png',
      price: '29 999₴',
   },
   {
      label: 'Акція',
      title: 'Ноутбук ASUS TUF Gaming F15 FX506LHB-HN323',
      link: 'https://rozetka.com.ua/ua/asus-90nr03u2-m008e0/p353689830/',
      imgSrc: '../img/image02.png',
      price: '16 999₴',
   },
   {
      label: 'Топ продажів',
      title: 'Ноутбук Lenovo IdeaPad L3 15ITL6',
      link: 'https://rozetka.com.ua/ua/lenovo-82hl00hcra/p352335126/',
      imgSrc: '../img/image03.png',
      price: '29 999₴',
   },
]

window.onload = function () {
   for (const product of productsList) {
      new ProductCard(product).render('.block__products')
   }
}
