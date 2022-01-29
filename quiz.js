//Selecting elements
const Correct = document.getElementsByClassName('correct')
const Wrong = document.getElementsByClassName('wrong');

//Wrong Answers
for (let i = 0; i < Wrong.length; i++) {
    Wrong[i].addEventListener('click', function(){
        Wrong[i].classList.add('wronganswer')
        
    })
}

//Correct Answers
for (let i = 0; i < Correct.length; i++) {
    Correct[i].addEventListener('click', function(){
       Correct[i].classList.add('correctanswer')
    })
}



