import { Component, OnInit } from '@angular/core';
import { ElementosService } from '../services/elementos.service';
import { Element } from '../models/element.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  elementos: Element[] = [];
  loanding: boolean = false;
  constructor(private elementosService: ElementosService) { }

  ngOnInit() {
    this.loanding = true;
    this.elementosService.getElementos().subscribe(res => {
      this.elementos = res.elements;
      this.loanding = false;
    });
  }

  getColor(element: Element): string {
    return `#${element['cpk-hex']}`;
  }

}
