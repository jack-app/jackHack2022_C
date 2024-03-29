from pydantic import BaseModel
from typing import List

class Params(BaseModel):
    sweetness: float
    solty: float
    hot: float
    bitterness: float
    sour: float


class Words(BaseModel):
    words: List[str] = []


class Dish(BaseModel):
    id :int
    img: str
    sweetness: int
    solty: int
    hot: int
    bitterness: int
    sour: int

    class Config:
        orm_mode = True