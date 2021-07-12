from flask import Flask, jsonify
from chessdotcom_data import Chess_info


app = Flask(__name__)

chess_info = Chess_info()

@app.route("/api/get_player_profile/<username>")
def player_profile(username):
    return chess_info.player_info(username).json


app.run(host="0.0.0.0")
