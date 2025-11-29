from flask import Flask
from flask_cors import CORS
from .routes.api import api_bp
from .extensions import db, bcrypt


def create_app():
    app = Flask(__name__)
    app.url_map.strict_slashes = False
    # app.config.from_object('app.config.Config')

    # Initialize extensions
    db.init_app(app)
    bcrypt.init_app(app)

    CORS(app)

    app.register_blueprint(api_bp, url_prefix='/api')

    return app