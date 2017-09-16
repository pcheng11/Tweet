from flask import Flask
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class Search(FlaskForm):
    name = StringField('name', validators=[DataRequired()])