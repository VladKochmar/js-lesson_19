// Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні.
// При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний.
// При натисканні на зелену стрілку спортсмен переміщається у список для змагань.
// При натисканні на червону стрілку спортсмен переміщається у загальний список.

class SportManager {
   constructor(sportmansList, containerSelector) {
      this.sportmansList = sportmansList
      this.participantsList = []
      this.containerSelector = containerSelector
   }

   createList(renderedList, listId) {
      let list
      if (renderedList.length > 0) {
         list = document.createElement('ul')
         list.className = 'list'
         list.setAttribute('id', listId)

         for (const el of renderedList) {
            const li = document.createElement('li')
            li.className = 'list__item'
            li.onclick = this.onClick.bind(this, el)
            li.innerHTML = el
            list.append(li)
            const arrow = `<svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /></svg>`
            li.innerHTML += arrow
         }
      } else {
         list = ''
      }

      return list
   }

   onClick(currentElem) {
      if (this.sportmansList.includes(currentElem)) {
         this.participantsList.push(currentElem)
         this.sportmansList = this.sportmansList.filter(elem => elem !== currentElem)
      } else {
         this.sportmansList.push(currentElem)
         this.participantsList = this.participantsList.filter(elem => elem !== currentElem)
      }
      // this.render()
      this.div.innerHTML = ''
      this.generalList = this.createList(this.sportmansList, 'general-list')
      this.selectedAthletesList = this.createList(this.participantsList, 'participants-list')
      this.div.append(this.generalList)
      this.div.append(this.selectedAthletesList)
   }

   render() {
      const targetContainer = document.querySelector(this.containerSelector)
      this.div = document.createElement('div')

      this.generalList = this.createList(this.sportmansList, 'general-list')
      this.selectedAthletesList = this.createList(this.participantsList, 'participants-list')

      this.div.append(this.generalList)
      this.div.append(this.selectedAthletesList)

      targetContainer.append(this.div)
   }
}

const athletesList = ['Олександр Зінченко', 'Михайло Мудрик', "Дар'я Білодід", 'Ольга Харлан', 'Ярослава Магучіх', 'Артем Беседіньо']
const athletesList2 = ['Іван Петряк', 'Тарас Степаненко', 'Руслан Малиновський', 'Віктор Циганков']

window.onload = function () {
   new SportManager(athletesList, '.block__columns').render()
   new SportManager(athletesList2, '.block__columns').render()
}
