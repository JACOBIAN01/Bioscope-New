from flask import Flask , render_template , jsonify
from flask_restful import Resource , Api
import json

app = Flask(__name__)
api = Api(app)



with open('movies.json') as f:
    movies = json.load(f)


class MovieAPI(Resource):
    def get(self):
        return jsonify(movies)
    
@app.route('/')
def index():
    return render_template('index.html')

api.add_resource(MovieAPI,'/api/movies')



if __name__ == '__main__':
    app.run(debug=True)
