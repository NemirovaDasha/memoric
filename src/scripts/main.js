import parallaxInit   from './parts/parallax';
import players        from './parts/players';
import buttons        from './parts/buttons';
import timer          from './parts/timer';
import sprinters      from './parts/sprinters';

const initScripts = () => {
  parallaxInit();
  players();
  buttons();
  timer();
  sprinters();
};

document.addEventListener('DOMContentLoaded', initScripts);