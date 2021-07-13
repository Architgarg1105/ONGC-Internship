from LAS import Converter
from flask import Flask, request, jsonify, render_template, make_response
import json
import html

app = Flask(__name__,  template_folder='')

@app.route('/')
def upload():
  return render_template("homepage.html")

@app.route('/uploader', methods=['GET', 'POST'])
def upload_file():
    if request.method == "POST":
        f = request.files['file']

        # read stream
        stream = f.stream.readlines()

        # code for Las Converter
        c = Converter()
        log  = c.set_stream(stream)

        #save diffrent streams of LAS file
        log_in_json=log.get_json()

        # or get only assci/data
        data = log.data

        return make_response(log_in_json,200)

if __name__ =='__main__':
	app.run(debug=True)