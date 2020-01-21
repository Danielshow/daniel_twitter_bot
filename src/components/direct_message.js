import Twitter from '../twit'
import { sendMessage } from '../helpers'

const autoDirectMessage = () => {
  const stream = Twitter.stream('user')
  stream.on('follow', sendMessage)
}