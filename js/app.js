//Create a add COMMENT
function getinfo(){
  var username = document.getElementById("username").value
  var comment = document.getElementById("comment").value
  var pictureURL = document.getElementById("pictureURL").value


  var userNameText = document.createTextNode("Username: " + username)
  var commentText = document.createTextNode("Comment: " + comment)
  var img = document.createElement("img")


  var newListItem = document.createElement("Li")
  newListItem.style.color = "red";
  newListItem.className = "group-list-item"
  var newUserName = document.createElement("H3")
  newUserName.appendChild(userNameText)
  var newComment = document.createElement("P")
  newComment.appendChild(commentText)

  img.setAttribute("src", pictureURL)


  newListItem.appendChild(newUserName)
  document.getElementById("todoForm").appendChild(img)
  newListItem.appendChild(newComment)
  document.getElementById("commentList").appendChild(newListItem)

  if (pictureURL == "") {
		img.setAttribute("src", "https://s-media-cache-ak0.pinimg.com/236x/31/fb/3f/31fb3f434f11ad4c5674e87079008ba6.jpg")
	}


}
