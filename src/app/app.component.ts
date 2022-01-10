import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  serverElements = [{ 
    type: 'server',
    name: 'TestServer',
    content: 'Just test!'
   }];

   onServerAdded(serverData: { serverName:string, serverContent:string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
   };

  onBlueprintAdded(blueprintData:{ serverName:string, serverContent:string  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }; 

  onChangeFirst(){
    this.serverElements[0].name = "Changed!";
    // just to see changes 
    console.log("AYOO we just changed something!!")
  };

  onDestroyFirst(){
    this.serverElements.splice(0,1);
  }
 
};
