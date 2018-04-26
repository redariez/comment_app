//Create a add COMMENT
function getinfo(){
  var username = document.getElementById("username").value
  var comment = document.getElementById("comment").value


  var userNameText = document.createTextNode("Username: " + username)
  var commentText = document.createTextNode("Comment: " + comment)


  var img = document.createElement("img")
  var newListItem = document.createElement("Li")
  newListItem.className = "group-list-item"
  var newUserName = document.createElement("H3")
  newUserName.appendChild(userNameText)
  var newComment = document.createElement("P")
  newComment.appendChild(commentText)




  newListItem.appendChild(newUserName)
  newListItem.appendChild(newComment)
  document.getElementById("commentList").appendChild(newListItem)


}
