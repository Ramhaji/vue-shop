import numberFormat from '@/helpers/numberFormat';

export default function priceFormat(arg) {
  let ans = '';

  if (typeof arg !== 'number' || arg < 0) {
    ans = 'Цену уточните у продавца';
  } else {
    ans = `${numberFormat(arg)} ₽`;
  }

  return ans;
}
