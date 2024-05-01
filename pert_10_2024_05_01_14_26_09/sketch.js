let P = [];
let t = [];
let r; // Materi Kelas: input user
let K;// Tugas: r dak K input user 

let P0 = 20;
let dt = 0.1;
let tMax = 10;

let grafik;

function setup() {
  createCanvas(200, 200);
  
  r = createInput("0.8");
  r.position(0, 100)
  let p = createP('konstanta pertumbuhan')
  p.style('fontsize', '14px');
  p.position(20, 0);
  
  K = createInput("0.5");
  K.position(250,500)
  let k = createP('carrying capacity')
  k.style('fontsize', '14px');
  k.position(50, 20);
   
  solve();
  r.changed(solve);
  K.changed(solve);
  grafik = new Chart (this, config);
}

function draw() {
  background(220);
  grafik.update();
}


function solve(){
  
  P[0] = P0;
  t[0] = 0;
  let rs = float(r.value());
  let Ks = float(r.value());
  let iterNum = int(tMax / dt);
  
  for (i=0; i < iterNum; i++){
    P[i+1] = P[i] + dt * rs * P[i]*( 1 - P[i]/Ks )
    t[i+1] = [i + 1]*dt;
  }
}