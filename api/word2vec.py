import gensim
import schemas
import math

model = gensim.models.KeyedVectors.load_word2vec_format('entity_vector/entity_vector.model.bin',binary=True,limit=None)

def calcParamByWords(words):
    ret = schemas.Params(sweetness=0.2,solty=0.2,hot=0.2,bitterness=0.2,sour=0.2)

    count = 0
    for w in words:
        if w in model:
            ret.sweetness   += model.similarity("甘い"    , w)
            ret.solty       += model.similarity("塩辛い"  , w)
            ret.hot         += model.similarity("辛い"    , w)
            ret.bitterness  += model.similarity("苦い"    , w)
            ret.sour        += model.similarity("酸味"    , w)
            count += 1
        else: 
            # 一旦モデルに存在しなかったら、何もしない方向で調整
            continue

    if count == 0:
        ret = schemas.Params(sweetness=0.5,solty=0.5,hot=0.5,bitterness=0.5,sour=0.5)

    return ret

def calcSimilarityByParam(dish, param: schemas.Params):
    # print(dish.sweetness)
    print(param)
    ret = dish.sweetness * param.sweetness \
        + dish.solty * param.solty\
        + dish.hot * param.hot\
        + dish.bitterness * param.bitterness\
        + dish.sour * param.sour

    paramNorm = math.sqrt(param.sweetness ** 2 + param.solty ** 2 + param.hot ** 2 + param.bitterness ** 2 + param.sour ** 2)

    ret /= paramNorm 
    return ret


 