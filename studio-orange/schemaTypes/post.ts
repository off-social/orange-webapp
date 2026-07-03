import {defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.max(500),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'section',
      title: 'Content section',
      description:
        'Insights appear on Blogs, News on News & Events, Success Stories on the Blogs page.',
      type: 'string',
      options: {
        list: [
          {title: 'Insights (Blogs)', value: 'insights'},
          {title: 'News (News & Events)', value: 'news'},
          {title: 'Success Stories', value: 'success-stories'},
        ],
        layout: 'radio',
      },
      initialValue: 'insights',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Topic',
      description: 'Products or Industry — used for filtering on the Blogs page.',
      type: 'string',
      options: {
        list: [
          {title: 'Products', value: 'products'},
          {title: 'Industry', value: 'industry'},
        ],
        layout: 'radio',
      },
      hidden: ({parent}) => parent?.section !== 'insights',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const section = (context.parent as {section?: string})?.section
          if (section === 'insights' && !value) {
            return 'Topic is required for Insights posts'
          }
          return true
        }),
    }),
    defineField({
      name: 'featured',
      title: 'Featured on listing page',
      description: 'Highlights this post at the top of its content section.',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'readTime',
      title: 'Read time (minutes)',
      type: 'number',
      initialValue: 5,
      validation: (Rule) => Rule.required().min(1).max(60),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    validation: (Rule) =>
                      Rule.uri({
                        allowRelative: true,
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  }),
                  defineField({
                    name: 'openInNewTab',
                    title: 'Open in new tab',
                    type: 'boolean',
                    description: 'Use for external websites. Defaults to on for http(s) links.',
                    initialValue: true,
                  }),
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({name: 'alt', title: 'Alt text', type: 'string'}),
            defineField({name: 'caption', title: 'Caption', type: 'string'}),
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Published date, newest',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      date: 'publishedAt',
      section: 'section',
      category: 'category',
    },
    prepare({title, media, date, section, category}) {
      const subtitle = [section, category, date ? new Date(date).toLocaleDateString() : null]
        .filter(Boolean)
        .join(' · ')
      return {title, media, subtitle}
    },
  },
})
