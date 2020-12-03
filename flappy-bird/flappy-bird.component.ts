import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-flappy-bird',
  templateUrl: './flappy-bird.component.html',
  styleUrls: ['./flappy-bird.component.scss']
})
export class FlappyBirdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // jumping:any;
  // counter:any;
  // block=document.getElementById("block");
  // hole=document.getElementById("hole");


// hole.addEventListener(() => {
//   var hole=document.getElementById("hole");
//     var random = -((Math.random()*300)+150);
//     hole.style.top = random + "px";
//     this.counter++;
// });
// setInterval(function(){
//   var character=document.getElementById("character");
//   var hole=document.getElementById("hole");
//   var block=document.getElementById("block");
//     var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//     if(this.jumping==0){
//         character.style.top = (characterTop+3)+"px";
//     }
//     var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
//     var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
//     var cTop = -(500-characterTop);
//     if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
//         alert("Game over. Score: "+(this.counter-1));
//         character.style.top = 100 + "px";
//         this.counter=0;
//     }
// },10);

  // jump(){
  // var character=document.getElementById("character");
  // this.jumping = 1;
  //   let jumpCount = 0;
  //   var jumpInterval = setInterval(function(){
  //       var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  //       if((characterTop>6)&&(jumpCount<15)){
  //           character.style.top = (characterTop-5)+"px";
  //       }
  //       if(jumpCount>20){
  //           clearInterval(jumpInterval);
  //           this.jumping=0;
  //           jumpCount=0;
  //       }
  //       jumpCount++;
  //   },10);
// }
  
 


}
