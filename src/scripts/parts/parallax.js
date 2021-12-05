import Parallax from 'parallax-js';

export default () => {
  let clouds = document.getElementById('clouds');
  if (clouds!=null){
    let parallaxInstance = new Parallax(clouds);
  }
}