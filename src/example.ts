import fs from 'fs';
import MangadexSource from './MangadexSource';
import { Readable } from 'stream';
import path from 'path';
import { Page } from '@medialib/medialib-manga';

const downloadFolder = path.normalize('./dl');

if (!fs.existsSync(downloadFolder))
  fs.mkdirSync(downloadFolder, { recursive: true });

const mangadexSource = new MangadexSource();
mangadexSource.setSettings({
  ...mangadexSource.getSettings(),
  defaultLanguage: 'en',
});

(async () => {
  const mangaFetchResult = await mangadexSource.fetch({ text: 'love is war' });

  const manga = mangaFetchResult.content[0];
  console.log('mangas found:', mangaFetchResult.content.length);
  console.log('first one:', manga);

  const chapterFetchResult = await mangadexSource.fetchChaptersByManga(
    manga,
    {}
  );

  const chapter = chapterFetchResult.content[0];
  console.log('chapters found:', chapterFetchResult.content.length);
  console.log('first one:', chapter);

  const pageFetchResult = await mangadexSource.fetchPagesByChapter(chapter, {});

  const page = pageFetchResult.content[2];

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
