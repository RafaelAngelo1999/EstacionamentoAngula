import { Component, OnInit, ElementRef, ViewChild, ɵConsole } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscription, Subject } from 'rxjs';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import { wget } from 'node-wget'
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { FilterSettingsModel } from '@syncfusion/ej2-angular-grids';



@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})

export class AvatarComponent {
5
  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;
gg
  title = 'Tibia-Player';
  formulario: FormGroup
  model = {
    mundo: 'Circle',
    vocacao: 'Sorcerer',
  }
  sortOptions = { columns: [{ field: 'level', direction: 'Ascending' }] };
  listVocation = 
  [
    {name: "Sorcerer", img: "/TibiaSharedPlayerParty/assets/images/Sorcerer.png"},
    {name: "Druid", img: "/TibiaSharedPlayerParty/assets/images/Druid.png"},
    {name: "Knight", img: "/TibiaSharedPlayerParty/assets/images/Knight.png"},
    {name: "Paladin", img: "/TibiaSharedPlayerParty/assets/images/Paladin.png"}
  ]
  trustedDashboardUrl: SafeUrl;
  player
  imgVocation
  vocation
  levelMin = 100
  levelMax  = 500
  listMundo 
  subsListMundoChanger: Subscription;
  subsListPlayerWorldOnline: Subscription;
  public data: Object[];





  readonly apiURL: string;

  constructor(private sanitizer: DomSanitizer, private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private globalService: GlobalService) {

    this.apiURL = 'http://localhost:54130/';

  }
  ngOnInit() {
    this.globalService.onPesquisarMundo('https://api.tibiadata.com/v2/worlds.json')

    this.formulario = new FormGroup({
      mundo: new FormControl('', Validators.required),
      vocation: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required)
    });

    this.subsListMundoChanger = this.globalService.listMundoChange.subscribe((respose) => {
      this.listMundo = respose.worlds.allworlds;
      console.log(this.listMundo)
    });

    this.subsListPlayerWorldOnline = this.globalService.listPlayerWorldOnline.subscribe((respose) => {
      console.log(this.vocation)
      switch(this.vocation){
        case "Sorcerer":{
          this.data = respose.world.players_online.filter(obj => obj.level  >= this.levelMin && obj.level <= this.levelMax && (obj.vocation == "Master Sorcerer" || obj.vocation == "Sorcerer"));
        }
        break;
        case "Druid":{
          this.data = respose.world.players_online.filter(obj => obj.level  >= this.levelMin && obj.level <= this.levelMax && (obj.vocation == "Elder Druid" || obj.vocation == "Druid"));
        }
        break;
        case "Paladin":{
          this.data = respose.world.players_online.filter(obj => obj.level  >= this.levelMin && obj.level <= this.levelMax && (obj.vocation == "Royal Paladin" || obj.vocation == "Paladin"));
        }
        break;
        case "Knight":{
          this.data = respose.world.players_online.filter(obj => obj.level  >= this.levelMin && obj.level <= this.levelMax && (obj.vocation == "Elite Knight" || obj.vocation == "Knight"));
        }
        break;
      }
      console.log(this.data)
    });
  }
  onChangeMundo(deviceValue) {
    console.log(this.formulario.value.mundo)
  }

  onChangeVocation(deviceValue) {
    this.imgVocation = "/TibiaSharedPlayerParty/assets/images/"+ deviceValue+".png"
    this.vocation = deviceValue;
    console.log(this.formulario.value.vocation)
  }
  onPrint() {
    console.log(this.formulario.value)
  }
  onPesquisarMundo() {
    console.log('https://api.tibiadata.com/v2/worlds.json')
    this.globalService.onPesquisarMundo('https://api.tibiadata.com/v2/worlds.json')
  }
  onClean() {
    // console.log(this.url)
    // this.url = this.urlReset
  }
  
  onAbrirPersonagem(name: string) {
    this.trustedDashboardUrl = encodeURIComponent(name)
    window.open("https://www.tibiaring.com/char.php?c=" + this.trustedDashboardUrl + "&lang=pt");
  }
  onImprimir() {
    this.data = null
  }
  onAbrirTibiaWiki() {
    window.open("https://www.tibiawiki.com.br/wiki/Home");
  }
  onAbrirTibiaBr() {
    window.open("https://www.tibiabr.com/");
    }

  onLevelShared() {
    this.levelMin = Math.round(this.formulario.value.level * 2 / 3)
    this.levelMax = Math.round(this.formulario.value.level * 3 / 2)
    this.globalService.onPlayerWorld('https://api.tibiadata.com/v2/world/'+this.formulario.value.mundo+'.json');


  }
  downloadFile(data: any): void {
    const blob: Blob = new Blob([data], { type: 'image/svg+xml' });
    const fileName: string = 'image.svg';
    const objectUrl: string = URL.createObjectURL(blob);
    const a: HTMLAnchorElement = document.createElement('a') as HTMLAnchorElement;

    a.href = objectUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(objectUrl);
  }
}