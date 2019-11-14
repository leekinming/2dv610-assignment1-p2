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
}

window.customElements.define('memory-board', memorygame)
