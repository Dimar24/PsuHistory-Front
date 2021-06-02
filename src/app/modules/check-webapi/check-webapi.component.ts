import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services';

@Component({
  selector: 'app-check-webapi',
  templateUrl: './check-webapi.component.html',
  styleUrls: ['./check-webapi.component.css']
})
export class CheckWebapiComponent implements OnInit {
  checkAnswer: string = `Don't work :(`;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.checkWebApi().subscribe((data:any) => this.checkAnswer = data.answer);
  }

}
