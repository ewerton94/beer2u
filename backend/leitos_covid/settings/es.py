from elasticsearch import Elasticsearch


es = Elasticsearch(
    ['elastic-leitos.saude.gov.br'],
    http_auth=('user-api-leitos', 'aQbLL3ZStaTr38tj'),
    scheme="https",
    port=443,
)
# print(es.info())
