from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@db/wyf'
db = SQLAlchemy(app)

from controllers.index import *

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)