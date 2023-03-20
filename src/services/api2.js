import axios from 'axios'

//base da URL = https://app.timmit.com.br/api/v1/usuarios, https://app.timmit.com.br/v2/api/usuario

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJHUlVDT0RJR08iOjIsIlNFRENPRElHTyI6MiwiTk9NRSI6InRlc3RlMiIsIkVNQUlMIjoiZW1haWxAdGVzdGUyLmNvbSIsIkxPR0lOIjoidGVzdGUyIiwiU0VOSEEiOiJzZW5oYTIiLCJORUNFU1NJVEFUUk9DQVNFTkhBIjpmYWxzZSwiQ09OVEFCTE9RVUVBREEiOmZhbHNlLCJVU1VBUklPSU5TRVJDQU8iOjIsIkRBVEFJTlNFUkNBTyI6IjIwMTgtMDgtMjJUMTc6MDI6MDkuODMzIiwiVVNVQVJJT01PRElGSUNBQ0FPIjoyLCJEQVRBTU9ESUZJQ0FDQU8iOiIyMDE4LTA4LTIyVDE3OjAyOjA5LjgzMyIsIkFUSVZPIjp0cnVlfQ.1mJGcsMMmpRRjyLyeysgxx8vRtBE5Sz0nzkY4QTSFYc'

const api = axios.create({
  baseURL: 'https://app.timmit.com.br/v2/api/usuario',

})

export default api