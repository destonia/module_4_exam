import { Component, OnInit } from '@angular/core';
import { Awesome } from 'src/app/awesome';
import { AwesomeService } from 'src/app/service/awesome.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  awesomes: Awesome[] = [];

  constructor(private awesomeService: AwesomeService) {
  }
  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.awesomeService.getAll().subscribe(awesomes => {
      this.awesomes = awesomes;
    });
  }
}
