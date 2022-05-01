from sqlalchemy import Column, String, Integer, Date, Float

from database import Base


class Dish(Base):
    __tablename__ = 'dishes'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    sweetness   = Column(Integer) # 甘さ
    solty = Column(Integer) # 渋さ
    hot         = Column(Integer) # 辛さ
    bitterness  = Column(Integer) # 苦さ
    sour        = Column(Integer) # 酸味

    def __init__(self, name, sweetness, solty, hot, bitterness, sour):
        self.name = name 
        self.sweetness = sweetness 
        self.solty = solty
        self.hot = hot
        self.bitterness = bitterness 
        self.sour = sour

    def __str__(self):
        return f'dish: id={self.id}, name={self.name},{self.sweetness},{self.solty},{self.hot},{self.bitterness},{self.sour}'

