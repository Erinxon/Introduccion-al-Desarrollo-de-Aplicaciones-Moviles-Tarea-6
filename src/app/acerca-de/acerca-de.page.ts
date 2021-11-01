import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage implements OnInit {
  datos: any = {
    telefono: '809-494-8930',
    email: 'erinxons@gmail.com',
    github: 'github.com/Erinxon',
    linkedin: 'linkedin.com/in/erinxon',
  }
  constructor() { }

  ngOnInit() {
  }

}
