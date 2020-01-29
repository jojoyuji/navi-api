const hooks = require('hooks');
const { replaceId } = require('../../docs/utils.js')

const shared = {};


function interpolateTransactionId(transaction, done) {
  // console.log(transaction);
  const { id } = shared;
  transaction = replaceId(transaction, 'meuid', id)
  done()
}

hooks.after('Users > create', (transaction) => {
  shared.id = JSON.parse(transaction.real.body)._id;
});
hooks.before('User > show', interpolateTransactionId);
hooks.before('User > update', interpolateTransactionId);
hooks.before('User > delete', interpolateTransactionId);
