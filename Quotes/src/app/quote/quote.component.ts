import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1,'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.','Dr. Seuss','Jerry' ,new Date(2021,3,10)),
    new Quote(1,'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.','Dr. Seuss','Jerry' ,new Date(2021,3,10)),
    new Quote(1,'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.','Dr. Seuss','Jerry' ,new Date(2021,3,10)),
  ]

  toggleQuote(index:any){
    this.quotes[index].showQuoteDetails=!this.quotes[index].showQuoteDetails
  }

  addQuote(quote:Quote){
    const quotesLength =this.quotes.length;
    quote.id = quotesLength +1;
    this.quotes.push(quote);


  }
  constructor() { }

  ngOnInit(): void {
  }

}
