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
    new Quote(1,'Great companies are built on great products.','Elon Musk','Riri' ,new Date(2021,3,10),10,20),
    new Quote(2,'The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela','Skyles' ,new Date(2021,3,10),50,10),
    new Quote(3,'Stay Hungry,Stay foolish','Steve Jobs','Jerry' ,new Date(2021,3,10),40,20),
  ]

  toggleQuote(index:any){
    this.quotes[index].showQuoteDetails=!this.quotes[index].showQuoteDetails
  }
  
  upvoteFunc(index:any){
    var up=this.quotes[index].upvote+1;
    this.quotes[index].upvote=up;
    
}


downvoteFunc(index:any){
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
