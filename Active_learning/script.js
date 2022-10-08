const btn = document.querySelector('button');

btn.addEventListener('click', () => displayMessage('Your inbox is almost full — delete some mails', 'warning'));
displayMessage('Brian: Hi there, how are you today?','chat');

function displayMessage(msgText, msgType) {
    const body = document.body;

    const panel = document.createElement('div');
    panel.setAttribute('class','msgBox');
    body.appendChild(panel);

    const msg = document.createElement('p');
    msg.textContent = msgText;
    panel.appendChild(msg);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);

    closeBtn.addEventListener('click', () => panel.parentNode.removeChild(panel));
    if (msgType === 'warning') {
        msg.style.backgroundImage = 'url(icons/warning.png)';
        panel.style.backgroundColor = 'red';
      } else if (msgType === 'chat') {
        msg.style.backgroundImage = 'url(icons/chat.png)';
        panel.style.backgroundColor = 'aqua';
      } else {
        msg.style.paddingLeft = '20px';
      }      
}

































/*

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
for(let i = 0; i < people.length; i++) {
    if(people[i] === "Phil" || people[i] === "Lola") {
   refused.textContent += `${people[i]}, `
  } else {
   admitted.textContent += `${people[i]}, `
  }
}



// ===========FUNCTION DECLARATION=============
function logKey(event) {
    console.log(`You pressed "${event.key}".`);
  }
  
  textBox.addEventListener('keydown', logKey);
*/

//  we can also pass an anonymous function directly into our event
// listener
/* ============Passing An ANONYMOUS FUNCTION ============
textBox.addEventListener('keydown', function(event) {
  console.log(`You pressed "${event.key}".`);
});
*/

// ALTERNATIVE FOR PASSING AN ANONYMOUS FUNCTION IS:::
// AN ARROW FUNCTION ============ :::::
/*
textBox.addEventListener('keydown', (event) => {
  console.log(`You pressed "${event.key}".`);
});
*/
// if the code is just a line ||| we can leave out the braces
/*
textBox.addEventListener('keydown', (event) => console.log(`You pressed "${event.key}".`));
*/
// If the function only takes one parameter, 
// you can also omit the brackets around the parameter:
/*
textBox.addEventListener('keydown', event => console.log(`You pressed "${event.key}".`));
*/