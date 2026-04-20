# Currencies

[![License](https://img.shields.io/badge/license-MIT-10b981.svg)](https://github.com/enso-ui/currencies/blob/master/LICENSE)
[![Stable](https://img.shields.io/badge/stable-5.2.6-2563eb.svg)](https://www.npmjs.com/package/@enso-ui/currencies)
[![Downloads](https://img.shields.io/npm/dm/@enso-ui/currencies.svg)](https://www.npmjs.com/package/@enso-ui/currencies)
[![Vue](https://img.shields.io/badge/vue-3.x-42b883.svg)](https://vuejs.org/)
[![JavaScript](https://img.shields.io/badge/javascript-ES2020-f7df1e.svg)](https://developer.mozilla.org/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/scss-supported-c6538c.svg)](https://sass-lang.com/)
[![npm](https://img.shields.io/badge/npm-package-cb3837.svg)](https://www.npmjs.com/package/@enso-ui/currencies)
[![Issues](https://img.shields.io/github/issues/enso-ui/currencies.svg)](https://github.com/enso-ui/currencies/issues)
[![Merge Requests](https://img.shields.io/github/issues-pr/enso-ui/currencies.svg)](https://github.com/enso-ui/currencies/pulls)

## Description

Currencies and exchange-rate administration pages for Enso UI.

## Installation

Install the package:

```bash
yarn add @enso-ui/currencies
```

This package is also available through the full `enso-ui` workspace bundle.

## Features

- ships the currencies and exchange-rates administration page modules
- exports the `Conversion` service used to call the backend conversion endpoint
- includes a reusable `Currencies` widget and the Pinia currency store helpers

## Usage

```js
import Conversion from '@enso-ui/currencies/src/services/Conversion';

const result = await new Conversion()
    .from(1)
    .to(2)
    .amount(100)
    .date('2026-04-20')
    .handle();
```

## API

### `CurrenciesIndex`

Currencies table page.

Import: `@enso-ui/currencies/src/bulma/pages/currencies/Index.vue`

### `ExchangeRatesIndex`

Exchange-rates table page.

Import: `@enso-ui/currencies/src/bulma/pages/exchangeRates/Index.vue`

### `Conversion`

Fluent service object for currency conversion requests.

Import: `@enso-ui/currencies/src/services/Conversion.js`

Methods:
- `from(id)`
- `to(id)`
- `amount(value)`
- `date(value)`
- `handle()`

## Depends On

- [`@enso-ui/filters`](https://docs.laravel-enso.com/frontend/filters.html) [↗](https://github.com/enso-ui/filters)
- [`@enso-ui/forms`](https://docs.laravel-enso.com/frontend/forms.html) [↗](https://github.com/enso-ui/forms)
- [`@enso-ui/tables`](https://docs.laravel-enso.com/frontend/tables.html) [↗](https://github.com/enso-ui/tables)
- [`@enso-ui/ui`](https://docs.laravel-enso.com/frontend/ui.html) [↗](https://github.com/enso-ui/ui)

## Contributions

are welcome. Pull requests are great, but issues are good too.

Thank you to all the people who already contributed to Enso!

## License

[MIT](https://github.com/enso-ui/currencies/blob/master/LICENSE)
