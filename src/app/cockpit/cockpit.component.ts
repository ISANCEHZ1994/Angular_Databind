import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // adding an alias - see inside of app.html
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // we can recive information from other components..
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef; // we can also be specifc with the datatype..
  // ViewChild passes an argument which is the selector of the element (how you want the element to appear)
  // you can pass the name of a local reference like => 'serverContentInput' or component types

  constructor(){
  };

  ngOnInit(){
  };

  onAddServer(nameInput: HTMLInputElement) { // we are making a reference so we have to pass it thru from the cockpit.html
    // we can also be specifc about what datatype nameInput is
    console.log(nameInput, 'this is our local reference coming from cockpit.html');
    console.log(nameInput.value, '<= look what we getting..')
    console.log("            ")
    console.log(this.serverContentInput, 'recieving this element so we must go inside of it..')
    console.log(this.serverContentInput.nativeElement.value, '<= look what we getting..')
    this.serverCreated.emit({
      // since we are switching to another way of displaying data - change
        serverName: nameInput.value, // value because it would just send the entire tag..

        // changing below: we have direct access to elements in out DOM in our template
        serverContent: this.serverContentInput.nativeElement.value // this.newServerContent
    });    
  };

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  };

};
