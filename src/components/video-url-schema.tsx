import { fields } from '@keystatic/core';
import { block } from '@keystatic/core/content-components';

export default {
  VideoUrl: block({
    label: 'VideoUrl',
    description: 'Add a video from YouTube, Cloudinary, or direct video URL.',
    schema: {
      src: fields.text({
        label: 'Video Source',
        description: 'Enter YouTube URL, Cloudinary URL, or direct video file URL',
      }),
      alt: fields.text({
        label: 'Alt Text',
        description: 'Alternative text for the video (for accessibility)',
      }),
      caption: fields.text({
        label: 'Caption',
        description: 'Caption text displayed below the video',
        defaultValue: '',
      }),
    },
  }),
};