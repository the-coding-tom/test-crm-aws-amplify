const randomColor = () => {
  let letters = 'ABCDEF0123456789'
  let len = 6
  let result = '#'
  for (let i = 0; i < len; i++) {
    result += letters[parseInt(Math.random() * letters.length)]
  }
  return result
}

const notify = {
  error: {
    title: 'Error',
    variant: 'danger',
    solid: true
  },
  sucess: {
    title: 'Success',
    variant: 'success',
    solid: true
  }
}

const parseRoomdate = (data, vm) => {
  const roomAvaila = data.split(',')
  const roomAvailability = []
  roomAvaila.forEach(data => {
    let weekday = []
    let timeof = []
    let lookup = {
      su: 0,
      mo: 1,
      tu: 2,
      we: 3,
      th: 4,
      fr: 5,
      sa: 6
    }
    const timeData = data.split(' ')
    if (timeData.length === 2) {
      weekday.push(timeData[0])
      timeof.push(timeData[1])
    }
    if (timeData.length === 3) {
      weekday.push(timeData[1])
      timeof.push(timeData[2])
    }
    const splitWeekday = weekday[0].split('-')
    const splitTimeOf = timeof[0].split('-')
    const AStruc = {
      from: '',
      to: '',
      weekdays: []
    }
    splitWeekday.forEach(week => {
      AStruc.weekdays.push(lookup[week])
    })
    AStruc.from = vm.$moment(splitTimeOf[0], 'HH').format('hh:mm')
    AStruc.to = vm.$moment(splitTimeOf[1], 'HH').format('hh:mm')
    roomAvailability.push(AStruc)
  })
  return roomAvailability
}

const undoParse = (data, vm) => {
  let str = ''
  const lookup = {
    0: 'su',
    1: 'mo',
    2: 'tu',
    3: 'we',
    4: 'th',
    5: 'fr',
    6: 'sa'
  }
  data.forEach(item => {
    let available = ''
    item.weekdays.forEach(day => {
      available += `${lookup[day]}-`
    })
    available = available.slice(0, -1)
    let weekdayfrom = item.from.charAt(0) + item.from.charAt(1)
    let weekdayto = item.to.charAt(0) + item.to.charAt(1)
    available += ` ${weekdayfrom}-${weekdayto}`
    str += `${available},`
  })
  str = str.slice(0, -1)
  return str
}

export default { randomColor, parseRoomdate, notify, parseRoomdate, undoParse }
