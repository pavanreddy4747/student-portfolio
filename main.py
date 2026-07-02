from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Contact(BaseModel):
    name: str
    email: str
    message: str

@app.get("/")
def home():
    return {"status": "backend working"}

@app.post("/contact")
def contact(data: Contact):
    return {"message": f"Thanks {data.name}, your message was received successfully."}