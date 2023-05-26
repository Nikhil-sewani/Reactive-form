import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }
  dataarray =[{"name":"Nikhil", "mark":"75"}];
  getData(){
    return this.dataarray;
  }
  SaveData(input:any){
    this.dataarray.push(input)
  }
}
