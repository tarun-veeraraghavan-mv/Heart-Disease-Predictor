from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd

app = Flask(__name__)
CORS(app=app)

with open("gs_heart_disease_prediction_model_1.pkl", "rb") as f:
    model = pickle.load(f)


@app.route("/")
def home():
    return "Hello from Flask in Jupyter!"


@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()  # Expecting JSON
    features = [
        "age",
        "sex",
        "cp",
        "trestbps",
        "chol",
        "fbs",
        "restecg",
        "thalach",
        "exang",
        "oldpeak",
        "slope",
        "ca",
        "thal",
    ]

    try:
        # Convert JSON to DataFrame
        input_data = pd.DataFrame([data], columns=features)
        prediction = model.predict(input_data)[0]
        print(prediction)
        return jsonify({"prediction": int(prediction)})
    except Exception as e:
        return jsonify({"error": str(e)}), 400


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
