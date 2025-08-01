const statusDiv = document.getElementById("status");

function upadateStatus(){
  if(navigator.onLine){
    statusDiv.textContent = "You are online";
    statusDiv.className = "status online";
  }
  else{
    statusDiv.textContent = "You are offile";
    statusDiv.className = "status offline";
  }
}

upadateStatus();

window.addEventListener("online", upadateStatus);
window.addEventListener("offline",upadateStatus);