// Байрактар. З верхньої частини екрану у випадковій позиції по горизонталі з’являються танки, які їдуть вниз.
// При кліку на танк він вибухає і зникає з екрану.

class Bayraktar {
   constructor({ tanksNum, imagesList, containerSelector }) {
      this.tanksNum = tanksNum
      this.imagesList = imagesList
      this.container = document.querySelector(containerSelector)
      this.tanksList = this.createTankList()
   }

   shoot(currentTank) {
      this.container.removeChild(currentTank)
   }

   createTankList() {
      const tanksList = []

      for (let i = 0; i < this.tanksNum; i++) {
         tanksList.push(new Tank(this.imagesList))
      }

      return tanksList
   }

   render() {
      let index = 0
      const lastTankIndex = this.tanksList.length - 1
      const tanksCreateInterval = setInterval(() => {
         if (index === lastTankIndex) clearInterval(tanksCreateInterval)
         const currentTank = this.tanksList[index].renderTank()
         currentTank.onclick = this.shoot.bind(this, currentTank)
         this.container.append(currentTank)
         this.tanksList[index].ride()
         index++
      }, 1000)
   }
}

class Tank {
   constructor(imagesList) {
      this.imagesList = imagesList
   }

   get randomTank() {
      const randomIndex = Math.floor(Math.random() * this.imagesList.length)
      return this.imagesList[randomIndex]
   }

   getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
   }

   ride() {
      if (this.tank.style.top !== '100%') {
         setTimeout(() => {
            this.tank.style.top = `${parseInt(this.tank.style.top) + 1}%`
            this.ride()
         }, this.getRandomNumber(200, 1000))
      }
   }

   renderTank() {
      this.tank = document.createElement('img')
      this.tank.className = 'tank'
      this.tank.src = this.randomTank
      this.tank.style.top = '0%'
      this.tank.style.left = `${this.getRandomNumber(0, 95)}%`
      return this.tank
   }
}

const imagesList = ['../img/tank1.svg', '../img/tank2.svg', '../img/tank3.svg']

const level1 = { tanksNum: 50, imagesList: imagesList, containerSelector: '.block__container' }

window.onload = function () {
   new Bayraktar(level1).render()
}
