import chessdotcom


class Chess_info:
    def player_info(self, username):
        try:
            return chessdotcom.get_player_profile(username)

        except:
            return "Not Found"
