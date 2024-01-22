const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');
const textElement = document.querySelector('.curricular h3'); // Selecione o elemento h3

let currentSlide = 0;

// Adicione um array com os textos desejados
let texts = ['FPOO', 'LIMA', 'SOP', 'HARE'];

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
  textElement.textContent = texts[currentSlide]; // Atualiza o texto do elemento h3
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

const containerImages = document.querySelector('.container-images');

containerImages.addEventListener('click', () => {
  const currentImage = document.querySelector('.slider.on');
  switch(currentImage.getAttribute('src')) {
    case 'img/Important Java Features That Makes It Remarkable.jpg':
      window.location.href = 'fpoo.html';
      break;
    case 'img/htmlcss.jpg':
      window.location.href = 'lima.html';
      break;
    case 'img/windows and mac.jpg':
      window.location.href = 'sop.html';
      break;
    case 'img/hardware122.jpg':
      window.location.href = 'hare.html';
      break;
  }
});

