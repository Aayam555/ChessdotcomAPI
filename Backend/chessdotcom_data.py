import chessdotcom
import requests

class Chess_info:
    def player_info(self, username):
        try:
            info =  chessdotcom.get_player_profile(username).json

            info["player"]["country_name"] = requests.get(info["player"]["country"]).json()["name"]

            player_status = chessdotcom.is_player_online(username).json["online"]

            if player_status:
                info["player"]["is_online"] = "online"

            else:
                info["player"]["is_online"] = "offline"

            return info

        except:
            return "Not Found"


    def player_stat(self, username):
        try:
            return chessdotcom.get_player_stats(username).json


        except:
            return "Not Found"
