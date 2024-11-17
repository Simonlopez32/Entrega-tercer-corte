from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
CORS(app)  


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Float, nullable=False)


@app.before_request
def create_tables():
    db.create_all()


@app.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()  
    return jsonify([{
        "id": product.id,
        "name": product.name,
        "description": product.description,
        "price": product.price
    } for product in products]), 200

@app.route('/products', methods=['POST'])
def add_product():
    data = request.json
    name = data.get('name')
    description = data.get('description')
    price = data.get('price')

    new_product = Product(name=name, description=description, price=price)
    db.session.add(new_product)
    db.session.commit()

    return jsonify({"message": "Producto agregado exitosamente"}), 201

if __name__ == '__main__':
    app.run(debug=True)
