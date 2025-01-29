import os
import google.generativeai as genai
from flask import Flask, request, jsonify, render_template
from dotenv import load_dotenv
from flask_cors import CORS  # For cross-origin requests (if needed)

load_dotenv()
app = Flask(__name__)
CORS(app)  # Remove if not using a separate frontend server

# Configure Gemini
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel('gemini-pro')

# System prompt for agricultural expertise
SYSTEM_PROMPT = """You are an agricultural expert assistant for smallholder farmers. 
Provide concise, practical advice in simple language. Focus on:
- Crop/livestock management
- Pest/disease solutions
- Weather adaptation
- Low-cost sustainable practices
If unsure, say: "Please consult a local agriculture officer for confirmation."
"""

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/ask', methods=['POST'])
def ask_gemini():
    try:
        data = request.get_json()
        user_query = data.get('question', '').strip()
        
        if not user_query:
            return jsonify({"error": "Please ask a question."}), 400
        
        # Combine system prompt and user query
        full_prompt = f"{SYSTEM_PROMPT}\n\nQuestion: {user_query}\nAnswer:"
        
        # Generate response
        response = model.generate_content(
            full_prompt,
            safety_settings={
                'HARM_CATEGORY_HARASSMENT': 'BLOCK_NONE',
                'HARM_CATEGORY_HATE_SPEECH': 'BLOCK_NONE'
            }
        )
        
        return jsonify({"answer": response.text})
    
    except Exception as e:
        return jsonify({"error": f"Error: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)