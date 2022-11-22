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
      description: 'Avec sa robe dorée, l’acacia offre un miel délicatement suave. Sa texture liquide et son parfum en fait l’un des miels le plus apprécié. Il est le compagnon idéal pour la cuisine.',
      taste: 'Doux, floral, forte sucrosité.',
      texture: 'Liquide.',
      strength: 1,
      place: 'Saint André de Corcy - La Dombes, Ain',
      price: 8
    },
    {
      title: 'Lavande',
      description: 'Le lavandin est planté pour obtenir de l’huile essentielle aux multiples vertus appréciées. Ce miel est gourmand, très aromatique et à tendance à cristalliser.',
      taste: 'Doux,floral, arôme fin et parfumé.',
      texture: 'Solide, cristallisation fine et onctueuse.',
      strength: 3,
      place: 'Drôme provençale',
      price: 10
    },
    {
      title: 'Printemps',
      description: 'Ce miel est le résultat printemps d\'un doux qui a permis aux abeilles de butiner de nombreuses essences. Il est le produit principal des fleurs de cloza, aubépine, et autres fruitiers. D’un goût naturellement doux, il est idéal pour tartiner ou sucrer les boissons chaudes.',
      taste: 'Suave et fruité, discret mais tenace.',
      texture: 'Douce, à granulation fine.',
      strength: 2,
      place: 'Priay - Plaine de l\'Ain',
      price: 6
    },
    {
      title: 'Été',
      description: 'Cristallisé - Tournesol & Fleurs d\'été',
      taste: '',
      texture: '',
      strength: 2,
      place: 'Priay - Plaine de l\'Ain',
      price: 10
    },
    {
      title: 'Sapin & Tilleul',
      description: 'Ce miel est l\'association naturelle de deux miellées d\'une même zone, sur des coteaux avoisinants la moyenne montagne. Il possède les caractéristiques mentholées uniques au fleurs de Tilleul, ainsi que le résineu tiré du miellat de Sapin. Cette excrétion est produite par les pucerons.',
      taste: 'Effluve de résine, mentholé.',
      texture: 'Cristallisation lente mais fine.',
      strength: 3,
      place: 'Sutrieu - Valromey, Ain',
      price: 10
    },
    {
      title: 'Châtaignier',
      description: 'Son odeur forte et sa couleur ambrée, en font l\’un des miels les plus caractériels. Son aspect liquide est idéal pour la dégustation mais aussi la cuisine.',
      taste: 'Boisé, corsé, amer et acide',
      texture: 'Liquide, cristallisation lente et grossière.',
      strength: 4,
      place: 'Sutrieu - Valromey, Ain',
      price: 10
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
