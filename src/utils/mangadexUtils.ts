import { Chapter, objectUtils } from '@medialib/medialib-manga';
import { rawAggregateVolumes, rawManga, rawTag } from '../rawTypes';

export function getRawTagsWithPreferences(
  rawTags: Array<rawTag>,
  preferences: Array<string>
) {
  return rawTags
    .map<string | undefined>((tag) =>
      objectUtils.getValueFromKeysWithPreferencesOrFirst(
        tag.attributes.name,
        preferences
      )
    )
    .filter((tag) => tag) as Array<string>;
}

export function getRawGenresWithPreferences(
  rawTags: Array<rawTag>,
  preferences: Array<string>
) {
  return getRawTagsWithPreferences(
    rawTags.filter((tag) => tag.attributes.group === 'genre'),
    preferences
  );
}

export function getRawThemesWithPreferences(
  rawTags: Array<rawTag>,
  preferences: Array<string>
) {
  return getRawTagsWithPreferences(
    rawTags.filter((tag) => tag.attributes.group === 'theme'),
    preferences
  );
}

export function getRawFormatsWithPreferences(
  rawTags: Array<rawTag>,
  preferences: Array<string>
) {
  return getRawTagsWithPreferences(
    rawTags.filter((tag) => tag.attributes.group === 'format'),
    preferences
  );
}

export function getAuthorIdFromRawManga(rawManga: rawManga) {
  return rawManga.relationships.find((relation) => relation.type === 'author')
    ?.id;
}

export function flattenRawVolumes(rawAggregateVolumes: rawAggregateVolumes) {
  return Object.values(rawAggregateVolumes).flatMap((volume) =>
    Object.entries(volume.chapters).flatMap(([number, chapter]) =>
      [...chapter.others, chapter.id].map((id) => ({ number, id }))
    )
  );
}

export function sortChaptersByNumberAsc(chapters: Array<Chapter>) {
  return chapters.sort(
    (c1, c2) => parseFloat(c1.getNumber()) - parseFloat(c2.getNumber())
  );
}
