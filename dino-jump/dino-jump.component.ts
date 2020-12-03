import { Component, OnInit } from '@angular/core';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-dino-jump',
  templateUrl: './dino-jump.component.html',
  styleUrls: ['./dino-jump.component.scss']
})
export class DinoJumpComponent implements OnInit {
  i:number=0;
  finalScore:number=0;
  constructor() { }

  ngOnInit() {
  }
jump()
{
  this.i=this.i+10;
  var character=document.getElementById("character");
    character.classList.add("animate");
  setTimeout(function(){
    character.classList.remove("animate");
  },500);
}
checkDead=setInterval(()=>{
  var character=document.getElementById("character");
  var block=document.getElementById("block");
  var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if(blockLeft<20 && blockLeft>0 && characterTop>=130){
    this.finalScore=this.i;
    this.i=0;
    block.style.animation="none";
    alert("losed");
  }
},10);

}

