const { default: mock } = require('@/@fake-db/mock')

/* eslint-disable global-require */
const data = {
  users: [
    {
      id: 1,
      fullName: 'Sasa Zelic',
      company: 'Yotz PVT LTD',
      exchange: 'editor',
	  Title: 'IT Engineer',
      username: 'gslixby0',
      country: 'El Salvador',
      contact: '(479) 232-9151',
      email: 'domain.com',
      currentPlan: 'enterprise',
      status: 'disabled',
      avatar: '',
    },
    {
      id: 2,
      fullName: 'Halsey Redmore',
      company: 'Skinder PVT LTD',
      exchange: 'author',
      username: 'hredmore1',
      country: 'Albania',
      contact: '(472) 607-9137',
      email: 'domain.com',
      currentPlan: 'standard',
      status: 'disabled',
      avatar: '8.png',
    },
    {
      id: 3,
      fullName: 'Marjory Sicely',
      company: 'Oozz PVT LTD',
      exchange: 'maintainer',
      username: 'msicely2',
      country: 'Russia',
      contact: '(321) 264-4599',
      email: 'domain.com',
      currentPlan: 'enterprise',
      status: 'enabled',
      avatar: '1.png',
    },
	{
      id: 4,
      fullName: 'Marjory Sicely',
      company: 'Oozz PVT LTD',
      exchange: 'maintainer',
      username: 'msicely2',
      country: 'Russia',
      contact: '(321) 264-4599',
      email: 'domain.com',
      currentPlan: 'enterprise',
      status: 'enabled',
      avatar: '1.png',
    },
	{
      id: 5,
      fullName: 'Marjory Sicely',
      company: 'Oozz PVT LTD',
      exchange: 'maintainer',
      username: 'msicely2',
      country: 'Russia',
      contact: '(321) 264-4599',
      email: 'domain.com',
      currentPlan: 'enterprise',
      status: 'enabled',
      avatar: '1.png',
    },
	{
      id: 6,
      fullName: 'Galen Slixby',
      company: 'Yotz PVT LTD',
      exchange: 'editor',
	  Title: 'IT Engineer',
      username: 'gslixby0',
      country: 'El Salvador',
      contact: '(479) 232-9151',
      email: 'domain.com',
      currentPlan: 'enterprise',
      status: 'disabled',
      avatar: '',
    },
    {
      id: 7,
      fullName: 'Halsey Redmore',
      company: 'Skinder PVT LTD',
      exchange: 'author',
      username: 'hredmore1',
      country: 'Albania',
      contact: '(472) 607-9137',
      email: 'domain.com',
      currentPlan: 'standard',
      status: 'disabled',
      avatar: '8.png',
    },
    {
      id: 8,
      fullName: 'Marjory Sicely',
      company: 'Oozz PVT LTD',
      exchange: 'maintainer',
      username: 'msicely2',
      country: 'Russia',
      contact: '(321) 264-4599',
      email: 'domain.com',
      currentPlan: 'enterprise',
      status: 'enabled',
      avatar: '1.png',
    },
	{
      id: 9,
      fullName: 'Marjory Sicely',
      company: 'Oozz PVT LTD',
      exchange: 'maintainer',
      username: 'msicely2',
      country: 'Russia',
      contact: '(321) 264-4599',
      email: 'domain.com',
      currentPlan: 'enterprise',
      status: 'enabled',
      avatar: '1.png',
    },
	{
      id: 10,
      fullName: 'Marjory Sicely',
      company: 'Oozz PVT LTD',
      exchange: 'maintainer',
      username: 'msicely2',
      country: 'Russia',
      contact: '(321) 264-4599',
      email: 'domain.com',
      currentPlan: 'enterprise',
      status: 'enabled',
      avatar: '1.png',
    },
	{
      id: 11,
      fullName: 'Galen Slixby',
      company: 'Yotz PVT LTD',
      exchange: 'editor',
	  Title: 'IT Engineer',
      username: 'gslixby0',
      country: 'El Salvador',
      contact: '(479) 232-9151',
      email: 'domain.com',
      currentPlan: 'enterprise',
      status: 'disabled',
      avatar: '',
    },
    {
      id: 12,
      fullName: 'Halsey Redmore',
      company: 'Skinder PVT LTD',
      exchange: 'author',
      username: 'hredmore1',
      country: 'Albania',
      contact: '(472) 607-9137',
      email: 'domain.com',
      currentPlan: 'standard',
      status: 'disabled',
      avatar: '8.png',
    },
    {
      id: 13,
      fullName: 'Marjory Sicely',
      company: 'Oozz PVT LTD',
      exchange: 'maintainer',
      username: 'msicely2',
      country: 'Russia',
      contact: '(321) 264-4599',
      email: 'domain.com',
      currentPlan: 'enterprise',
      status: 'enabled',
      avatar: '1.png',
    },
	{
      id: 14,
      fullName: 'Marjory Sicely',
      company: 'Oozz PVT LTD',
      exchange: 'maintainer',
      username: 'msicely2',
      country: 'Russia',
      contact: '(321) 264-4599',
      email: 'domain.com',
      currentPlan: 'enterprise',
      status: 'enabled',
      avatar: '1.png',
    },
	{
      id: 15,
      fullName: 'Marjory Sicely',
      company: 'Oozz PVT LTD',
      exchange: 'maintainer',
      username: 'msicely2',
      country: 'Russia',
      contact: '(321) 264-4599',
      email: 'domain.com',
      currentPlan: 'enterprise',
      status: 'enabled',
      avatar: '1.png',
    },
    
  ],
}
/* eslint-enable */

