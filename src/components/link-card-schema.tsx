import { fields } from '@keystatic/core';
import { block } from '@keystatic/core/content-components';

export default {
  LinkCard: block({
    label: 'Link card',
    description:
      'Verwenden Sie die <LinkCard>-Komponente, um prominent auf verschiedene Seiten zu verlinken.',
    schema: {
      title: fields.text({
        label: 'Text',
        validation: { isRequired: true },
      }),
      href: fields.url({
        label: 'Link',
        description: 'Should start with https://',
        validation: { isRequired: true },
      }),
      description: fields.text({
        label: 'Description',
      }),
    },
  }),
};
