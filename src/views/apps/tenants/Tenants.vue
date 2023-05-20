<template>
  <div id="user-list">
    <!-- list filters -->
    <v-card>
      <v-card-title>
        Search
      </v-card-title>

      <v-divider class="mt-4"></v-divider>

      <!-- actions -->
      <v-card-text class="d-flex align-center flex-wrap pb-0">
        <!-- search -->
        <v-text-field
          v-model="searchQuery"
          placeholder="Search tenants"
          outlined
          append-icon="mdi-magnify"
          hide-details
          dense
          class="user-search me-3 mb-4"
        >
        </v-text-field>

        <v-spacer></v-spacer>

        <div class="d-flex align-center flex-wrap">
          <v-btn
            color="secondary"
            outlined
            class="mb-4"
          >
            <v-icon
              size="17"
              class="me-1"
            >
              {{ icons.mdiExportVariant }}
            </v-icon>
            <span>Export</span>
          </v-btn>
        </div>
      </v-card-text>

      <!-- table -->
      <v-data-table
        v-model="selectedRows"
        :headers="tableColumns"
        :items="userListTable"
        :options.sync="options"
        :server-items-length="totalUserListTable"
        :loading="loading"
      >
        <!-- name -->
        <template #[`item.company`]="{item}">
          <div class="d-flex align-center">
            <v-avatar
              :color="item.avatar ? '' : 'primary'"
              :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
              size="32"
            >
              <v-img
                v-if="item.avatar"
                :src="require(`@/assets/images/avatars/${item.avatar}`)"
              ></v-img>
              <span
                v-else
                class="font-weight-medium"
              >{{ avatarText(item.company) }}</span>
            </v-avatar>

            <div class="d-flex flex-column ms-3">
              <router-link
                :to="{ name : 'apps-user-view', params : { id : item.id } }"
                class="text--primary font-weight-semibold text-truncate  text-decoration-none"
              >
                {{ item.company }}
              </router-link>
              <small>@{{ item.username }}</small>
            </div>
          </div>
        </template>

        <!-- Exchange -->
        <template #[`item.exchange`]="{item}">
          <div class="d-flex align-center">
            <v-avatar
              size="30"
              color="yellow"
              class="v-avatar-light-bg secondary--text me-3 cursor-pointer"
            >
              <v-icon
                size="18"
                color="#1976D2"
              >
                {{ resolveExchangeIcon(item.exchange) }}
              </v-icon>
            </v-avatar>
          </div>
        </template>

        <!-- M365 portal -->
        <template #[`item.title`]="{item}">
          <div class="d-flex align-center">
            <v-avatar
              size="30"
              :color="resolveM365IconColor(item.title)"
              class="v-avatar-light-bg error--text me-3 cursor-pointer"
            >
              <v-icon
                size="18"
                :color="resolveM365IconColor(item.title)"
              >
                {{ resolveM365Icon(item.title) }}
              </v-icon>
            </v-avatar>
            <span class="text-capitalize">{{ item.title }}</span>
          </div>
        </template>

        <!-- AAD portal -->
        <template #[`item.currentPlan`]="{item}">
          <div class="d-flex align-center">
            <v-avatar
              size="30"
              :color="resolveAzureIconColor(item.currentPlan)"
              class="v-avatar-light-bg light--text me-3 cursor-pointer"
            >
              <v-icon
                size="18"
                color="#82B1FF"
              >
                {{ resolveAzureIcon(item.currentPlan) }}
              </v-icon>
            </v-avatar>
          </div>
        </template>

        <!-- Teams portal -->
        <template #[`item.status`]="{item}">
          <div class="d-flex align-center">
            <v-avatar
              size="30"
              color="#2196F3"
              class="v-avatar-light-bg secondary--text me-3 cursor-pointer"
            >
              <v-icon
                size="18"
                color="#2196F3"
              >
                {{ resolveTeamsIcon(item.status) }}
              </v-icon>
            </v-avatar>
          </div>
        </template>

        <!-- Azure portal -->
        <template #[`item.country`]="{item}">
          <div class="d-flex align-center">
            <v-avatar
              size="30"
              :color="resolveAzureIconColor(item.country)"
              class="v-avatar-light-bg blue--text me-3 cursor-pointer"
            >
              <v-icon
                size="18"
                :color="resolveTeamsIconColor(item.country)"
              >
                {{ resolveAzureIcon(item.country) }}
              </v-icon>
            </v-avatar>
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
  mdiSquareEditOutline,
  mdiDotsVertical,
  mdiPlus,
  mdiFileDocumentOutline,
  mdiDeleteOutline,
  mdiExportVariant,
  mdiAccountOutline,
  mdiStackExchange,
  mdiMicrosoftDynamics365,
  mdiMicrosoftAzure,
  mdiMicrosoftTeams,
} from '@mdi/js'
import { onUnmounted, ref } from '@vue/composition-api'

// sidebar
import { avatarText } from '@core/utils/filter'
import store from '@/store'
import userStoreModule from './userStoreModule'

import useUsersList from './useUsersList'

export default {
  setup() {
    const USER_APP_STORE_MODULE_NAME = 'app-user'

    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    })

    const {
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
      resolveUserTotalIcon,
      resolveM365IconColor,
      resolveM365Icon,
      resolveAzureIcon,
      resolveAzureIconColor,
      resolveTeamsIconColor,
      resolveTeamsIcon,
    } = useUsersList()

    const isAddNewUserSidebarActive = ref(false)

    const roleOptions = [
      { title: 'Admin', value: 'admin' },
      { title: 'Author', value: 'author' },
      { title: 'Editor', value: 'editor' },
      { title: 'Maintainer', value: 'maintainer' },
      { title: 'Subscriber', value: 'subscriber' },
    ]

    const planOptions = [
      { title: 'Basic', value: 'basic' },
      { title: 'Company', value: 'company' },
      { title: 'Enterprise', value: 'enterprise' },
      { title: 'Standard', value: 'standard' },
    ]

    const statusOptions = [
      { title: 'Enabled', value: 'enabled' },
      { title: 'Disabled', value: 'disabled' },
    ]

    return {
      userListTable,
      tableColumns,
      searchQuery,
      roleFilter,
      planFilter,
      statusFilter,
      totalUserListTable,
      roleOptions,
      planOptions,
      statusOptions,
      loading,
      options,
      userTotalLocal,
      isAddNewUserSidebarActive,
      selectedRows,
      avatarText,
      resolveExchangeIconColor,
      resolveExchangeIcon,
      resolveM365IconColor,
      resolveM365Icon,
      resolveAzureIcon,
      resolveAzureIconColor,
      resolveTeamsIconColor,
      resolveTeamsIcon,
      resolveUserStatusVariant,
      resolveUserTotalIcon,
      fetchUsers,

      // icons
      icons: {
        mdiSquareEditOutline,
        mdiFileDocumentOutline,
        mdiDotsVertical,
        mdiDeleteOutline,
        mdiPlus,
        mdiExportVariant,
        mdiAccountOutline,
        mdiStackExchange,
        mdiMicrosoftDynamics365,
        mdiMicrosoftAzure,
        mdiMicrosoftTeams,
      },
    }
  },
}
</script>

<style lang="scss">
@import '@core/preset/preset/apps/user.scss';
</style>
