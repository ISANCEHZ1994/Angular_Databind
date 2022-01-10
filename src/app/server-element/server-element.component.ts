import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // three kinds: None, Emulated(DEFAULT), ShadowDom
  // we can change how css works right now everything is separated app.css do NOT change everything
  // by adding .None THEN ti would be like normal
  // encapsulation: ViewEncapsulation.ShadowDom
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  // remember that the input decorator means that we can expose this property to other components
  // now any components implementing our server-element component is able to bind to 'element'

  @Input('srvElement') element: {  // we can assign an ALIAS so that we can use that instead of element..
    type: string,
    name: string,
    content: string
   };
  // now we have to make changes inside of server-element html  
  @Input() name: string;

  // FOLLOW the notes on video: gave error because object below was not there
  @ViewChild('heading', {static: true}) header: ElementRef; 
  // the string heading will find something inside the se-html file that matches
  // what is in the parenthesis in this case heading
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() { 
    console.log('constructor is called!')
  };

  ngOnChanges(changes: SimpleChanges){ // this will work by itself however it is good practice it also implement it above..
    // we are also delcaring the datatype..
    console.log('ngOnChanges is called! should run whenever there are changes..');
    console.log(changes, 'this should be the changes..');
  };

  ngOnInit() {
    console.log('ngOnInit is called!')
    console.log(
      'Text Content: ' +this.header.nativeElement.textContent
    ); // NOTE: it will be empty also same console.log placed inside of AfterViewInit function below!
    console.log("Text Content of Paragraph: " + this.paragraph.nativeElement.textContent);
  };

  ngDoCheck(){
    console.log("ngDoCheck does get called!")
  };

  ngAfterContentInit(){
    // this funciton will only get called once because it doesnt need to be initalized again..
    console.log("ngAfterContentInit gets called!");
    console.log("Text Content of Paragraph: " + this.paragraph.nativeElement.textContent);
  };

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called!")
  };

  ngAfterViewInit(){  
    console.log("ngAfterViewInit gets called!");
    console.log("Text Content: " + this.header.nativeElement.textContent);
    // Note when called the second time it will read:
    // Text Content: TestServer
  };

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called!")
  };

  ngOnDestroy(){
    console.log("ngOnDestry is called")
  };



};
