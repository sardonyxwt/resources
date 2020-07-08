const IMAGES_COUNT = 10;
const AVATARS_COUNT = 30;
const VIDEOS_COUNT = 1;

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
