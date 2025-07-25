from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to GlamIntelligence"}

@app.get("/api/persona")
def get_persona():
    return {"name": "Glamintelle", "role": "Glam Strategist"}

@app.get("/api/respond")
def respond():
    return {"response": "Aura realigned. Let's glam."}