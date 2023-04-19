// Відобразити падаючий сніг. Сніжинка з’являється у верхній частині екрану і з випадковою швидкістю рухається вниз.
// Як тільки сніжинка досягає нижньої частини екрану вона знову повинна з’явитись у верхній частині екрану.

class Snowflake {
   constructor(imgSrc, minSpeed = 200, maxSpeed = 400) {
      this.imgSrc = imgSrc
      this.minSpeed = minSpeed
      this.maxSpeed = maxSpeed
   }

   getRandomNumber(minVal, maxVal) {
      return Math.floor(Math.random() * (maxVal - minVal + 1) + minVal)
   }

   fall() {
      setTimeout(() => {
         this.img.style.top = `${parseInt(this.img.style.top) + 1}%`
         this.fall()
         if (this.img.style.top === '100%') this.img.style.top = '0%'
      }, this.getRandomNumber(this.minSpeed, this.maxSpeed))
   }

   render(containerSelector) {
      this.img = document.createElement('img')
      this.img.className = 'snowflake'
      this.img.src = this.imgSrc
      this.img.style.top = '0%'
      this.img.style.left = `${this.getRandomNumber(0, 100)}%`

      const targetContainer = document.querySelector(containerSelector)
      targetContainer.append(this.img)

      this.fall()
   }
}

window.onload = function () {
   for (let i = 0; i < 15; i++) new Snowflake('../img/snowflake.svg').render('.block__container')
}
