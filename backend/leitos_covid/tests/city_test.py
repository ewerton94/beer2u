# from unittest.mock import patch

import cherrypy
from cherrypy.test import helper
# from cherrypy.lib.sessions import RamSession
from leitos_covid.cities import Cities


TEST = [1, 2, 3]
TEST_STR = '[1, 2, 3]'


class ob:
    pass


class Mongo():

    def get_col(self, col):
        s = ob
        s.find = lambda state: TEST
        return s


class CityTest(helper.CPWebCase):

    def setup_server():
        m = Mongo()
        conf = {
            '/': {
                'request.dispatch': cherrypy.dispatch.MethodDispatcher(),
                'tools.sessions.on': True,
                'tools.response_headers.on': True,
                'tools.response_headers.headers': [
                    ('Content-Type', 'text/plain')
                ],
                'tools.auth_digest.accept_charset': 'UTF-8',
                'tools.encode.encoding': 'utf-8'
            }
        }
        cherrypy.tree.mount(Cities(m), '/', conf)
    setup_server = staticmethod(setup_server)

    def test_check_two_plus_two_equals_four(self):
        # <code to set session variable to 2 here>
        # sess_mock = RamSession()
        # sess_mock['Number'] = 2
        # with patch('cherrypy.session', sess_mock, create=True):
        #    # Inside of this block all manipulations with `cherrypy.session`
        #    # actually access `sess_mock` instance instead
        self.getPage("/")
        self.assertStatus('200 OK')
        self.assertBody(TEST_STR)
