import { useState } from "react";
import axios from "axios";

export default function InputForm() {
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setPrediction(null);

    try {
      const response = await axios.post(
        "https://flask-test2-production.up.railway.app/predict",
        {
          ...formData,
          age: Number(formData.age),
          sex: Number(formData.sex),
          cp: Number(formData.cp),
          trestbps: Number(formData.trestbps),
          chol: Number(formData.chol),
          fbs: Number(formData.fbs),
          restecg: Number(formData.restecg),
          thalach: Number(formData.thalach),
          exang: Number(formData.exang),
          oldpeak: parseFloat(formData.oldpeak),
          slope: Number(formData.slope),
          ca: Number(formData.ca),
          thal: Number(formData.thal),
        }
      );
      setPrediction(response.data.prediction);
    } catch (err) {
      setError("Something went wrong. Please check your inputs.");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <form onSubmit={handleSubmit}>
        {[
          { name: "age", label: "1. Your current age:" },
          { name: "sex", label: "2. Your sex: (1 = male, 0 = female)" },
          {
            name: "cp",
            label:
              "3. Chest pain type (0: typical angina, 1: atypical angina, 2: non-anginal pain, 3: asymptomatic)",
          },
          { name: "trestbps", label: "4. Resting blood pressure (mm Hg)" },
          { name: "chol", label: "5. Serum cholesterol (mg/dl)" },
          {
            name: "fbs",
            label: "6. Fasting blood sugar > 120 mg/dl (1 = true, 0 = false)",
          },
          {
            name: "restecg",
            label:
              "7. Resting ECG (0: normal, 1: ST-T wave abnormality, 2: LV hypertrophy)",
          },
          { name: "thalach", label: "8. Maximum heart rate achieved" },
          {
            name: "exang",
            label: "9. Exercise-induced angina (1 = yes, 0 = no)",
          },
          { name: "oldpeak", label: "10. ST depression induced by exercise" },
          {
            name: "slope",
            label: "11. Slope of peak exercise ST (0 = up, 1 = flat, 2 = down)",
          },
          {
            name: "ca",
            label: "12. Number of major vessels (0–3) colored by fluoroscopy",
          },
          {
            name: "thal",
            label:
              "13. Thalassemia (0 = normal, 1 = fixed defect, 2 = reversible)",
          },
        ].map(({ name, label }) => (
          <div key={name} style={{ marginBottom: "1rem" }}>
            <label>{label}</label>
            <br />
            <input
              type="number"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>

      {prediction !== null && (
        <div style={{ marginTop: "1rem" }}>
          <p>
            <strong>Prediction:</strong>{" "}
            {prediction === 1
              ? "⚠️ High chance of heart disease"
              : "✅ Low chance of heart disease"}
          </p>
        </div>
      )}

      {error && (
        <div style={{ color: "red", marginTop: "1rem" }}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
