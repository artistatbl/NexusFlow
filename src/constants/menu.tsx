import CalIcon from '@/components/icons/cal-icon'
import WorkflowIcon from '@/components/icons/workflow-icon'
import DashboardIcon from '@/components/icons/dashboard-icon'
import EmailIcon from '@/components/icons/email-icon'
import IntegrationsIcon from '@/components/icons/integrations-icon'
import SettingsIcon from '@/components/icons/settings-icon'


type SIDE_BAR_MENU_PROPS = {
  label: string
  icon: JSX.Element
  path: string
}

export const SIDE_BAR_MENU: SIDE_BAR_MENU_PROPS[] = [
  {
    label: 'Dashboard',
    icon: <DashboardIcon />,
    path: 'dashboard',
  },
  {
    label: 'Workflows',
    icon: <WorkflowIcon />,
    path: 'workflows',
  },
  {
    label: 'connections',
    icon: <IntegrationsIcon />,
    path: 'connections',
  },
  {
    label: 'Settings',
    icon: <SettingsIcon />,
    path: 'settings',
  },
  {
    label: 'Appointments',
    icon: <CalIcon />,
    path: 'appointment',
  },
  {
    label: 'Email Marketing',
    icon: <EmailIcon />,
    path: 'email-marketing',
  },
]
