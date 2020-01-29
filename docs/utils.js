exports.replaceId = function(transaction, idPlaceholder, newId) {
  transaction.id = transaction.id.replace(idPlaceholder, newId);
  transaction.request.uri = transaction.request.uri.replace(idPlaceholder, newId);
  transaction.fullPath = transaction.fullPath.replace(idPlaceholder, newId);
  return transaction;
}
