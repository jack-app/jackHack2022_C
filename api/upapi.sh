uvicorn main:app --reload --host=0.0.0.0


# curl -X POST -H "Content-Type: application/json" http://localhost:8000/searchByWords/ --data '{"words":["あまみ","悲しい"]}'

# curl -X POST -H "Content-Type: application/json" http://localhost:8000/searchByParam/ --data '{"sweetness": 0, "astringency": 0, "hot": 0, "bitterness": 0, "sour": 1}'