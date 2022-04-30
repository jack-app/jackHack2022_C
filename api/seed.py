import pandas as pd
from sqlalchemy.orm import Session
import models

def Load_Data(file_name):
    data = pd.read_csv(file_name, header=0)
    return data.values.tolist()

def seed(db: Session):
    file_name = "sample.csv"
    data = Load_Data(file_name)
    
    dd = models.Dish(name="sample",sweetness=0, astringency=0, hot=0, bitterness=0, sour=0)
    db.add(dd)

    for d in data:
        record = models.Dish(
            name=d[0], 
            sweetness=int(d[1]),
            astringency=int(d[2]),
            hot=int(d[3]),
            bitterness=int(d[4]),
            sour=int(d[5])
        )
        db.add(record)
        # print(record)
    db.commit()