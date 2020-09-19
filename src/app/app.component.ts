import { Component, ElementRef, OnInit, Renderer2, ViewChild, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { Identifiers } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'avatar-otimiza';


  readonly apiURL: string;

  constructor() {

  }
  ngOnInit() {

  }

}


