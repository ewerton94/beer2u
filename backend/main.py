from db import Mongo
import cherrypy

from .states import States
from .cities import Cities


if __name__ == '__main__':
    m = Mongo()
    conf = {
        '/': {
            'request.dispatch': cherrypy.dispatch.MethodDispatcher(),
            'tools.sessions.on': True,
            'tools.response_headers.on': True,
            'tools.response_headers.headers': [('Content-Type', 'text/plain')],
            'tools.auth_digest.accept_charset': 'UTF-8',
            'tools.encode.encoding': 'utf-8'
        }
    }
    cherrypy.tree.mount(States(m), '/api/states/', conf)
    cherrypy.quickstart(Cities(m), '/api/cities/', conf)
