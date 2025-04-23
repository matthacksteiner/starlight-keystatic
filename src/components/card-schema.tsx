import { fields } from '@keystatic/core';
import { wrapper } from '@keystatic/core/content-components';
import { iconsList } from 'src/data/const';

export default {
  Card: wrapper({
    label: 'Card',
    description:
      'Sie können Inhalte in einer Box mit Starlight-Stilen mithilfe der <Card>-Komponente anzeigen.',
    schema: {
      title: fields.text({ label: 'Title' }),
      icon: fields.select({
        label: 'Icon',
        options: iconsList,
        defaultValue: iconsList[0].value,
      }),
    },
  }),
};
