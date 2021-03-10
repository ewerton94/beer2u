from pymongo import MongoClient
import environ


class Mongo():
    def __init__(self):
        env = environ.Env()
        # reading .env file
        environ.Env.read_env()

        # False if not in os.environ
        DATABASE_URL = env('DATABASE_URL')
        self.client = MongoClient(DATABASE_URL)
        self.db = self.client.ocupacao

    def get_col(self, col):
        return self.db[col]


if __name__ == '__main__':
    m = Mongo()
    states = [s for s in m.get_col('states').find()]
    print(states)
