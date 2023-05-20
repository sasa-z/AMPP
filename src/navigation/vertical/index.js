import IdentityManagement from './identity-management'
import dashboard from './dashboard'
import teamsAndSharepoint from './teams-and-sharepoint'
import others from './others'
import tenantAdministration from './tenant-administration'

// Array of sections
export default [...dashboard, ...IdentityManagement, ...tenantAdministration, ...teamsAndSharepoint, ...others]
