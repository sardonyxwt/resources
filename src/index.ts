const IMAGES_COUNT = 10;
const AVATARS_COUNT = 30;
const VIDEOS_COUNT = 1;
const INFINITE_FLAG = 0;

const preparePathsArray = (
    length: number,
    reducer: (index: number) => string,
) => {
    const resultArray: string[] = [];
    for (let i = 0; i < length; i++) {
        resultArray.push(reducer(i));
    }
    return resultArray;
};

export const buildImagePaths = (
    baseDir = './node_modules/@sardonyxwt/resources/lib',
): string[] => {
    return preparePathsArray(
        IMAGES_COUNT,
        (i) => `${baseDir}/public/img/${i + 1}.jpg`,
    );
};

export const buildAvatarPaths = (
    baseDir = './node_modules/@sardonyxwt/resources/lib',
): string[] => {
    return preparePathsArray(
        AVATARS_COUNT,
        (i) => `${baseDir}/public/img/avatar/avatar-${i + 1}.jpg`,
    );
};

export const buildVideoPaths = (
    baseDir = './node_modules/@sardonyxwt/resources/lib',
): string[] => {
    return preparePathsArray(
        VIDEOS_COUNT,
        (i) => `${baseDir}/public/video/${i + 1}.mp4`,
    );
};

export function* sourceListGenerator<T = string>(
    sources: T[],
    count = INFINITE_FLAG,
): Generator<T> {
    const initIndex = Math.floor(Math.random() * sources.length);
    for (
        let i = 0, currentSourceIndex = initIndex;
        i < count || count === INFINITE_FLAG;
        i++, currentSourceIndex++
    ) {
        if (currentSourceIndex >= sources.length) {
            currentSourceIndex = 0;
        }
        yield sources[currentSourceIndex];
    }
}

export function generateSource(sources: string[]): string {
    return sourceListGenerator(sources).next().value as string;
}

export function generateSourceList(
    sources: string[],
    count = INFINITE_FLAG,
): string[] {
    return Array.from(sourceListGenerator(sources, count));
}
