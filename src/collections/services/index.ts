import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import { generatePreviewPath } from '@/utilities/generatePreviewPath'
import { CollectionConfig } from 'payload'
import { fileURLToPath } from 'url'
import path from 'path'
import { slugField } from '@/fields/slug'
import { revalidateDelete, revalidateServices } from './hooks/revalidateServices'
import { populatePublishedAt } from '@/hooks/populatePublishedAt'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { hero } from '@/heros/config'
import { CallToAction } from '@/blocks/CallToAction/config'
import { Content } from '@/blocks/Content/config'
import { MediaBlock } from '@/blocks/MediaBlock/config'
import { Archive } from '@/blocks/ArchiveBlock/config'
import { FormBlock } from '@/blocks/Form/config'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Services: CollectionConfig<'services'> = {
  slug: 'services',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, locale, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'services',
          locale: String(locale) || 'en',
          req,
        })

        return path
      },
    },
    preview: (data, { locale, req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'services',
        locale: String(locale) || 'en',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              localized: true,
              blocks: [CallToAction, Content, MediaBlock, Archive, FormBlock],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },

    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField(),
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    // {
    //   name: 'slug',
    //   type: 'slug',
    //   required: true,
    //   unique: true,
    // },
  ],
  hooks: {
    afterChange: [revalidateServices],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  // upload: {
  //   // Upload to the public/media directory in Next.js making them publicly accessible even outside of Payload
  //   staticDir: path.resolve(dirname, '../../public/media'),
  //   adminThumbnail: 'thumbnail',
  //   focalPoint: true,

  //   imageSizes: [
  //     {
  //       name: 'thumbnail',
  //       width: 300,
  //     },
  //     {
  //       name: 'square',
  //       width: 500,
  //       height: 500,
  //     },
  //     {
  //       name: 'small',
  //       width: 600,
  //     },
  //     {
  //       name: 'medium',
  //       width: 900,
  //     },
  //     {
  //       name: 'large',
  //       width: 1400,
  //     },
  //     {
  //       name: 'xlarge',
  //       width: 1920,
  //     },
  //     {
  //       name: 'og',
  //       width: 1200,
  //       height: 630,
  //       crop: 'center',
  //     },
  //   ],
  // },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
