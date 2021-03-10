import pandas as pd


def simplify_data(df: pd.DataFrame):
    '''
    Clean DataFrame
    '''
    df: pd.DataFrame
    cols = [
        'estado',
        'municipio',
        'nomeCnes',
        'dataNotificacaoOcupacao',
        'ofertaHospUti',
        'ofertaSRAGUti',
        'ocupHospUti',
        'ocupSRAGUti',
        'ofertaRespiradores'
    ]
    return df[cols]


def get_ocupation_media(df: pd.DataFrame, filtro: pd.Series, uti_type: str):
    sub_df = df.loc[
        filtro,
        [f'ocup{uti_type}Uti', f'oferta{uti_type}Uti']
    ]
    sub_df = sub_df[f'ocup{uti_type}Uti'] / sub_df[f'oferta{uti_type}Uti']
    sub_df[sub_df > 1] = 1
    # print(sub_df)
    return (sub_df).mean()


def get_calculated_data(data: list):
    '''
    Get Calculated Data
    data: <list>

    return: dict: {
        'data': <dict>,
        'respiradoresTotal': <int>,
        'mediaOcupacaoSRAGUti': <float>,
        'hospitaisAcima'> <float>
    }
    '''
    df = pd.DataFrame(data)
    df = simplify_data(df)
    df['dispSRAGUti'] = df['ofertaSRAGUti'] - df['ocupSRAGUti']
    df = df[~df['dispSRAGUti'].isna()]
    # print(df)
    # df['dispSRAGUti'] = df['ofertaSRAGUti'] - df['ocupSRAGUti']
    filtro_hosp = df['dispSRAGUti'] >= 0
    percOcupacaoSRAGUti = get_ocupation_media(df, filtro_hosp, 'SRAG')
    # filtro_srag = df['dispSRAGUti'] > 0
    # percOcupacaoSRAGUti = get_ocupation_media(df, filtro_srag, 'SRAG')
    acimaCapacidade = df.loc[
        ~filtro_hosp,
        'dispSRAGUti'
    ]
    # print(df.count())
    return {
        'data': df.to_dict('r'),
        'respiradoresTotal': int(df['ofertaRespiradores'].sum() or 0),
        'mediaOcupacaoSRAGUti': percOcupacaoSRAGUti,
        # 'mediaOcupacaoSRAGUti': percOcupacaoSRAGUti,
        'hospitaisAcima': int(acimaCapacidade.count() or 0)
    }
