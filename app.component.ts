import { Component, ViewChild, AfterViewInit} from '@angular/core';
import { ChildComponent } from './child/child.component';
import { MasterService } from './service/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(private service:MasterService){

  }
  @ViewChild(ChildComponent) viewdata !:ChildComponent
  title="parent Component"
  inputname="";
  inputmark="";
  inputobj={"name":"","mark":""};
  response:any;
    TransferData(name:any, mark:any){
    
    this.inputobj={"name":name,"mark":mark};
  //  this.viewdata.updatelist(this.inputobj);
  this.service.SaveData(this.inputobj)
  }

  updateTitle(title:any){
 this.title=title
  }
  
  }

