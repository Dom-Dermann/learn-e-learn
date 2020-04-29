// single value providers go here

import { InjectionToken } from '@angular/core';

export const lookupListToken = new InjectionToken('lookupListToken');

export const lookupList = {
    genders: ['Male', 'Female', 'Diverse']
  }