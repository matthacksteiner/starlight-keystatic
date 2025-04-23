import { fields } from '@keystatic/core';

export const frontmatterSchema = {
  title: fields.slug({
    name: {
      label: 'Titel',
      validation: { isRequired: true },
      description:
        'Wird oben auf der Seite und in Browser-Tabs angezeigt.',
    },
  }),
  description: fields.text({
    label: 'Beschreibung',
    multiline: true,
    description:
      'Seitenbeschreibung für Metadaten, Suchmaschinen und Social-Media.',
  }),
  // slug: fields.text({
  //   label: 'Slug',
  //   description:
  //     'Sie können den generierten Slug eines Eintrags überschreiben, indem Sie Ihren eigenen Slug hinzufügen.',
  // }),
  // editUrl: fields.url({
  //   label: 'Bearbeiten-URL',
  //   description:
  //     'Überschreibt die globale editLink-Konfiguration. Auf false setzen, um den "Seite bearbeiten"-Link für eine bestimmte Seite zu deaktivieren oder eine alternative URL angeben, unter der der Inhalt dieser Seite bearbeitet werden kann.',
  // }),
  // template: fields.select({
  //   label: 'Vorlage',
  //   options: [
  //     { label: 'Dokument', value: 'doc' },
  //     { label: 'Splash', value: 'splash' },
  //   ],
  //   defaultValue: 'doc',
  //   description:
  //     "Legt die Layout-Vorlage für diese Seite fest. Seiten verwenden standardmäßig das 'doc'-Layout. Auf 'splash' setzen, um ein breiteres Layout ohne Seitenleisten zu verwenden, das für Landingpages gedacht ist.",
  // }),
  pagefind: fields.checkbox({
    label: 'In Suchergebnissen anzeigen',
    defaultValue: true,
    description:
      'Seite in Suchergebnissen anzeigen oder ausblenden.',
  }),
  draft: fields.checkbox({
    label: 'Entwurf',
    defaultValue: false,
    description:
      'Seite als Entwurf markieren. Entwürfe sind nur während der Entwicklung sichtbar.',
  }),
  // hero: fields.object(
  //   {
  //     title: fields.text({ label: 'Titel' }),
  //     tagline: fields.text({ label: 'Tagline' }),
  //     actions: fields.array(
  //       fields.object({
  //         text: fields.text({ label: 'Text' }),
  //         link: fields.text({ label: 'Link' }),
  //         icon: fields.select({
  //           label: 'Icon',
  //           options: iconsList,
  //           defaultValue: iconsList[0].value,
  //         }),
  //         variant: fields.select({
  //           label: 'Variante',
  //           options: [
  //             { label: 'Primär', value: 'primary' },
  //             { label: 'Sekundär', value: 'secondary' },
  //             { label: 'Minimal', value: 'minimal' },
  //           ],
  //           defaultValue: 'minimal',
  //         }),
  //       }),
  //       {
  //         label: 'Aktionen',
  //         itemLabel: data => data.fields.text.value,
  //       }
  //     ),
  //   },
  //   { label: 'Hero' }
  // ),
  sidebar: fields.object(
    {
      label: fields.text({
        label: 'Bezeichnung',
        description:
          'Legt die Bezeichnung für diese Seite in der Seitenleiste fest.',
      }),
      order: fields.number({
        label: 'Reihenfolge',
        description:
          'Legt die Position dieser Seite in der Link-Gruppe fest. Niedrigere Zahlen erscheinen weiter oben.',
      }),
      hidden: fields.checkbox({
        label: 'Ausblenden',
        defaultValue: false,
        description:
          'Seite wird nicht in automatisch generierten Seitenleisten angezeigt.',
      }),
      badge: fields.text({
        label: 'Badge',
        description:
          'Fügt der Seite in der Seitenleiste ein Badge hinzu, wenn sie in einer automatisch generierten Gruppe von Links angezeigt wird.',
      }),
    },
    {
      label: 'Seitenleiste',
      description:
        'Steuert, wie diese Seite in der Seitenleiste angezeigt wird.',
    }
  ),
};

