import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent implements OnInit {
  @Input() pokemon?: Pokemon;

  constructor() {}

  ngOnInit(): void {}

}
