export class Quote {
    showQuoteDetails:boolean;
    constructor(public id:number,public quoteName:string,public author:string, public postedBy:string,public datePosted:Date){
    this.showQuoteDetails= false;
    }
}
