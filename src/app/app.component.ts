import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Add More element in angular 2x , 4x , 5x';
  items: any = [] ;
  
  constructor(
  ) { }

   ngOnInit() {

   	let randNum = Math.floor((Math.random() * 9999) + 1111);
  	this.items = [ {randKey: randNum, title:"" } ] ; 

   }


  /**
  * @Description: Add More one object in items
  * @Param: pass parameter 1 for add more
  */
  add(key){    
    
    let randNum = Math.floor((Math.random() * 9999) + 1111); 
    this.items.push({randKey: randNum, title:"" });
  }

  minus(indexNumber){
    if (indexNumber > -1) {
      this.items.splice(indexNumber, 1);
    }
  }
}
