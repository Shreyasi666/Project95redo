var firebaseConfig = {
    apiKey: "AIzaSyDcfDgdO6qmLD9THV4cojfDwhrJ_zcZ3Po",
    authDomain: "project94-72bd9.firebaseapp.com",
    databaseURL: "https://project94-72bd9-default-rtdb.firebaseio.com",
    projectId: "project94-72bd9",
    storageBucket: "project94-72bd9.appspot.com",
    messagingSenderId: "494880979060",
    appId: "1:494880979060:web:75df1af69ce997ca6fb921"
  };

  firebase.initializeApp(firebaseConfig);

function welcome()
{
    user_name = localStorage.getItem("user_name");
    document.getElementById("name").innerHTML = user_name +"!";
}

function addRoom()
{

}

function getData()
{
      firebase.database().ref("/").on('value', function(snapshot){document.getElementById("output.").innerHTML = ""; snapshot.forEach(function(childSnapshot) {childKey= childSnapshot.key;
      Room_names = childKey;
      console.log("Room name - "+ Room_names);
      row = "<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });
});

}

getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      location = "kwitter_room.html"
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
}

