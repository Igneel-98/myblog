var bgEffects = {
  "0":VANTA.BIRDS,
  "1":VANTA.CLOUDS,
  "2":VANTA.CLOUDS2,
  "3":VANTA.FOG,
  "4":VANTA.WAVES,
  "5":VANTA.DOTS,
  "6":VANTA.HALO
}


function run(){
  const effectID = document.value="5";
  bgEffects[effectID]({
    el: document.getElementById("vantajs-bg"),
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00
  });
}
run();