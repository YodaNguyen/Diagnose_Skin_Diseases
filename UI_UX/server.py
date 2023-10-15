from flask import Flask, render_template, request, jsonify

from chatbot.chat import get_response

# Khởi tạo Flask
app = Flask(__name__)

# Hàm xử lý request
@app.route("/", methods=['GET'])
def home_page():
    return render_template('index.html')

@app.route("/chatbot", methods=["POST"])
def chatting():
    text = request.get_json().get("message")
    # TODO: check if text is valid
    response = get_response(text)
    message = {"answer": response}
    return jsonify(message)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False)