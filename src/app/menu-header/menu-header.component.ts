import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {

  constructor(private globalService: GlobalService, private router : Router) { }

  ngOnInit() {
  }
  logOff(){
    this.globalService.userLogado = false
    localStorage.clear();
    console.log(this.globalService.userLogado)
    this.router.navigateByUrl('/login');
  }
}
