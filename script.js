let hrs = document.querySelector('#hrs');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');



function update(){
  let time = new Date();
  h = time.getHours();
  m = time.getMinutes();
  s = time.getSeconds();

  hrs.innerHTML=h<10?"0"+h : h;
  min.innerHTML=m<10?"0"+m : m;
  sec.innerHTML=s<10?"0"+s : s;

}

setInterval(update,1000);
