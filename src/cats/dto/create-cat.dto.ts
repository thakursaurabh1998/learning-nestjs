import { Cat } from '../interfaces/cat.interface';

export class CreateCatDto implements Cat {
  id: number;
  name: string;
  age: number;
  breed: string;
}
