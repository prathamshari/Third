import { Component,OnInit, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{
  mediaSub:Subscription;
  constructor(public mediaObserver:MediaObserver)
  {

  }
  ngOnInit(): void {
    this.mediaSub=this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      console.log(result.mqAlias);
      
    })
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }
  opened:boolean=false;
}
