from ..models.user import User
from ..extensions import db, bcrypt


def create_user(username, email, password):
    if User.query.filter_by(email=email).first():
        return None, "Email already exists"
    if User.query.filter_by(username=username).first():
        return None, "Username already exists"

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    user = {
        'username': username,
        "email": email,
        "password": hashed_password
    }
    user = User(username=username, email=email, password=hashed_password)
    print(user)
    db.session.add(user)
    db.session.commit()
    return user, None
