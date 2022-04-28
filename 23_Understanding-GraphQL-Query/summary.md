# (23) Understanding GraphQL Query

## Resume

4 poin yang di pelajari:

1. Query - Multiple related data sources
2. Query - Multiple unrelated data sources
3. Query - Fragments
4. Query with Apollo client

### Query - Multiple related data sources

kita dapat menggunakan query untuk mendapatkan data dengan mutiple data dimana jika kita ingin menampilkan dari 2 table kita bisa menggunakan query yang berhubungan.

### Query - Multiple unrelated data sources

kita dapat menampilkan query yang berbeda seperti jika kita ingin menampilkan data movie dan kita juga menampilkan data books walaupun tidak ada relasi.

### Query - Fragments

ini dapat dikatakan sebuah template dimana kita dapat menggunakannya berulangkali dan ini juga dapat digunakan pada mutation.

### Query with Apollo client

untuk menggunakan query pada apollo dapat menggunakan dengan cara tag `ApolloQuery`, kemudian pada method menggunakan `apollo:{}`, lalu menggunakan `const nama-query = gql`sintaks query` `

sebelumnya install apollo pada project dengan sintaks `npm install --save vue-apollo graphql apollo-boost` lalu depedensi lainnya juga

kemudian menambahkan beberapa fungsi seperti httplink, apolloClient, VueApollo, apolloProvider dan lain-lain.
