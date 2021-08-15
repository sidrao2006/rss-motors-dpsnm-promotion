const showContainer = document.querySelector(".showContainer")
// const audio = new Audio('../public/car.mpeg');
// audio.playbackRate=1.7;

// setTimeout(() => {
// audio.autoplay = true;
// audio.play();
// }, 1900);



setTimeout(() => {
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj = document.getElementById("value");
  const obj3 = document.getElementById("value1");
  const obj2 = document.getElementById("value2");

  animateValue(obj, 0, 400, 2300);
  animateValue(obj2, 0, 920, 2300);
  animateValue(obj3, 0, 60, 2300);

  showContainer.style.transform="scale(1.5)"
}, 2200);






  // intro animation 
  let intro = document.querySelector('#intro');
  let Rssmotors = document.querySelector("#Rssmotors");
  intro.style.opacity=1;


  setTimeout(() => {
  intro.style.pointerEvents='none';
  intro.style.opacity='0';


setTimeout(() => {
  Rssmotors.style.opacity='1';
  // Rssmotors.style.display='flex';
  Rssmotors.style.transition='1s'
  Rssmotors.style.pointerEvents='all';
}, 1000);
  


  }, 2000);