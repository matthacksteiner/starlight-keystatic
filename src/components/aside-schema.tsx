import { fields } from '@keystatic/core';
import { wrapper } from '@keystatic/core/content-components';

export default {
  Aside: wrapper({
    label: 'Aside',
    description:
      'Nützlich für die Anzeige von zusätzlichen Informationen neben dem Hauptinhalt einer Seite.',
    schema: {
      title: fields.text({ label: 'Title' }),
      type: fields.select({
        label: 'Type',
        defaultValue: 'note',
        options: [
          {
            label: 'Note',
            value: 'note',
          },
          {
            label: 'Tip',
            value: 'tip',
          },
          {
            label: 'Caution',
            value: 'caution',
          },
          {
            label: 'Danger',
            value: 'danger',
          },
        ],
      }),
    },
  }),
};
