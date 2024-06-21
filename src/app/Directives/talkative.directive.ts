import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';
import { MessageServiceService } from '../Services/message-service.service';

@Directive({
  selector: '[appTalkative]',
  standalone: true
})
export class TalkativeDirective implements OnInit{
  constructor(private ms:MessageServiceService) { }


  @HostBinding('textContent') message=''
  ngOnInit(): void {
    this.message='Message'
  
  }

 
  @HostListener('click') messageButton(){
  //  
  let message= this.ms.getMessage()
  if(message){
    this.message=message
  }
  //  this.message='clicked'
  }

}
