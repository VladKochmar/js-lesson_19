// Сяючі зорі. Вказана кількість зірочок повинна з’являтися у випадковій частині екрану.
// Кожна зірка з певним кроком і інтервалом збільшується від мінімального до максимального розміру.
// Як тільки досягнути максимального розміру зірочка повинна з’являтися у іншій випадковій позиції.

class Stars {
   constructor(starsMaxNum = 1, minSize = 24, maxSize = 48, minDuration = 200, maxDuration = 500) {
      this.starsMaxNum = starsMaxNum
      this.minSize = minSize
      this.maxSize = maxSize
      this.minDuration = minDuration
      this.maxDuration = maxDuration
   }

   getRandomNum(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
   }

   increaseStar(currentStar) {
      let currentSize = this.minSize
      setInterval(() => {
         if (currentSize < this.maxSize) {
            currentSize += 1
         } else {
            currentSize = this.minSize
            currentStar.style.top = `${this.getRandomNum(0, 100)}%`
            currentStar.style.left = `${this.getRandomNum(0, 100)}%`
         }
         currentStar.style.width = `${currentSize}px`
         currentStar.style.height = `${currentSize}px`
      }, this.getRandomNum(this.minDuration, this.maxDuration))
   }

   createStar(containerSelector) {
      const star = document.createElement('div')
      star.style.position = 'fixed'
      star.style.top = `${this.getRandomNum(0, 100)}%`
      star.style.left = `${this.getRandomNum(0, 100)}%`
      star.style.width = `${this.minSize}px`
      star.style.height = `${this.minSize}px`
      star.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="yellow" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>`
      const targetContainer = document.querySelector(containerSelector)
      targetContainer.append(star)
      this.increaseStar(star)
   }

   render() {
      let counter = 0

      const createStars = setInterval(() => {
         this.createStar('.block__container')
         counter++
         if (this.starsMaxNum === counter) clearInterval(createStars)
      }, this.getRandomNum(this.minDuration, this.maxDuration))
   }
}

window.onload = function () {
   new Stars(30, 24, 48).render()
}