// ------------------------------------------------
// GET: Return Users
// ------------------------------------------------

mock.onGet('/apps/ywuser/users').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', options = {}, status = null, role = null, plan = null } = config.params

  // eslint-disable-next-line object-curly-newline
  const { sortBy = [], sortDesc = [], page = 0, itemsPerPage = 0 } = options
  /* eslint-enable */

  const queryLowered = q.toLowerCase()

  let filteredData = data.users.filter(
    user =>
      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      (user.username.toLowerCase().includes(queryLowered) || user.fullName.toLowerCase().includes(queryLowered)) &&
      user.role === (role || user.role) &&
      user.currentPlan === (plan || user.currentPlan) &&
      user.status === (status || user.status),
  )
  /* eslint-enable  */

  // sorting
  if (sortBy.length === 1 && sortDesc.length === 1) {
    filteredData = filteredData.sort((a, b) => {
      const sortA = a[sortBy[0]]
      const sortB = b[sortBy[0]]

      if (sortDesc[0]) {
        if (sortA < sortB) return 1
        if (sortA > sortB) return -1

        return 0
      }

      if (sortA < sortB) return -1
      if (sortA > sortB) return 1

      return 0
    })
  }

  // user data total

  const userTotal = [
    { title: 'Licensed Users', total: '21' },
    { title: 'Enabled Users', total: '20' },
    { title: 'Disabled Users', total: '2' },
    { title: 'Global Admins', total: '1' },
  ]

  return [
    200,
    {
      filteredData:
        itemsPerPage !== -1 ? filteredData.slice((page - 1) * itemsPerPage, page * itemsPerPage) : filteredData,
      total: filteredData.length,
      userTotal,
    },
  ]
})

// ------------------------------------------------
// POST: Add new user
// ------------------------------------------------
mock.onPost('/apps/ywuser/users').reply(config => {
  // Get event from post data
  const { user } = JSON.parse(config.data)

  // Assign Status
  user.status = 'enabled'

  const { length } = data.users
  let lastIndex = 0
  if (length) {
    lastIndex = data.users[length - 1].id
  }
  user.id = lastIndex + 1

  data.users.push(user)

  return [201, { user }]
})

// ------------------------------------------------
// GET: Return Single User
// ------------------------------------------------
mock.onGet(/\/apps\/ywuser\/users\/\d+/).reply(config => {
  // Get event id from URL
  let userId = config.url.substring(config.url.lastIndexOf('/') + 1)

  // Convert Id to number
  userId = Number(userId)

  const userIndex = data.users.findIndex(e => e.id === userId)
  const user = data.users[userIndex]
  Object.assign(user, {
    taskDone: 1230,
    projectDone: 568,
    taxId: 'Tax-8894',
    language: 'English',
  })

  if (user) return [200, user]

  return [404]
})
