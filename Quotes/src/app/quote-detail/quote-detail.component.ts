import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  
  @Input() quote :any;
  @Output() isDeleteButtonClicked = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  
  quoteDelete(weRemove: boolean){
    this.isDeleteButtonClicked.emit(weRemove);
  }
}
