import React, { useState } from 'react';
import { TextInput, FormsyComponent } from '../../components/commons';

const Stock = () => {
  const [stockTicker, setStockTicker] = useState('');

  console.log({ ' stockTicker ': stockTicker });

  const onSubmit = (obj: any) => {
    console.log({ ' obj ': obj });
  };

  return (
    <FormsyComponent onSubmit={onSubmit}>
      <TextInput
        value={stockTicker}
        name={'stocksTicker'}
        label={'Stocks Ticker'}
        id={'stocksTicker'}
        onValueChange={(val) => setStockTicker(val)}
        type={'text'}
      />
    </FormsyComponent>
  );
};

Stock.getInitialProps = async () => {
  // let apiKey = `apiKey=${process.env.STOCK_API_KEY}`
  // const res = await fetch(`https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2020-06-17?${apiKey}`)
  // const json = await res.json()
  // console.log({" JSON ": json})
  return {
    data: 'This is Testing',
  };
};

export default Stock;
