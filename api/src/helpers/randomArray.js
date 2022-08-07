function randomArray(arr) {
    var copyArr = [...arr]
    
    for(let i=0; i<16;i++){
        var index = Math.floor(Math.random() * copyArr.length)
        const result = copyArr.splice(index, 1)
      }
    
    return copyArr
  }

  module.exports = randomArray