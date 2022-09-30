const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day";


let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];

let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];

let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  if(customName.value !== '') {
    const name = customName.value;
    storyText = storyText.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + ' stone';
    const temperature =  Math.round((94-32)*5/9) + ' centigrade';
    storyText = storyText.replace("300 pounds", weight);
    storyText = storyText.replace("94 fahrenheit", temperature);
    const pColor = document.querySelector('p');
    pColor.style.backgroundColor =  "#17a4f2";
  }

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  let newStory = storyText;

    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);
    //   console.log(newStory);
  story.textContent = newStory;
  story.style.visibility = 'visible';
  customName.focus();
}

// ============PRINTING squares of numbers TABLE===========
const calculateBtn = document.querySelector('.calculate');
const clearBtn = document.querySelector('.clear');
const squaredNum = document.querySelector('.squared');

function Calculate () {
    for (let i = 0; i <= 20; i++) {
        const square = `${i} x ${i} = ${i * i};`;
        squaredNum.textContent += `${square}\n`;
        squaredNum.style.visibility = 'visible';
    }
    squaredNum.textContent += '\nFinished!';    
}
calculateBtn.addEventListener('click', Calculate);
clearBtn.addEventListener('click', () => {
    squaredNum.textContent = '';
    squaredNum.style.visibility = 'hidden';
});  


// ================LOOPING FUN==============
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

// cats[cats.length] = "Honey Badger";
// cats[cats.length] = "Buffalo";

let myFavoriteCats = 'Famous wildcats you need to know about include but not limited to the following: ';

/*
for (const cat of cats) {
    // console.log(cats[i]);
    myFavoriteCats += `${cat}, `
}
console.log(myFavoriteCats);
*/

// ==============for LOOP===============

for (let i = 0; i < cats.length; i++) {
    // console.log(cats[i]);
    if (i === cats.length - 1) {
        myFavoriteCats += `and ${cats[i]}. FOR loop\n`
    } else {
        myFavoriteCats += `${cats[i]}, `
    }
} 



// ============== WHILE LOOP===============

// let i = 0;
// while (i < cats.length) {
//     if (i === cats.length - 1) {
//         myFavoriteCats += `and ${cats[i]}. WHILE LOOP\n`;
//     } else {
//         myFavoriteCats += `${cats[i]}, `;
//     }

//     i++;
// }


// ==============DO WHILE LOOP===============

// let i = 0;
// do {
//     if (i < cats.length) {
//         myFavoriteCats += `and ${cats[i]}`;
//     } else {
//         myFavoriteCats += `${cats[i]}, `;
//     }
//     i++;
// } while (i < cats.length);

console.log(myFavoriteCats);


// =================SEARCHING CONTACTS====================

const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const para = document.querySelector('.search_result');
const searchInput = document.querySelector('#search');
const searchBtn = document.querySelector('.search_button');

/*
for (const contact of contacts) {
    const splitContact = contact.split(':');
    console.log(splitContact);
}
*/

searchBtn.addEventListener('click', () => {
    const searchName = searchInput.value.toLowerCase();
    searchInput.value = '';
    searchInput.focus();
    para.textContent = '';

    for (const contact of contacts) {
        const splitContact = contact.split(':');
        if (splitContact[0].toLowerCase() === searchName) {
            para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
            break;
        }
    }
    if (para.textContent === '') {
        para.textContent = 'Contact not found.';
    }
    para.style.visibility = 'visible';
    console.log(para.innerText);
});

// ============LOOP. PERFECT SQUARE===========

const outputSqrt = document.querySelector('.sqrt');
const inputNum = document.querySelector('#number');
const generateBtn = document.querySelector('.int-squares');

generateBtn.addEventListener('click', () => {
    const theNum = inputNum.value;
    inputNum.value = '';
    inputNum.focus();
    outputSqrt.textContent = 'Output: ';

    for (let i = 1; i <= theNum; i++) {
        let sqRoot = Math.sqrt(i);
        if (Math.floor(sqRoot) !== sqRoot){
            continue;
        }
        outputSqrt.textContent += `${i} `
        outputSqrt.style.visibility = 'visible';
    }
});

