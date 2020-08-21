import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class GridService {
  readonly updateHeight$ = new Subject<void>();
}
