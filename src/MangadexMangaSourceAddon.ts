import {
  AbstractAddon,
  AbstractMangaSource,
  AbstractMangaSourceAddon,
  addonResourcesType,
  sourceSettingsType,
} from '@medialib/medialib-manga';
import MangadexSource from './MangadexSource';

export default class MangadexMangaSourceAddon extends AbstractMangaSourceAddon {
  constructor(instances: addonResourcesType, settings?: sourceSettingsType) {
    super(instances, settings);
  }

  public getSourceClass() {
    return MangadexSource as unknown as AbstractMangaSource;
  }

  public onInstall(): void {}

  public onUpdate(previous: AbstractAddon): void {}

  public onLoad(): void {}

  public onUnload(): void {}

  public onUninstall(): void {}
}
