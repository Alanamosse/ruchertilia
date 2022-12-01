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
      price: 10
    },
    {
      title: 'Lavande',
      description: 'La lavande est plantés pour obtenir de l’huile essentielle aux multiples vertus appréciées. Ce miel est gourmand, très aromatique et à tendance à cristalliser.',
      taste: 'Doux,floral, arôme fin et parfumé.',
      texture: 'Solide, cristallisation fine et onctueuse.',
      strength: 2,
      place: 'Drôme provençale',
      price: 10
    },
    {
      title: 'Printemps',
      description: 'Ce doux a permis aux abeilles de butiner de nombreuses essences. Le nectar de cloza, de l\'aubépine, de l\'érable et d\'arbres fruitiers composent ce miel atypique.',
      taste: 'Suave et fruité, discret mais tenace.',
      texture: 'Douce, crémeux',
      strength: 2,
      place: 'Priay - Plaine de l\'Ain',
      price: 6
    },
    {
      title: 'Été',
      description: 'Ce miel orangé, principalement composé du nectar de tournesol, vous amènera du soleil cet hiver. Il est le commagnon idéal des enfants de par sa texture et son goût léger.',
      taste: 'Doux, forte sucrosité.',
      texture: 'Cristalisé.',
      strength: 2,
      place: 'Priay - Plaine de l\'Ain',
      price: 8
    },
    {
      title: 'Sapin & Tilleul',
      description: 'Issu de coteaux avoisinants la moyenne montagne, ce nectar n\'est pas prêt de se faire oulier. Caractérisé par son goût mentholé et résineux unique, il ravira les amateurs de miels.',
      taste: 'Frais, mentholé, effluve de résine',
      texture: 'Cristallisation lente mais fine.',
      strength: 3,
      place: 'Sutrieu - Valromey, Ain',
      price: 8
    },
    {
      title: 'Châtaignier',
      description: 'Son odeur forte et sa couleur ambrée, en font l\’un des miels les plus caractériels. Son aspect liquide est idéal pour la dégustation mais aussi la cuisine.',
      taste: 'Boisé, corsé, amer et acide',
      texture: 'Liquide, cristallisation lente et grossière.',
      strength: 4,
      place: 'Sutrieu - Valromey, Ain',
      price: 8
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
