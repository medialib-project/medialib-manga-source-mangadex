import fs from 'fs';
import { Readable } from 'stream';
import path from 'path';
import { Page } from '@medialib/medialib-manga';
import MangadexMangaSourceAddon from './MangadexMangaSourceAddon';

const downloadFolder = path.normalize('./dl');

if (!fs.existsSync(downloadFolder))
  fs.mkdirSync(downloadFolder, { recursive: true });

const sourceAddon = new MangadexMangaSourceAddon({});
const source = sourceAddon.getSource();

source.setSettings({
  ...source.getSettings(),
  defaultLanguage: 'fr',
});

(async () => {
  const mangaFetchResult = await source.fetch({ text: 'love is war' });

  const manga = mangaFetchResult.content[0];
  console.log('mangas found:', mangaFetchResult.content.length);
  console.log('first one:', manga);

  const chapterFetchResult = await source.fetchChaptersByManga(manga, {});

  const chapter = chapterFetchResult.content[0];
  console.log('chapters found:', chapterFetchResult.content.length);
  console.log('first one:', chapter);

  const pageFetchResult = await source.fetchPagesByChapter(chapter, {});

  const page = pageFetchResult.content[1];

  console.log('chapters found:', pageFetchResult.content.length);
  console.log('first one:', page);

  const pageName = 'page 1';

  console.log(`downloading ${pageName}...`);

  await savePage(page, pageName);

  console.log(`${pageName} downloaded with success!`);
})();

async function savePage(page: Page, name: string) {
  const downloadInfo = await page.getDetails().download();
  if (downloadInfo) {
    const writeStream = fs.createWriteStream(
      path.join(downloadFolder, `${name}.${downloadInfo.type}`),
      { autoClose: true }
    );
    Readable.from(downloadInfo.data).pipe(writeStream);
    return new Promise((resolve, reject) => {
      writeStream.on('finish', resolve);
      writeStream.on('error', reject);
    });
  }
}
