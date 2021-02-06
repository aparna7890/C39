class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 120, 0);

    this.input.position(displayWidth/2 - 90 , displayHeight/2 - 80);
    this.button.position(displayWidth/2, displayHeight/2);
    this.reset.position(displayWidth-100, 30);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);

      this.greeting.html("Hello " + player.name + ", please wait while the others join")
      //this.greeting.html()
      this.greeting.position(displayWidth/2 - 300, displayHeight/4);
    });

    //arrow(=>) specifies the function for the particular object
    this.reset.mousePressed(()=>{
      player.updateCount(0)
      game.update(0)
    });

  }
}