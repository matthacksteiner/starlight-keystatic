import { fields } from '@keystatic/core';
import { inline } from '@keystatic/core/content-components';
import { iconsList } from 'src/data/const';

export default {
  Icon: inline({
    label: 'Icon',
    description:
      'Starlight bietet eine Reihe von gängigen Icons, die Sie in Ihrem Inhalt mit der <Icon>-Komponente anzeigen können.',
    schema: {
      name: fields.select({
        label: 'Icon',
        options: iconsList,
        defaultValue: iconsList[0].value,
      }),
      color: fields.text({ label: 'Icon color' }),
      size: fields.text({ label: 'Icon size' }),
    },
  }),
};
