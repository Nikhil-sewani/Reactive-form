import { Component,Input,ViewChild,AfterViewInit,Output,EventEmitter,OnInit } from '@angular/core';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {
 

  @Input() XYZ :any;
  @Input() XYW :any;
  @Output() dataUpdateevent=new EventEmitter <string>()


  dataarray =[{"name":"", "mark":""}];

 constructor(private service:MasterService){
  this.dataarray =this.service.getData();

 }
 updatelist(obj:any){
  this.dataarray.push(obj)
  return obj.name;"is added"
 }
 
 ngOnInit(): void {
   
 }
}
