export default () => {
  const btnShow = document.getElementById('js-show-answer');
  const btnPopup = document.getElementById('js-hide-popup');
  const answer = document.getElementById('js-answer');
  const fails = document.querySelectorAll('.js-fail-answer');
  const success = document.querySelectorAll('.js-correct-answer');
  const endIKnow = document.getElementById('js-end-iknow');
  const popup = document.querySelector('.popup');

  if (btnShow != null) {
    btnShow.addEventListener('click', () => {
      answer.classList.remove('mod-hidden');
      answer.classList.add('mod-visible');
      btnShow.classList.add('mod-hidden')
    });
  }

  if (fails!=null){
    fails.forEach( (el)=> {
      el.classList.add('m-wrong')
    })
  }

  if (success!=null){
    success.forEach( (el)=> {
      el.classList.add('m-correct')
    })
  }

  if(endIKnow!=null){
    endIKnow.addEventListener('click', ()=>{
      fails.forEach( (el)=> {
        el.classList.remove('m-wrong');
        el.classList.remove('js-fail-answer');
      });
      success.forEach( (el)=> {
        el.classList.remove('m-correct');
        el.classList.remove('js-correct-answer');
      })
    })
  }

  if (btnPopup != null) {
    btnPopup.addEventListener('click', () => {
      popup.classList.remove('mod-visible');
      popup.classList.add('mod-hidden');
      let date = new Date();
      sessionStorage.setItem('start', date.getHours().toString());
      document.body.classList.remove('m-overflow');
    });
  }
}