import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Leader } from '../shared/Leader';
import { LeaderService } from '../services/leader.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  dish: Dish;
  leaders: Leader[];

  constructor(private dishService: DishService,
    private leaderService: LeaderService) { }

  ngOnInit() {
    this.dishService.getFeaturedDish()
    .subscribe(dish => this.dish = dish);
    // this.leader = this.leaderService.getFeaturedLeader();

    this.leaderService.getLeaders()
    .subscribe(leaders => this.leaders = leaders);
  }

}
