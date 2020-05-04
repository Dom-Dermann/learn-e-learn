// single value providers go here

import { InjectionToken } from '@angular/core';

export const lookupListToken = new InjectionToken('lookupListToken');

export const lookupList = {
    genders: ['Male', 'Female', 'Diverse']
  }

export const colors = {
  primary: '#5183FC',
  secondary: '#4059AD',
  terciary: '#253C78',
  quaternary: '#686868'
}
