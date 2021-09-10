import faunadb from 'faunadb';
// secret is deliberately left for testing purposes
const client = new faunadb.Client({
  secret: 'fnAESdKk-uAAQYEoMyyj_YlG99VoVZL8sAcw4oHk',
  domain: 'db.us.fauna.com',
  scheme: 'https',
});
const q = faunadb.query;
export const getAllProducts = client
  .query(q.Paginate(q.Match(q.Ref('indexes/all_products'))))
  .then((response: any) => {
    const productRef = response.data;
    const getAllDataQuery = productRef.map((ref: any) => {
      return q.Get(ref);
    });
    return client.query(getAllDataQuery).then(data => data);
  })
  .catch(error => console.error('Error: ', error.message));
