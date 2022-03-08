function wordPlay(){
    let words = prompt("Enter A Sentence").split(',')
    let newSentence = words.filter(function(word){
        return word.length > 3
    })
    console.log(newSentence)
  }
  wordPlay()