from sqlalchemy import Column, String, Integer, Date, Float

from database import Base


class Dish(Base):
    __tablename__ = 'dishes'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    sweetness   = Column(Integer) # 甘さ
    astringency = Column(Integer) # 渋さ
    hot         = Column(Integer) # 辛さ
    bitterness  = Column(Integer) # 苦さ
    sour        = Column(Integer) # 酸味

    def __init__(self, name, sweetness, astringency, hot, bitterness, sour):
        self.name = name 
        self.sweetness = sweetness 
        self.astringency = astringency
        self.hot = hot
        self.bitterness = bitterness 
        self.sour = sour

    def __str__(self):
        return f'dish: id={self.id}, name={self.name},{self.sweetness},{self.astringency},{self.hot},{self.bitterness},{self.sour}'

