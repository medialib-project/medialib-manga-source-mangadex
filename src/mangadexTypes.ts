import { sourceSettingsType } from '@medialib/medialib-manga';

export interface mangadexSourceSettingsType extends sourceSettingsType {
  url?: string;
  userAgent?: string;
  languages?: Array<string>;
}
