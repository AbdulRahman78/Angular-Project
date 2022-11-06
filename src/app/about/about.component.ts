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
  leader: Leader[];

  constructor(private dishService: DishService,
    private leaderService: LeaderService) { }

  ngOnInit() {
    this.dish = this.dishService.getFeaturedDish();
    // this.leader = this.leaderService.getFeaturedLeader();
    this.leader = this.leaderService.getLeaders();
  }

}
