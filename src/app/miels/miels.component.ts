import { Component, OnInit } from '@angular/core';
import { Miel } from '../interfaces/miel';

@Component({
  selector: 'app-miels',
  templateUrl: './miels.component.html',
  styleUrls: ['./miels.component.scss']
})
export class MielsComponent implements OnInit {

  miels: Miel[]= [
    {
      title: 'Acacia',
      description: 'Doux - transparant - liquide',
      place: 'Saint André de Corcy - La Dombes, Ain',
      price: 8
    },
    {
      title: 'Lavande',
      description: 'Très sucré - doré - liquide puis cristallisé',
      place: 'Drôme',
      price: 10
    },
    {
      title: 'Printemps',
      description: 'Crémeux - Colza & Fleurs de printemps',
      place: 'Priay - Plaine de l\'Ain',
      price: 10
    },
    {
      title: 'Été',
      description: 'Cristallisé - Tournesol & Fleurs d\'été',
      place: 'Priay - Plaine de l\'Ain',
      price: 10
    },
    {
      title: 'Sapin & Tilleul',
      description: 'Très sucré - doré - liquide puis cristallisé',
      place: 'Sutrieu - Valromey, Ain',
      price: 10
    },
    {
      title: 'Châtaignier',
      description: 'Blabla - bla - bla',
      place: 'Sutrieu - Valromey, Ain',
      price: 10
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
