function getValueFromUser() {
  var userName = document.getElementById("firstName").value;

  console.log(userName);
  document.getElementById("displayData").innerHTML = userName;

  return false;
}
