class Form {
  constructor() {
    
  }

  display(){
    var tittle  = createElement("h1");
    tittle.html("My survey");
    tittle.position(100,10)
    var title = createElement('h2')
    title.html("Do you think we should follow");
    title.position(50, 300);
    var title1 = createElement('h2')
    title1.html("lockdown? ");
    title1.position(50, 320);
    var title2 = createElement('h3')
    title2.html("email:");
    title2.position(75, 140);
    var titttle = createElement("h3");
    titttle.html("name:");
    titttle.position(75,220);
    var input2 = createInput("");
    var input = createInput("");
   
    var button = createButton('enter');
    input2.position(130,240);
    input.position(130, 160);
    button.position(250, 770);
    var title3 = createElement("h2");
    title3.html("Do you think we should follow");
    title3.position(50,500);
    var title4 = createElement("h2");
    title4.html("social distancing? ");
    title4.position(50,520);

    var radio1 = createRadio('h3');
    radio1.option("YES");
    radio1.option("NO");
    radio1.position(100,400);
    var radio2= createRadio('h3');
    radio2.option("YES");
    radio2.option("NO");
    radio2.position(100,600);

    button.mousePressed(function(){

   
      var name = input.value();
      var email = input2.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);

      email+=1;
      email.update(email);
      email.updateCount(email);
       
      var greeting = createElement("h1");
      greeting.html("Thanks "+name);
      greeting.position(50,450);
    });

      

  }
}
