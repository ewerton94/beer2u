from ..utils import BaseAPI
from ..settings.es import es
from .calc_scores import get_calculated_data
from datetime import datetime


class Occupation(BaseAPI):
    def __init__(self):
        pass

    def getScores(self, data: list):
        '''
        Get Calculated data from list.
        data: <list>: List of sources from from Elastic Search

        return: data <dict>
        '''
        return get_calculated_data(data)

    def getBody(self, query: dict):
        '''
        Get Body to filter on Elastic Search

        query: <dict>: Items for search
        '''
        return {
            "size": 500,
            "query":
                {
                    "match":
                        query
                }
        }

    def getOccupation(self, state: str):
        '''
        Get ocupatio Data from Elastic Search

        '''
        d = datetime.now()
        query = {
            'estadoSigla': state
        }
        res = es.search(
            index="leito_ocupacao",
            body=self.getBody(query)
        )
        data = list(res['hits']['hits'])
        data = [e['_source'] for e in data]
        r = self.getScores(data)
        print(datetime.now() - d)
        return r

    def GET(self, state: str = 'DF'):
        return self.response(self.getOccupation(state))
