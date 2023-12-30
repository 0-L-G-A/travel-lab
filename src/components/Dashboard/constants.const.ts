import { ROLES } from 'routes/constants/roles.const';

const navPanelBase = {

}

export const NAV_PANEL_CONFIG = {
  [ROLES.mainAdmin]: {
    navPanelBase,
    group: true,
    link: false,
    childElements: [
      {
        link: true,
        group: false,
      },
    ],
  },
  [ROLES.admin]: {
    navPanelBase,

  },
  [ROLES.customer]: {
    navPanelBase,

  },
  [ROLES.dispatcher]: {
    navPanelBase,

  },
  [ROLES.driver]: {
    navPanelBase,

  },
}