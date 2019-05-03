import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: '[app-leftnav]',
  templateUrl: './leftnav.component.html'
})
export class LeftnavComponent implements OnInit {
  @Input() public parentData ;
  constructor() { }
  public successText ="welcome";
  public disabled ="false";
  public isValid="true";
  public frmchild = "fromchild";
  ngOnInit() {
  }

@Output() public fireEvent = new EventEmitter();

senddata(){
  console.log("sedndata");
  this.fireEvent.emit("jaisakthi");
}

 
getValue(username){
  console.log("function calling"+username);
  if(username == 'jai'){
    console.log("valid");

  }
  else{
    console.log("invalid");
    this.disabled ="true";
  }

}
}
