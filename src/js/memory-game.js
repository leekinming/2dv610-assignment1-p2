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

}

window.customElements.define('memory-board', memorygame)
