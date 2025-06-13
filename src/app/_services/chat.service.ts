import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  url = 'http://localhost:11434/api/chat';
  private dataStream!: Observable<any>;

  constructor(private http: HttpClient)  {

  }
 
  getChat(chatInput: string): Observable<any> {
    let result: Observable<Object>;
    const payload = {
      model: 'llama3.2',
      messages: [
        { role: 'user', content: chatInput, keep_alive:"1h" },
      ],
      stream: true,
    };

    result =this.http.post(this.url, payload,{responseType: 'text'});
    this.dataStream=result; 
    return result;
  }
}
