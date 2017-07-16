import config from './config'
import express from 'express'

const server = express()


server.get('/', (req, res) => {
   console.log(req.headers)
  var info ={}
  info.ip_address = req.headers['x-forwarded-for'].split(',')[0]
  if(req.headers['accept-language'] == 'en-GB,en-US;q=0.8,en;q=0.6'){
  info.language = req.headers['accept-language'].split(',')[1].split(';')[0]
  }
  else{
    info.language = req.headers['accept-language'].split(',')[0]
  }
  info.operating_System = req.headers['user-agent'].split('(')[1].split(')')[0]
  res.send(info)
})


server.listen(config.port, () => {
    console.info('Express Listening on port:', config.port)
})
