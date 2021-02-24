let inputText = document.querySelector('.js-input-text');
const maxWords = document.querySelector('.text-max-words');
const btnReset = document.querySelector('.js-reset');
// animation
const mouth = document.querySelector('.mouth');
const split = document.querySelector('.split');
const split1 = document.querySelector('.split1');
const eyeslidsRight = document.querySelector('.eyeslids-right');
const eyeslidsLeft = document.querySelector('.eyeslids-left');
const eyesbrown = document.querySelector('.eyesbrown');

const burp = 'burrrp';

function burpifyText(str) {
  return str.replaceAll('e', burp).replaceAll('a', burp);
}

function reset() {
  console.log('hi');
  inputText.value = '';
  document.querySelector('.js-text-translate').innerHTML = '';
  maxWords.innerHTML = '';
  removeAnimation();
}

// function translateText(str, word = burp) {
//   return str.replaceAll('e', word).replaceAll('a', word);
// }

function translateAndRenderText(str) {
  const textTranslate = document.querySelector('.js-text-translate');
  textTranslate.innerHTML = burpifyText(str);
}

function addAnimation() {
  mouth.classList.add('mouth-animation');
  split.classList.add('split-animation');
  split1.classList.add('split1-animation');
  eyeslidsRight.classList.add('eyeslids-animation');
  eyeslidsLeft.classList.add('eyeslids-animation');
  eyesbrown.classList.add('eyesbrown-animation');
}

function removeAnimation() {
  mouth.classList.remove('mouth-animation');
  split.classList.remove('split-animation');
  split1.classList.remove('split1-animation');
  eyeslidsRight.classList.remove('eyeslids-animation');
  eyeslidsLeft.classList.remove('eyeslids-animation');
  eyesbrown.classList.remove('eyesbrown-animation');
}

const writeText = (e) => {
  let textValue = e.target.value;

  translateAndRenderText(textValue);
  addAnimation();

  if (textValue.length >= 19) {
    maxWords.innerHTML = 'No more words, nothing you write matters!';
    removeAnimation();
  }
};

inputText.addEventListener('input', writeText);
btnReset.addEventListener('click', reset);
