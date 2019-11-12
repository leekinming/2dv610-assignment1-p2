var template = document.createElement('template')
template.innerHTML = /* HTML */
`
<style>
td{
    border:6px solid #9b3b00;
    width:30px;
    
}

.removed{
  visibility: hidden;
}
</style>
<table id = 'gameboard'>
</table>
`

class memorygame extends HTMLElement {
  constructor () {
    super()
    this.width = 4
    this.long = 4
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.totalnumberofphoto = 0
    this.photonumber = []
    this.temp = 0
    this.selectedid1 = null
    this.selectedid2 = null
    this.turns = 0
    this.pairdone = 0
  }

  generatenumberphoto () {
    for (let i = 1; i <= (this.long * this.width) / 2; i++) {
      this.photonumber.push(i)
      this.photonumber.push(i)
    }

    this.photonumber.sort(function (a, b) {
      return Math.floor(Math.random() * 3 - 1)
    })
  }

  drawgameboard () {
    const shadowRootlocation = this.shadowRoot.querySelector('#gameboard')
    const long = this.long
    this.photonumber.forEach(function (number, index) {
      const img = document.createElement('img')
      img.setAttribute('src', 'image/0.png')
      img.setAttribute('value', index)
      shadowRootlocation.appendChild(img)

      if ((index + 1) % long === 0) {
        shadowRootlocation.appendChild(document.createElement('br'))
      }
    })
  }

  checktheanswer (select1, select2) {
    if (this.photonumber[select1.getAttribute('value')] === this.photonumber[select2.getAttribute('value')]) {
      select1.classList.add('removed')
      select2.classList.add('removed')
      this.pairdone += 1
    } else {
      select1.setAttribute('src', 'image/0.png')
      select2.setAttribute('src', 'image/0.png')
    }
  }

  connectedCallback () {
    this.generatenumberphoto()
    this.drawgameboard()

    this.shadowRoot.querySelector('#gameboard').addEventListener('click', (event) => {
      if (event.target.getAttribute('src') === 'image/Done.png') { return }
      event.target.setAttribute('src', `image/${this.photonumber[event.target.getAttribute('value')]}.png`)
      if (this.selectedid2) { return }
      if (this.selectedid1 === null) {
        this.selectedid1 = event.target
      } else {
        if (event.target === this.selectedid1) { return }
        this.turns += 1
        this.selectedid2 = event.target
        setTimeout(() => {
          this.checktheanswer(this.selectedid1, this.selectedid2)
          this.selectedid1 = null
          this.selectedid2 = null
          if (this.pairdone === (this.width * this.long) / 2) {
            console.log('you won')
          }
        }, 300)
      }
    })
  }

  static get observedAttributes () {
    return ['long', 'width']
  }

  attributeChangedCallback (name, oldvalue, newvalue) {
    if (name === 'long') {
      this.long = newvalue
    }
    if (name === 'width') {
      this.width = newvalue
    }
  }
}

window.customElements.define('memory-board', memorygame)
