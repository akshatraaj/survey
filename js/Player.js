class Player {
  constructor(){}

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(name){
    var playerIndex = name;
    database.ref(playerIndex).set({
      name:name  
    });
  }
  getCount(){
    var playerCountRef2 = database.ref('email');
    playerCountRef2.on("value",function(data){
      email = data.val();
    })
  }

  updateCount2(count){
    database.ref('/').update({
      email: email
    });
  }

  update(email){
    var playerIndex = email;
    database.ref(playerIndex).set({
      email: email,   
    });
  }
}
