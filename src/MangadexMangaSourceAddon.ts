import {
  AbstractAddon,
  AbstractMangaSource,
  AbstractMangaSourceAddon,
} from '@medialib/medialib-manga';
import MangadexSource from './MangadexSource';
import {
  mangadexSourceAddonDetails,
  mangadexSourceAddonResources,
} from './mangadexSourceAddonTypes';
import { mangadexSourceSettings } from './mangadexSourceTypes';

export default class MangadexMangaSourceAddon<
  T extends MangadexSource = MangadexSource,
  U extends mangadexSourceAddonDetails = mangadexSourceAddonDetails,
  V extends mangadexSourceAddonResources = mangadexSourceAddonResources,
  W extends mangadexSourceSettings = mangadexSourceSettings
> extends AbstractMangaSourceAddon<T, U, V, W> {
  public constructor(
    resources: V,
    details?: U,
    source = MangadexSource as unknown as new () => T
  ) {
    super(
      resources,
      { ...{ type: 'media-source.manga' }, ...details } as U,
      source
    );
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
