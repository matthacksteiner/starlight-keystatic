import { fields } from '@keystatic/core';
import { block } from '@keystatic/core/content-components';

export default {
  ImageUrl: block({
    label: 'ImageUrl',
    description: 'Füge ein Bild aus einer URL ein.',
    schema: {
      src: fields.text({
        label: 'Image Source',
        description: 'Path to the image file',
      }),
      alt: fields.text({
        label: 'Alt Text',
        description: 'Alternative text description of the image',
        defaultValue: '',
      }),
      caption: fields.text({
        label: 'Caption',
        description: 'Caption text displayed below the image',
        defaultValue: '',
      }),
    },
  }),
};