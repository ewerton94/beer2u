from .utils import BaseAPI


class Cities(BaseAPI):

    def __init__(self, db):
        self.db = db

    def getCities(self, state):
        return list(self.db.get_col('cities').find({'state': state}))

    def GET(self, state='AL'):
        return self.response(self.getCities(state))
