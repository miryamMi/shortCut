import{Component, ViewChild} from '@angular/core';
import * as XLSX from 'ts-xlsx';
import { observable, Observable, Subject } from 'rxjs';
@Component({
    selector:"app-root",
    // template:"<h1>{{title}}</h1>"
    templateUrl:"./app.component.html"
})
export class AppComponent{
    title:string="hello world!!!!!!!!!!!!";
    direction:Subject<boolean>=new Subject();


arrayBuffer:any;
file:File;
incomingfile(event) 
  {
  this.file= event.target.files[0]; 
  }

 Upload() {
      let fileReader = new FileReader();
        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = XLSX.read(bstr, {type:"binary"});
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
        }
        fileReader.readAsArrayBuffer(this.file);
}
   
    constructor (){
        
    }
   
   
    ngAfterViewInit() {
       
    }
    ngOnInit(){
      
    
    }
}
