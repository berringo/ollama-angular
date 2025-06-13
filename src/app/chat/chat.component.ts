import { Component } from '@angular/core';
import {NgIf, NgFor, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { LlamaV2Service } from '../_services/llama-v2.service';
import { Message, Ollama } from 'ollama';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import { ChatService } from '../_services/chat.service';
import { map } from 'rxjs';
import { SecurityContext } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown'


@Component({
  preserveWhitespaces: true,
  selector: 'app-chat',
  imports: [ NgIf, NgFor,FormsModule,MarkdownModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
  providers: [Ollama]
})
export class ChatComponent {
  chatInput = '';
  chatResponse='';
  messages: Response[]=[];
  heroes = HEROES;
  selectedHero?: Hero;
  risposta: string []=[];
  risposta1: string='';
  
  constructor(private ollama: Ollama,private chatService: ChatService) { }
  provideMarkdown(){}

  async inviaMessaggio2() {
    const response = await this.ollama.chat({
      model: 'llama3.2',
      messages: [{ role: 'user', content: this.chatInput }], 
    })
    console.log(response.message.content)
    this.chatResponse=response.message.content;
  }

  

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  inviaMessaggio() {
    /*this.chatService.getChat(this.chatInput).subscribe(
      (response: any) => {
        this.chatResponse = response.message.content; // Adjust as per API response structure
        console.log( response.message.content);
      },
      (error) => {
        console.error('Error:', error);
      }
    );*/

    this.chatService.getChat(this.chatInput).subscribe((data) =>
    {
      var strunz=JSON.stringify(data)
      this.messages=JSON.parse(strunz);;
    });
    
  }


  async inviaMessaggio1 (){
  this.risposta1='';

    const message = { role: 'user', content: this.chatInput }
    //const response = await this.ollama.chat({ model: 'llama3.2', messages: [message], stream: true })

    const response = await this.ollama.generate({
      "model": "llama3.2",
      "prompt": this.chatInput,
      "stream": true,
      "context":[1, 2, 3]
    });

    for await (const part of response) {
      //process.stdout.write(part.message.content)
      //this.risposta.push(part.message.content);
      this.risposta1 += part.response;
      
    
    }
    this.risposta.push(this.chatInput);
    this.risposta.push(this.risposta1);
    console.log( this.risposta1);
    console.log( this.risposta);
    this.chatInput='';

    
  
  }

 
}
