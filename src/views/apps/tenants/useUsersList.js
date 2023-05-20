import store from '@/store'
import {
  mdiAccountCheckOutline,
  mdiAccountOutline,
  mdiAccountPlusOutline,
  mdiAccountRemoveOutline,
  mdiCogOutline,
  mdiDatabaseOutline,
  mdiAccountConvertOutline,
  mdiPencilOutline,
  mdiMicrosoftTeams,
  mdiStackExchange,
  mdiMicrosoftDynamics365,
  mdiMicrosoftAzure,
} from '@mdi/js'
import { ref, watch } from '@vue/composition-api'

export default function useUsersList() {
  const userListTable = ref([])

  const tableColumns = [
    { text: 'COMPANY NAME', value: 'company' },
    { text: 'DEFAULT DOMAIN', value: 'email' },
    { text: 'M365 PORTAL', value: 'title' },
    { text: 'EXCHANGE PORTAL', value: 'exchange', sortable: false },
    { text: 'AAD PORTAL', value: 'currentPlan', sortable: false },
    { text: 'TEAM PORTAL', value: 'status', sortable: false },
	{ text: 'AZURE PORTAL', value: 'country', sortable: false },
  ]

  const searchQuery = ref('')
  const roleFilter = ref(null)
  const planFilter = ref(null)
  const statusFilter = ref(null)
  const totalUserListTable = ref(0)
  const loading = ref(false)
  const options = ref({
    sortBy: ['id'],
    sortDesc: [true],
  })
  const userTotalLocal = ref([])
  const selectedRows = ref([])

  // fetch data
  const fetchUsers = () => {
    store
      .dispatch('app-user/fetchUsers', {
        q: searchQuery.value,
        options: options.value,
        status: statusFilter.value,
        role: roleFilter.value,
        plan: planFilter.value,
      })
      .then(response => {
        const { filteredData, total, userTotal } = response.data

        userListTable.value = filteredData
        totalUserListTable.value = total
        userTotalLocal.value = userTotal
		
		//test
		console.log(userTotal)
        // remove loading state
        loading.value = false
      })
      .catch(error => {
        console.log(error)
      })
  }

  watch([searchQuery, roleFilter, planFilter, statusFilter, options], () => {
    loading.value = true
    selectedRows.value = []
    fetchUsers()
  })

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*


	
		const resolveExchangeIconColor = exchange => {
		
			return 'primary'
		}

		const resolveExchangeIcon = exchange => {
			
			return mdiStackExchange
		}
		
		const resolveM365IconColor = m365 => {
		
			return 'error'
		}

		const resolveM365Icon = m365 => {
			
			return mdiMicrosoftDynamics365
		}
		
		const resolveAzureIconColor = azure => {
		
			return 'primary'
		}

		const resolveAzureIcon = azure => {
			
			return mdiMicrosoftAzure
		}
		const resolveTeamsIconColor = azure => {
		
			return 'primary'
		}

		const resolveTeamsIcon = azure => {
			
			return mdiMicrosoftTeams
		}
		


  const resolveUserStatusVariant = status => {
    if (status === 'disabled') return 'warning'
    if (status === 'enabled') return 'success'

    return 'primary'
  }

  

  return {
    userListTable,
    tableColumns,
    searchQuery,
    roleFilter,
    planFilter,
    statusFilter,
    totalUserListTable,
    loading,
    options,
    userTotalLocal,
    selectedRows,
    fetchUsers,
    resolveExchangeIconColor,
    resolveExchangeIcon,
    resolveUserStatusVariant,
	resolveM365IconColor,
	resolveM365Icon,
	resolveAzureIcon,
	resolveAzureIconColor,
	resolveTeamsIconColor,
	resolveTeamsIcon,



  }
}
