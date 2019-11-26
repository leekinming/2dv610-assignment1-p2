class player {
    constructor (playername = 'Player') {
      this.name = playername
    }
  
    getplayername () {
      return this.name
    }
  
    setplayername (newname) {
        this.name = newname
    }
  }
  
  module.exports = {player}