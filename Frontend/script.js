const getProfileData = async (username) => {
  const responseProfileData = await fetch(`https://chessdotcom.aayam555.repl.co/api/get_player_profile/${username}`);
  const jsonProfileData = await responseProfileData.json();

  return jsonProfileData;
}

const updateProfileData = async () => {
  const searchBarInput = document.getElementById("search-bar").value;
  const profile = document.getElementById("profile");
  const profileData = await getProfileData(searchBarInput);
  const profileDataPlayer = profileData["player"];

  let htmlTemplate;

  if (profileData == "Not Found"){
    htmlTemplate = `<div class="image-username">
                           <img src="./images/questionmark.jpg" alt="profile image">
                           <a href="#" id="username">Not Found</a>
                        </div>
                        <span id="name">Not Found</span>`
  } else{
    htmlTemplate = `<div class="image-username">
                           <img src="${profileDataPlayer["avatar"]}" alt="profile image">
                           <a href="#" id="username">${profileDataPlayer["username"]}</a>
                        </div>
                        <span id="name">${profileDataPlayer["name"]}</span>
 `;
  }
  profile.innerHTML = htmlTemplate;
}
