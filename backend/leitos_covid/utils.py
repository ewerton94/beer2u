from bson import json_util
import cherrypy


@cherrypy.expose
class BaseAPI():
    def response(self, data):
        return json_util.dumps(
            data,
            ensure_ascii=False
        ).encode('utf-8')
