import { collection, config, fields } from '@keystatic/core';
import asideSchema from 'src/components/aside-schema';
import badgeSchema from 'src/components/badge-schema';
import cardGridSchema from 'src/components/card-grid-schema';
import cardSchema from 'src/components/card-schema';
import fileTreeSchema from 'src/components/file-tree-schema';
import iconSchema from 'src/components/icon-schema';
import linkButtonSchema from 'src/components/link-button-schema';
import linkCardSchema from 'src/components/link-card-schema';
import stepsSchema from 'src/components/steps-schema';
import tabsSchema from 'src/components/tabs-schema';
import imageUrlSchema from 'src/components/image-url-schema';
import videoUrlSchema from 'src/components/video-url-schema';
import { frontmatterSchema } from 'src/content/docs/frontmatter-schema';



// Helper function to create the shared MDX schema
const createMdxSchema = () => ({
  ...frontmatterSchema,
  content: fields.mdx({
    label: 'Content',
    options: {
      code: false,
      codeBlock: false,
      image: false,
    },
    components: {
      ...asideSchema,
      ...badgeSchema,
      ...cardSchema,
      ...fileTreeSchema,
      ...iconSchema,
      ...linkButtonSchema,
      ...linkCardSchema,
      ...stepsSchema,
      ...tabsSchema,
      ...cardGridSchema,
      ...imageUrlSchema,
      ...videoUrlSchema,
    },
  }),
});



// Collection definitions
const sections = [
  { key: 'einleitung', label: 'Einleitung', directory: 'einleitung' },
  { key: 'abschluss', label: 'Abschluss', directory: 'abschluss' },
];

// Generate collections object
const collections = Object.fromEntries(
  sections.map(({ key, label, directory }) => [
    key,
    collection({
      label,
      path: `src/content/docs/${directory}/**`,
      slugField: 'title',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: createMdxSchema(),
    }),
  ])
);

export default config({
  storage: import.meta.env.DEV === true ? { kind: "local" } : { kind: "cloud" },
  cloud: { project: 'dba-communications/atp-eb-docs' },
  ui: {
    brand: {
      name: 'ATP Starlight',
    },
  },
  collections,
  singletons: {},

});
