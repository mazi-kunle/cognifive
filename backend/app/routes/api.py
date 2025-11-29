from flask import Blueprint, jsonify, request
from ..services.auth_service import create_user


api_bp = Blueprint("api", __name__)


@api_bp.get('/')
def home():
    '''
    Serves the home page
    '''
    return jsonify({'status': 'Home page is running fine'}), 200


@api_bp.route('/signup', methods=['POST'])
def sign_up():
    '''
    handles the sign up page
    '''
    # check if JSON or form submission
    if request.is_json:
        data = request.get_json()
        username = data.get("username")
        email = data.get("email")
        password = data.get("password")
    else:
        # form submission
        username = request.form.get("username")
        email = request.form.get("email")
        password  = request.form.get("password")
    
    if not username or not email or not password:
        return jsonify({"error": "username, email, and password are required"}), 400
    
    user, error = create_user(username, email, password)
    if error:
        return jsonify({"error": error}), 409
    
    return jsonify({"message": "Account created successfully"}), 201

