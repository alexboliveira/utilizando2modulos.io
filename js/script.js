//importando card cardQrCode
import CardQrCode from "../modules/cardQrCode/cardQrCode.js";
import BlogPreview from "../modules/blogPreview/blogPreview.js";


//utilizando as importações
const cardQrCode= new CardQrCode();
const blobPreview = new BlogPreview();
const blobPreview2 = new BlogPreview();
const cardQrCode2= new CardQrCode();




/*Css do #app*/

/*zerando as margens */
document.querySelector("body").style.margin = "0";
document.querySelector("body").style.padding = "0";


/*Alinhamentos padrões*/
document.getElementById("app").style.width = "calc(100% - 30px)";
document.getElementById("app").style.padding = "15px";
document.getElementById("app").style.minHeight = "100vh";
document.getElementById("app").style.display = "flex";
document.getElementById("app").style.backgroundColor = "yellow";
document.getElementById("app").style.justifyContent = "center";
document.getElementById("app").style.alignItems = "center";
document.getElementById("app").style.flexWrap = "wrap";
document.getElementById("app").style.gap = "10px";
document.getElementById("app").style.fontFamily = "arial";





//dados da tela do usuario
const alturaTela = window.innerHeight;
const larguraTela = window.innerWidth;

//exemplos
//const alturaHeader = document.querySelector("body > header").offsetHeight;
//console.log("altura do header:"+ alturaHeader);


//const alturaSectionInicial =  altura - alturaHeader;
//document.querySelector("body > article > section").style.height = alturaSectionInicial+"px";








