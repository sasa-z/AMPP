import {
  mdiAccountOutline,
  mdiCalendarOutline,
  mdiEmailOutline,
  mdiFileDocumentOutline,
  mdiFileOutline,
  mdiMessageTextOutline,
  mdiPoll,
  mdiAccountCog,
} from '@mdi/js'

export default [
  {
    subheader: 'IDENTITY MANAGEMENT',
  },
  {
    title: 'Administration',
    icon: mdiAccountCog,
    children: [
	  {
        title: 'Users',
		badge: 'new',
		badgeColor: 'success',
        to: 'tenant-users',
      },
      {
        title: 'User list',
        to: 'apps-user-list',
      },
      {
        title: 'Groups',
        to: { name: 'apps-user-view', params: { id: 21 } },
      },
	  {
        title: 'Offboarding',
        to: 'apps-calendar',
      },
    ],
  },
  {
    title: 'Reports',
    icon: mdiPoll,
    children: [
      
     
      {
        title: 'Devices',
        to: 'page-account-settings',
      },
      {
        title: 'Roles',
        href: 'https://www.google.com',
      },
      {
        title: 'MFA Report',
        href: 'https://www.google.com',
      },
      {
        title: 'Basic Auth Report',
        href: 'https://www.google.com',
      },
    ],
  },
]
