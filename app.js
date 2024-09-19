// const URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const btn = document.querySelector("button");
const qrtext = document.querySelector("#qrtext");
const qrimg = document.querySelector("#qrimg");

 function qrCodeGenerator(){
 qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value ;
}

btn.addEventListener("click",()=>{
    qrCodeGenerator(); 
    // console.log(qrCodeGenerator);
});