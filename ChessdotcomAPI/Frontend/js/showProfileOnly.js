const showProfile = () => {
  const body = document.body;
  let profileDataPlayer = JSON.parse(localStorage.getItem("profileData"))["player"];
  let htmlTemplate = `<!DOCTYPE html>
  <html lang="en" dir="ltr">
    <head>
      <meta charset="utf-8">
      <title>Chessdotcom API Profile Only</title>
      <link rel="shortcut icon" href="./images/favicon.png">
      <link rel="stylesheet" href="./css/style.css">
      <link rel="stylesheet" href="./css/showProfileOnly.css">
    </head>
    <body>
      <div class="navigation">
        <div class="logo">
            <img id="logo-img" src="./images/favicon.png" alt="logo" width="71" height="78">
            <span id="logo-text">Chess.com API</span>
        </div>

        <form onsubmit="updateProfileData(); return false;" class="search">
            <input type="text" placeholder="Enter Username" id="search-bar">
        </form>
      </div>
      <div class="info-only">
        <div class="player-info-only">
          <div class="card">
            <div class="card-body">
              <div id="profile" class="profile-only">
              <div class="image-username-only">
                                 <img src="${profileDataPlayer["avatar"]}" alt="profile image">
                                 <a target=_blank href="${profileDataPlayer["url"]}" id="username-only">${profileDataPlayer["username"]}</a>
                              </div>
                              <span id="name">${profileDataPlayer["name"]}</span>
                              <span class="player-info-text" id="country_name">Country: ${profileDataPlayer["country_name"]}</span>
                              <span class="player-info-text" id="status">Status: ${profileDataPlayer["is_online"]}</span>
                              <span class="player-info-text" id="streamer">Is streamer: ${profileDataPlayer["is_streamer"]} </span>
                              <span class="player-info-text" id="followers">followers: ${profileDataPlayer["followers"]}</span>
            </div>
          </div>
        </div>


      <script src="./js/playerProfileData.js" charset="utf-8"></script>
      <script src="./js/showProfileOnly.js" charset="utf-8"></script>
    </body>
  </html>
`;

    body.innerHTML = htmlTemplate;
    console.log("hello");
}
