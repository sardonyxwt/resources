const IMAGES_COUNT = 10;
const AVATARS_COUNT = 30;
const VIDEOS_COUNT = 1;

export const buildImagePaths = (
    baseDir = './node_modules/@sardonyxwt/resources/lib',
): string[] => {
    return new Array(IMAGES_COUNT).map(
        (_, i) => `${baseDir}/public/img/${i}.jpg`,
    );
};

export const buildAvatarPaths = (
    baseDir = './node_modules/@sardonyxwt/resources/lib',
): string[] => {
    return new Array(AVATARS_COUNT).map(
        (_, i) => `${baseDir}/public/img/avatar/avatar-${i}.jpg`,
    );
};

export const buildVideoPaths = (
    baseDir = './node_modules/@sardonyxwt/resources/lib',
): string[] => {
    return new Array(VIDEOS_COUNT).map(
        (_, i) => `${baseDir}/public/video/${i}.mp4`,
    );
};
