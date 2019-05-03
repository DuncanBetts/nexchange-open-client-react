const STATUS_CODES = {
  0: 'CANCELLED',
  8: 'REFUNDED',
  11: 'INITIAL',
  12: 'PAID_UNCONFIRMED',
  13: 'PAID',
  14: 'PRE_RELEASE',
  15: 'RELEASE',
  16: 'COMPLETED',
};

const BOOK_STATUS_CODES = {
  0: 'NEW',
  5: 'OPEN',
  10: 'CLOSED',
};

export { STATUS_CODES, BOOK_STATUS_CODES };
