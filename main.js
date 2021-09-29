var SpeechRecognition=window.webkitSpeechRecognition;
var Niha_listening_skills=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML;
    Niha_listening_skills.start();
}
Niha_listening_skills.onresult= function(event){
    console.log(event)
    var content=event.results[0][0].transcript;
    console.log(content)
    document.getElementById("textbox").innerHTML=content
    if(content=="take my selfie")
{speak()
console.log("taking selfie");
}
} 
function speak(){
    var synth= window.speechSynthesis;
    speak_data= "Taking Your Selfie In 5 Seconds"
var utter_this= new SpeechSynthesisUtterance(speak_data)
synth.speak(utter_this)
Webcam.attach(camera);
setTimeout(function()  {
take_scanshot();
save();
}, 5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:100
});
camera=document.getElementById("camera");
function take_scanshot()
{
   Webcam.snap (function(data_uri){
       document.getElementById("result").innerHTML='<img id="selfie_img" src="'+data_uri+'">';
       }); 
}
function save(){
    var link=document.getElementById("link");
    image= document.getElementById("selfie_img").src;
    link.href=image;
    link.click()
}