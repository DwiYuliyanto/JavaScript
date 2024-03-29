// Deklarasi variabel yang akan diisi dengan kalimat inputan
var str = "Selamat pagi Indonesia";

// Fungsi Hitung vokal
function hitungVokal(str){ 
  console.log("");
  console.log("Kalimat: "+str);
  console.log("");
  var result = {
      a: 0,
      i: 0,
      u: 0,
      e: 0,
      o: 0,
      total:0,
  };
  
  // perulangan untuk menghitung huruf vokal pada kalimat
  for(var i = 0; i<str.length; i++){
      if(str[i].toLowerCase() === "a"){
          result.a++;
          result.total++;
      }else if(str[i].toLowerCase() === "i"){
          result.i++;
          result.total++;
      }else if(str[i].toLowerCase() === "u"){
          result.u++;
          result.total++;
      }else if(str[i].toLowerCase() === "e"){
          result.e++;
          result.total++;
      }else if(str[i].toLowerCase() === "o"){
          result.o++;
          result.total++;
      }
  }

  // Menampilkan huruf vokal inputan
  console.log("Jumlah huruf vokal");
  console.log("------------------");
  console.log("A: "+result.a);
  console.log("I: "+result.i);
  console.log("U: "+result.u);
  console.log("E: "+result.e);
  console.log("O: "+result.o);
  console.log("Total: "+result.total);
 }

var readline = require('readline');

// Mengambil imputan teks
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Menampilkan interface untuk input kalimat
rl.question("Masukan kalimat untuk dihitung huruf vokalnya: ", function(answer){
  hitungVokal(answer);
  rl.close();
})