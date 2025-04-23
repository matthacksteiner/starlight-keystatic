import { fields } from '@keystatic/core';
import { repeating } from '@keystatic/core/content-components';

export default {
  CardGrid: repeating({
    label: 'Card Grid',
    description:
      'Umschließen Sie mehrere Karten mit der <CardGrid>-Komponente, um Karten nebeneinander anzuzeigen, wenn genügend Platz vorhanden ist.',
    children: ['Card', 'LinkCard'],
    schema: {
      stagger: fields.checkbox({
        label: 'Stagger',
        description:
          'Verschiebt die zweite Spalte der Karten vertikal und fügt visuelles Interesse hinzu.',
      }),
    },
  }),
};
