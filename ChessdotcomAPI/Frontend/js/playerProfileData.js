const getProfileData = async (username) => {
  const responseProfileData = await fetch(`https://chessdotcom.aayam555.repl.co/api/get_player_profile/${username}`);
  const jsonProfileData = await responseProfileData.json();
  localStorage.setItem("profileData", JSON.stringify(jsonProfileData));
  return jsonProfileData;
}

const updateProfileData = async () => {
  const searchBarInput = document.getElementById("search-bar").value;
  const profile = document.getElementById("profile");
  const profileData = await getProfileData(searchBarInput);
  const profileDataPlayer = profileData["player"];

  let htmlTemplate;

  function createTemplate(image_error, not_found){
    let htmlTemplate;
    if (document.title == "Chessdotcom API Profile Only"){
      if (image_error){
        htmlTemplate = `<div class="image-username-only">
                           <img src="./images/questionmark.jpg" alt="profile image">
                           <a target=_blank href="${profileDataPlayer["url"]}" id="username-only">${profileDataPlayer["username"]}</a>
                        </div>
                        <span id="name">${profileDataPlayer["name"]}</span>
                        <span class="player-info-text" id="country_name">Country: ${profileDataPlayer["country_name"]}</span>
                        <span class="player-info-text" id="status">Status: ${profileDataPlayer["is_online"]}</span>
                        <span class="player-info-text" id="streamer">Is streamer: ${profileDataPlayer["is_streamer"]} </span>
                        <span class="player-info-text" id="followers">followers: ${profileDataPlayer["followers"]}</span>

                      `;

      } else if (not_found){
        htmlTemplate = `<div class="image-username-only">
                           <img src="./images/questionmark.jpg" alt="profile image">
                           <a target=_blank href="#" id="username-only">Not Found</a>
                        </div>
                        <span id="name">Not Found</span>
                        <span class="player-info-text" id="country_name">Country: Not Found</span>
                        <span class="player-info-text" id="status">Status: Not Found</span>
                        <span class="player-info-text" id="streamer">Is streamer: Not Found</span>
                        <span class="player-info-text" id="followers">followers: Not Found</span>

                        `;

      } else{
      htmlTemplate = `<div class="image-username-only">
                         <img src="${profileDataPlayer["avatar"]}" alt="profile image">
                         <a target=_blank href="${profileDataPlayer["url"]}" id="username-only">${profileDataPlayer["username"]}</a>
                      </div>
                      <span id="name">${profileDataPlayer["name"]}</span>
                      <span class="player-info-text" id="country_name">Country: ${profileDataPlayer["country_name"]}</span>
                      <span class="player-info-text" id="status">Status: ${profileDataPlayer["is_online"]}</span>
                      <span class="player-info-text" id="streamer">Is streamer: ${profileDataPlayer["is_streamer"]} </span>
                      <span class="player-info-text" id="followers">followers: ${profileDataPlayer["followers"]}</span>
                      `;

      }
    }

    else if (document.title == "Chessdotcom API"){
      if (image_error){
        htmlTemplate = `<div class="image-username image-username">
                           <img src="./images/questionmark.jpg" alt="profile image">
                           <a target=_blank href="${profileDataPlayer["url"]}" id="username">${profileDataPlayer["username"]}</a>
                        </div>
                        <span id="name">${profileDataPlayer["name"]}</span>
                        <span class="player-info-text" id="country_name">Country: ${profileDataPlayer["country_name"]}</span>
                        <span class="player-info-text" id="status">Status: ${profileDataPlayer["is_online"]}</span>
                        <span class="player-info-text" id="streamer">Is streamer: ${profileDataPlayer["is_streamer"]} </span>
                        <span class="player-info-text" id="followers">followers: ${profileDataPlayer["followers"]}</span>

                      `;

      } else if (not_found){
        htmlTemplate = `<div class="image-username">
                           <img src="./images/questionmark.jpg" alt="profile image">
                           <a target=_blank href="#" id="username">Not Found</a>
                        </div>
                        <span id="name">Not Found</span>
                        <span class="player-info-text" id="country_name">Country: Not Found</span>
                        <span class="player-info-text" id="status">Status: Not Found</span>
                        <span class="player-info-text" id="streamer">Is streamer: Not Found</span>
                        <span class="player-info-text" id="followers">followers: Not Found</span>

                        `;

      } else{
      htmlTemplate = `<div class="image-username">
                         <img src="${profileDataPlayer["avatar"]}" alt="profile image">
                         <a target=_blank href="${profileDataPlayer["url"]}" id="username">${profileDataPlayer["username"]}</a>
                      </div>
                      <span id="name">${profileDataPlayer["name"]}</span>
                      <span class="player-info-text" id="country_name">Country: ${profileDataPlayer["country_name"]}</span>
                      <span class="player-info-text" id="status">Status: ${profileDataPlayer["is_online"]}</span>
                      <span class="player-info-text" id="streamer">Is streamer: ${profileDataPlayer["is_streamer"]}</span>
                      <span class="player-info-text" id="followers">followers: ${profileDataPlayer["followers"]}</span>

                      `;

      }
    }
    return htmlTemplate;
  }

  if (profileData == "Not Found"){
    htmlTemplate = createTemplate(false, true);

  } else{
    if (profileDataPlayer["avatar"] == undefined){
        htmlTemplate = createTemplate(true, false);

  ;} else{
    htmlTemplate = createTemplate(false, false);

  }

}
  profile.innerHTML = htmlTemplate;
}
