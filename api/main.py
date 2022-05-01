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
        # print(dish)
        similarity = wv.calcSimilarityByParam(dish, param)
        l.append((similarity, dish))
    l.sort(key = lambda x: x[0], reverse=True)
    # print(l)
    data = []
    for i in range(5):
        # print(i)
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
        # print(dish)
        similarity = wv.calcSimilarityByParam(dish, param)
        l.append((similarity, dish))
    l.sort(key = lambda x: x[0], reverse=True)
    # print(l)
    data = []
    for i in range(5):
        # print(i)
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
 
@app.post("/mock/")
async def mock():
    sample_res_dict: dict = {
        "param": {
            "sweetness": 0, 
            "solty": 0, 
            "hot": 0, 
            "bitterness": 0, 
            "sour": 0
            },
        "dishes": [
            {
                "name": "sample",
                "img": "img"
            },
            {
                "name": "sample",
                "img": "img"
            },
            {
                "name": "sample",
                "img": "img"
            },
            {
                "name": "sample",
                "img": "img"
            },
            {
                "name": "sample",
                "img": "img"
            },
        ]
    }

    return json.dumps(sample_res_dict)



db.close()