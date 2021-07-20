import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor() { }

  quotes:Quote[]=[
    new Quote(1,'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.','Dr. Seuss','Jerry' ,new Date(2021,3,10),10,20),
    new Quote(2,'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.','Dr. Seuss','Jerry' ,new Date(2021,3,10),50,10),
    new Quote(3,'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.','Dr. Seuss','Jerry' ,new Date(2021,3,10),40,20),
  ]

  toggleQuote(index:any){
    this.quotes[index].showQuoteDetails=!this.quotes[index].showQuoteDetails
  }
  
  upvoteFunc(index){
    var up=this.quotes[index].upvote+1;
    this.quotes[index].upvote=up;
    
}


downvoteFunc(index){
  var down=this.quotes[index].downvote+1;
  this.quotes[index].downvote=down;

}
  addNewQuote(quote:Quote){
    const quotesLength =this.quotes.length;
    quote.id = quotesLength +1;
    quote.datePosted =new Date(quote.datePosted)
    this.quotes.push(quote);
  }

  deleteQuote(isDeleteButtonClicked: any,index:any){
    if(isDeleteButtonClicked){
      const yesDelete =confirm('You sure!');
      if(yesDelete){
        this.quotes.splice(index, 1);
      }
    }

  }
  

  ngOnInit(): void {
  }

}
