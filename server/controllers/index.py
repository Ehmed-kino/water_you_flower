from flask import jsonify, request
from models.flower import Flower
from flask_cors import cross_origin

from server import app, db

data = {
    'flowers': [
        {'name': 'flower1'},
        {'name': 'flower2'}
        ]
}

@app.route('/')
@cross_origin()
def index():
    return jsonify(data)

@app.route('/add', methods=['POST'])
@cross_origin()
def add_flower():
    flower = Flower(**request.json)
    db.session.add(flower)
    db.session.commit()
    return jsonify(request.json)

