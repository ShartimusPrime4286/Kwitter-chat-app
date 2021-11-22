
var firebaseConfig = {
  apiKey: "AIzaSyC_T6h6Pr4A0yaCGpR7HD8hJa9mM1DCVZU",
  authDomain: "kwitter-25b99.firebaseapp.com",
  databaseURL: "https://kwitter-25b99-default-rtdb.firebaseio.com",
  projectId: "kwitter-25b99",
  storageBucket: "kwitter-25b99.appspot.com",
  messagingSenderId: "974338391315",
  appId: "1:974338391315:web:57268e1d8c32a779166ee6"
};
    
      firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }
    