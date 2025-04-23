import { fields } from '@keystatic/core';
import { repeating, wrapper } from '@keystatic/core/content-components';
import { iconsList } from 'src/data/const';

export default {
  Tabs: repeating({
    label: 'Tabs',
    description:
      'Sie können eine Registerkarten-Oberfläche mit den Komponenten <Tabs> und <TabItem> anzeigen.',
    children: ['TabItem'],
    schema: {
      syncKey: fields.text({
        label: 'Sync key',
        description:
          'Halten Sie mehrere Registerkarten-Gruppen synchronisiert, indem Sie das syncKey-Attribut hinzufügen.',
      }),
    },
  }),
  TabItem: wrapper({
    label: 'Tab',
    schema: {
      label: fields.text({ label: 'Label', validation: { isRequired: true } }),
      icon: fields.select({
        label: 'Icon',
        options: iconsList,
        defaultValue: iconsList[0].value,
      }),
    },
  }),
};
