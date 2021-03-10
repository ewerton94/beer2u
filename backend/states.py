from .utils import BaseAPI


class States(BaseAPI):

    def __init__(self, db):
        self.db = db

    def getStates(self):
        return list(self.db.get_col('states').find())

    def GET(self):
        return self.response(self.getStates())
