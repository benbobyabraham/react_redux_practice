import React from 'react';

export default function CurrencyRow(props) {
  const {
      currencyOptions,
      selectedCurrency,
      onChangeCurrency,
      onChangeAmount,
      amount
  } = props
    return (
    <div>
      <input className="input" type="text" value={amount} onChange={onChangeAmount}></input>
      <select value={selectedCurrency} onChange={onChangeCurrency}>
          {currencyOptions.map(option => (
              <option key={option} value={option}>{option}</option>
          ))}
          
      </select>
    </div>
  )
}
