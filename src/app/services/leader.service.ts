import { Injectable } from '@angular/core';
import { Leader } from '../shared/Leader';
import { LEADERS } from '../shared/Leaders';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(2000));
  }

  getLeader(id: string): Observable<Leader> {
    return of(LEADERS.filter((lead) => (lead.id == id))[0]).pipe(delay(2000));
    
  }

  getFeaturedLeader(): Observable<Leader> {
    return of(LEADERS.filter((Leader) => Leader.featured)[0]).pipe(delay(2000));
  }

}
