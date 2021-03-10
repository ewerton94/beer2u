from leitos_covid.settings.db import Mongo
import cherrypy

from leitos_covid.states import States
from leitos_covid.cities import Cities
from leitos_covid.occupation import Occupation


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
    cherrypy.tree.mount(Cities(m), '/api/cities/', conf)
    cherrypy.quickstart(Occupation(), '/api/ocupation/', conf)
