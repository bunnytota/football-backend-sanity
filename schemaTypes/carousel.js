export default {
  name: 'carousel',
  title: 'Carousel',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'asset',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true, // Enable hotspot for better image cropping
              },
            },
          ],
        },
      ],
    },
  ],
};
