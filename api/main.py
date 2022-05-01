from fastapi import FastAPI, Depends, HTTPException
import json
from sqlalchemy.orm import Session
from starlette.middleware.cors import CORSMiddleware 

import crud, models, schemas
from database import SessionLocal, engine
from seed import seed
import word2vec as wv

models.Base.metadata.create_all(bind=engine)
db = SessionLocal()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True, 
    allow_methods=["*"],
    allow_headers=["*"]
)

seed(db=db)

def makeResponseDataByWords(words):
    param = wv.calcParamByWords(words)
    l = []
    for dish in db.query(models.Dish).all():
        similarity = wv.calcSimilarityByParam(dish, param)
        l.append((similarity, dish))
    l.sort(key = lambda x: x[0], reverse=True)
    data = []
    for i in range(5):
        _, d = l[i]
        data.append(
            {
                "name": d.name,
                "img": d.id
            }
        )
    res_dict: dict = {
        "param": param,
        "data": data
    }
    return res_dict
 

def makeResponseDataByParam(param):
    l = []
    for dish in db.query(models.Dish).all():
        similarity = wv.calcSimilarityByParam(dish, param)
        l.append((similarity, dish))
    l.sort(key = lambda x: x[0], reverse=True)
    data = []
    for i in range(5):
        _, d = l[i]
        data.append(
            {
                "name": d.name,
                "img": d.id
            }
        )
    res_dict: dict = {
        "param": param,
        "data": data
    }
    return res_dict


@app.post('/searchByWords/')
async def searchByWords(words: schemas.Words):
    res = makeResponseDataByWords(words.words)
    return res




@app.post("/searchByParam/")
async def searchByParam(param: schemas.Params):
    res = makeResponseDataByParam(param)
    return res
 
db.close()