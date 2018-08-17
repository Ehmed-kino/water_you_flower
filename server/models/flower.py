from server import db
from datetime import datetime

class Flower (db.Model):
    __tablename__ = "flower"

    id = db.Column('id', db.Integer, primary_key=True)
    name = db.Column('name', db.Unicode)
    description = db.Column('description', db.Unicode)
    creation_date = db.Column('creation_date', db.Date)
    is_alive = db.Column('is_alive', db.Boolean)

    def __init__(self, name, description, is_alive=True):
        self.name = name
        self.description = description
        self.creation_date = datetime.utcnow()
        self.is_alive = is_alive
