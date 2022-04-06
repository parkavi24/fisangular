import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observeexample';
  observer: any;
  constructor(){

  }
  ngOnInit(){
    const sqnc=new Observable(countOnetoTen);
    sqnc.subscribe({
      next(num){
        console.log(num);
      },
      complete(){console.log("Completed!")}
    });

    function countOnetoTen (observer: any){
      for(var i=1; i<=10; i++){
        observer.next(i);

      }
      observer.complete();
      return{unsubscribe(){}}
    }
  }
}
