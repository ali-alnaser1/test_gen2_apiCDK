


from fastapi import FastAPI, Query, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum
import uvicorn

app = FastAPI()
handler = Mangum(app)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create an endpoint for health check
@app.get("/checkConnection")
async def read_root():
    return {"Hello": "World"}

if __name__ == "__main__":    
    
# Specify the host and port for local debugging
    uvicorn.run(app, host="0.0.0.0", port=8000)