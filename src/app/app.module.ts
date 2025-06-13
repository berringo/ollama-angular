import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Ollama } from 'ollama';
import { MarkdownModule } from 'ngx-markdown';




@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        MarkdownModule.forRoot(), 
    ],
    providers: [
        Ollama
    ],
    bootstrap: []
})
export class AppModule { }