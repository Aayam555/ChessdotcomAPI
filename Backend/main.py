from flask import Flask, jsonify
from flask_cors import CORS
from chessdotcom_data import Chess_info


app = Flask(__name__)

CORS(app)

chess_info = Chess_info()

@app.route("/api/get_player_profile/<username>")
def player_profile(username):
    return jsonify(chess_info.player_info(username))


@app.route("/api/get_player_stats/<username>")
def player_stats(username):
    return jsonify(chess_info.player_stat(username))


app.run(host="0.0.0.0")
