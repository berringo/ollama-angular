import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LlamaV2Service {
  private apiUrl = 'https://api.llama.v2/api/v1/conversazioni';
  private apiKey = 'TU_API_KEY';
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.apiKey}`,
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  sendText(message: string): Observable<any> {
    const data = JSON.stringify({ message });
    return this.http.post(this.apiUrl + '/text', data, { headers: this.headers });
  }

  receiveText(): Observable<any> {
    return this.http.get(this.apiUrl + '/text');
  }
}

