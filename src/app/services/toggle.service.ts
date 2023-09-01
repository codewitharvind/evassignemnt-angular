import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  private flage$ = new Subject<any>()
  // private setFlag$ = new Subject<any>();

  constructor(private httpclient: HttpClient) { }

  setFunctionCall(data:any){
    this.flage$.next(data);
  }

  getFlageData(){
    return this.flage$;
  }

}
