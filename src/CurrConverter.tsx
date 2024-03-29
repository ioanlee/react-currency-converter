import { divide, runInContext } from 'lodash'
import React, { FC, useEffect, useState } from 'react'
import { CurrConverterRow } from './CurrConverterRow'

interface Props {
  currencyOptions: {
    [key: string]: number
  },
}

export const CurrConverter = ({ currencyOptions }: Props) => {

  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('RUB')
  const [exchangeRate, setExchangeRate] = useState(1) //useState(1 / currencyOptions[fromCurrency] * currencyOptions[toCurrency])
  const [isFromAmount, setIsFromAmount] = useState(true)

  // default value in useState() outputs NaN, this is a workaround
  if (isNaN(exchangeRate)) setExchangeRate(1 / currencyOptions[fromCurrency] * currencyOptions[toCurrency]) 

  let fromAmount:number, toAmount:number
  if (isFromAmount) {
    fromAmount = amount
    toAmount = Number((amount * exchangeRate).toFixed(2))
  } else {
    toAmount = amount
    fromAmount = Number((amount / exchangeRate).toFixed(2))
  }

  useEffect(() => {
    setExchangeRate(1 / currencyOptions[fromCurrency] * currencyOptions[toCurrency])
    toAmount = fromAmount / currencyOptions[fromCurrency] * currencyOptions[toCurrency]
  }, [toCurrency, fromCurrency])

  function reverse() {
    const saved = fromCurrency
    setFromCurrency(toCurrency)
    setToCurrency(saved)
  }
  const handleChangeToAmount = (e: any) => { setAmount(e.target.value); setIsFromAmount(false) }
  const handleChangeFromAmount = (e: any) => { setAmount(e.target.value); setIsFromAmount(true) }
  const handleChangeToCurrency = (e: any) => setToCurrency(e.target.value)
  const handleChangeFromCurrency = (e: any) => setFromCurrency(e.target.value)

  return (
    <div className='currency-section'>
      <h2>Converter</h2>
      <CurrConverterRow 
        amount={fromAmount}
        selected={fromCurrency}
        currencyOptions={currencyOptions}
        onChangeAmount={handleChangeFromAmount}
        onChangeCurrency={handleChangeFromCurrency}
      />
      {`1 ${fromCurrency} = ${Number((1 / currencyOptions[fromCurrency] * currencyOptions[toCurrency]).toFixed(2))} ${toCurrency}`}
      <CurrConverterRow 
        amount={toAmount}
        selected={toCurrency}
        currencyOptions={currencyOptions}
        onChangeAmount={handleChangeToAmount}
        onChangeCurrency={handleChangeToCurrency}
      />
      <button onClick={reverse}>Reverse currency</button>
    </div>
  )
}
