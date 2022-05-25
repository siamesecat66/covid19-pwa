import React, { memo, useState, useCallback, useEffect } from 'react'
import Api from '../../api'
import { ContainerStyled } from './style'

function Main() {

    const [data, setData] = useState({})
    const [country, setCountry] = useState('brazil')

    const getCovidData = useCallback((country) => {
        Api.getCountry(country)
            .then(data => console.log(data))
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    return (
        <ContainerStyled>
            <div ClassName="mb-2">

            </div>

        </ContainerStyled>
    )
}

export default memo(Main)