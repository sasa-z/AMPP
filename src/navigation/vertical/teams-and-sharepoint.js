import { mdiCheckboxMarkedCircleOutline, 
mdiContentCopy,
mdiMicrosoftTeams,
mdiMicrosoftOnedrive,
mdiMicrosoftSharepoint,
 } from '@mdi/js'

export default [
  {
    subheader: 'TEAMS & SHAREPOINT',
  },
  {
    title: 'Teams',
    icon: mdiMicrosoftTeams,
    children: [
      {
        title: 'Autocomplete',
        to: 'form-autocomplete',
      },
      {
        title: 'Checkbox',
        to: 'form-checkbox',
      },
      {
        title: 'Combobox',
        to: 'form-combobox',
      },
      {
        title: 'Date Picker',
        to: 'form-datepicker',
      },
      {
        title: 'File Input',
        to: 'form-file-input',
      },
      {
        title: 'Month Picker',
        to: 'form-month-picker',
      },
      {
        title: 'Radio',
        to: 'form-radio',
      },
      {
        title: 'Range Slider',
        to: 'form-range-slider',
      },
      {
        title: 'Rating',
        to: 'form-rating',
      },
      {
        title: 'Select',
        to: 'form-select',
      },
      {
        title: 'Slider',
        to: 'form-slider',
      },
      {
        title: 'Switch',
        to: 'form-switch',
      },
      {
        title: 'Textarea',
        to: 'form-textarea',
      },
      {
        title: 'Textfield',
        to: 'form-textfield',
      },
      {
        title: 'Time Picker',
        to: 'form-time-picker',
      },
    ],
  },
  {
    title: 'OneDrive',
    to: 'form-layout',
    icon: mdiMicrosoftOnedrive,
  },
  {
    icon: mdiMicrosoftSharepoint,
    title: 'Sharepoint',
    to: 'form-validation',
  },
  {
    title: 'Tables',
    icon: mdiContentCopy,
    children: [
      {
        title: 'Simple Table',
        to: 'table-simple',
      },
      {
        title: 'Datatable',
        to: 'table-data-table',
      },
    ],
  },
]
