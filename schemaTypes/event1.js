export default {
    name: 'event1',
    title: 'Event1',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        
        {
            name: 'product',
            title: 'Product',
            type: 'string',
        },
        
        {
            name: 'cutprice',
            title: 'Cutprice',
            type: 'string',
        },

        {
            name: 'newprice',
            title: 'NewPrice',
            type: 'string',
        },

    ],
};