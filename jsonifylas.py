from LAS import Converter
from flask import Flask, request, jsonify, render_template, make_response
import json
import html
from flask_cors import CORS

app = Flask(__name__,  template_folder='')
CORS(app)
@app.route('/')
def home():
  return render_template("homepage.html")

# @app.route('/test',methods=['POST'])
# def test():
#   return jsonify('hello world')

@app.route('/uploader', methods=['POST'])
def upload_file():
    if request.method == "POST":
        f = request.files['file']
        # read stream
        s = f.stream.readlines()

        # code for Las Converter
        c = Converter()
        lasstreams  = c.set_stream(s)

        #save diffrent streams of LAS file
        lasdata=lasstreams.get_json()

        # or get only assci/data
        # data = log.data

        return make_response(lasdata,200)

if __name__ =='__main__':
	app.run(debug=True)