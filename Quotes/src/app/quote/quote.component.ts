import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote("Wake up nigga Wake UP","Jerry","Wemisiko",new Date(2021,3,10))
    new Quote("Wake up nigga Wake UP","Jerry","Wemisiko",new Date(2021,3,10))
    new Quote("Wake up nigga Wake UP","Jerry","Wemisiko",new Date(2021,3,10))
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
