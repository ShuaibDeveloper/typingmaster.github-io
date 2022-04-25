const paragraphs = [
    'Looking for Dissertation Service Uk? Get All Results From Across the Web. Privacy Friendly. Unlimited Access. Always Facts. The Best Resources. Results & Answers. Types: Best Results, Explore Now, New Sources, Best in Search.',
    'Dissertation Help Uk - Quick And Easily Found At Shopwebly! Easy Acces. Search and Discover. Quick Results. Find Easily. Compare Products. Many Products. Types: 24/7 Accessible, Big Variaty, Instant Results, Products Online.',
    'Write MY Dissertation UK. Hire PhD Professors To Fulfil Your Do My Dissertation UK Requests. Pay £15.00 £11 Only. 12 Hours Instant Delivery Assurance. Ph.D Writers Available 24/7. Grab the best Dissertation in town! £11. And avail.',
    'Write My Dissertation Service in the UK. All dissertations get through quality dissertation system to make sure that they are up to our standards. When they passed control, they pay delivered to our customers'
];

const msg = document.getElementById('msg');
const typedWords = document.getElementById('typedWords');
const btn = document.getElementById('btn');
let startTime, endTime;

const playGame = () =>{
let randNum = Math.floor(Math.random()*paragraphs.length);
msg.innerText = paragraphs[randNum];
let date = new Date();
startTime = date.getTime();
}

const endGame = () =>{
    let date = new Date();
    endTime = date.getTime(); 
    let totalTime = ((endTime-startTime)/1000);
    // console.log(totalTime);
     const totalWords = typedWords.value;
    //   console.log(totalWords);
      
      const wordCount = wordCounter(totalWords);
      
      let speed = Math.round(((wordCount/totalTime)*60));
    //   console.log(speed);
    let finalMsg = `You typed total at ${speed} words per minute `;
    finalMsg += compareWords(msg.innerText, totalWords);
    msg.innerText = finalMsg;

}

const compareWords = (str1,str2) =>{
let words1 = str1.split(" ");
let words2 = str2.split(" ");
let count = 0; 
words1.forEach(function(items,index){
    if(items == words2[index]){
        count++;
    }
});
let errWords = (words1.length - count);
return(`${count} correct out of ${words1.length} words and the total numbers of error are ${errWords}`);
}

const  wordCounter = (str) => {
    let lenthOfWords = str.split(" ").length;
    // console.log(lenthOfWords)
    return lenthOfWords;
}



typedWords.disabled = true;


btn.addEventListener('click', function(){
  if(this.value == "Start"){
      typedWords.disabled = false;
      playGame();
      this.value = "Done";
      
      
      
  }
  else if(this.value == "Done"){
      typedWords.disabled = true;
      this.value = "Start";
      endGame();
      typedWords.value = "";
  }
})