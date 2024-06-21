import { Injectable } from '@angular/core';
import { Message } from '../../Models/messagesModel';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor() { }
  private messages:Message[]=[{
    id: 1,
    body: "Welcome Back, Adventurer!"
  },
  {
    id: 2,
    body: "Feeling Adventurous?"
  },
  {
    id: 3,
    body: "Congratulations!"
  },
  {
    id: 4,
    body: "Level Up!"
  },
  {
    id: 5,
    body: "New Content Alert!"
  }]

  getMessage(){
    
    const randomIndex = Math.floor(Math.random() * 6);

  
   const messageId=this.messages.find(x=>x.id===randomIndex)
   return messageId?.body
  }

  getMessages(){
    return this.messages
  }
}
