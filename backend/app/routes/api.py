from flask import Blujeprint, jsonify


api_bp = Blueprint("api", __name__)

@api_bp.get('/')
def home():
    '''
    Serves the home page
    '''
    return jsonify({'status': 'Home page is running fine'})