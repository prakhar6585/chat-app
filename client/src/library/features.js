

export const fileFormat = (url) => {
    const fileExt = url.split('.').pop();

    if (fileExt === 'mp4' || fileExt === 'webm' || fileExt === 'ogg')
        return "video"
    if (fileExt === 'jpg' || fileExt === 'jpeg' || fileExt === 'png' || fileExt === 'gif')
        return "image"
    if (fileExt === 'mp3' || fileExt === 'wav')
        return "audio"
    return "file"
};

export const transformImg = (url = "", width = 100) => url