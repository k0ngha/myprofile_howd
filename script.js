let intro = document.querySelector('#intro__page');

setTimeout(function(){
  
  let typed = new Typed('.typingTxt', {
    strings: ['브랜드에<i><br>딱! </i>맞는<div class="emoji"><img src="sources/emoji.png" alt=""></div><i><br>디자인</i>이<br>필요할 땐?'],
    typeSpeed: 50, //타이핑속도
    backSpeed: 30, //백스페이스 속도
    smartBackspace: true,
    cursorChar: '', //커서모양
    backDelay: 1000, //백스페이스 문자 지우기 전에 딜레이
  });

}, 1000)

  //  setTimeout(function(){
  //   document.querySelector('.cursor__effect').style.opacity = '1';
  //  },4000)

setTimeout(function(){
document.querySelector('.contents .arrow svg').style.visibility = 'visible';
},3800)

setTimeout(function(){
document.querySelector('.contents .logo.w').style.visibility = 'visible';
},4000)

setTimeout(function(){
  intro.style.scale = '400%';
  intro.style.opacity = '0';
  intro.style.transition = '.5s';
  intro.className += 'finish';
},5000)

setTimeout(function(){
  if($(intro).hasClass('finish') === true) {
    intro.style.display = 'none';
  }
},6000)

let modal = document.querySelector('.modal');
let thumbnail = document.querySelectorAll('.thumbnail');
let popup = document.querySelectorAll('.popup');
let modalPopup = document.querySelector('.modal_popup');

for(i=0; i<thumbnail.length; i++) {
  thumbnail[i].addEventListener('click', function(){
    let num = this.className.replace(/[^0-9]/g,'');
    
    modalPopup.style.background = 'url(sources/img-project-' + num + '.jpg) no-repeat center / 100%'
    modal.style.display = 'block';
  })
  modal.addEventListener('click', function(){
    modal.style.display = 'none';
  })
}

let copyTxt = document.querySelector('#copy__txt').innerText;

const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(copyTxt);
    // console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}