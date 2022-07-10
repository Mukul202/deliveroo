export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Restaurant Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image of Restaurant",
      type: "image",
    },
    {
      name: "lat",
      title: "Latitude",
      type: "number",
    },
    {
      name: "long",
      type: "number",
      title: "Longitude of Restaurant",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a Rating between (1-5 Stars)",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a value between 1 and 5"),
    },
    {
      name:"type",
      title:"Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{type: "category"}]
    },
    {
      name:"dishes",
      type:"array",
      title:"Dishes",
      of:[ { type:"reference",to:[{type:"dish"}]}]
    }
  ],

  preview: {
    select: {
      title: "title",
      author: "restaurant.name",
      media: "image",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
