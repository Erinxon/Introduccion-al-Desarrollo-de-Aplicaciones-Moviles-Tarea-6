import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementosService } from 'src/app/services/elementos.service';
import { Element } from '../../models/element.models';

@Component({
  selector: 'app-detalle-elemento',
  templateUrl: './detalle-elemento.page.html',
  styleUrls: ['./detalle-elemento.page.scss'],
})
export class DetalleElementoPage implements OnInit {
  elemento!: Element;
  loanding: boolean = true;
  constructor(private router: ActivatedRoute, private elementosService: ElementosService) { }

  ngOnInit() {
    this.loanding = true;
    const symbol = this.router.snapshot.params['id'];
    this.elementosService.getElementos().subscribe(e => {
      this.elemento = e.elements.find(el => el.symbol === symbol);
      this.loanding = false;
    })
  }

}
