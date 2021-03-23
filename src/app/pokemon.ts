import { Sprite } from './sprite';

export interface Pokemon {
  nDex: number;
  name: string;
  gen: number;
  regions: number[];
  sprites: Sprite[];
}
