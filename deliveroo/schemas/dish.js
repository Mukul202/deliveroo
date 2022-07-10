export default {
  name: "dish",
  title: "Dishes",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name of Dish",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      title: "Short Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "Price of dish",
      type: "number",
    },
    {
      name:"image",
      title:"Image of Dish",
      type:"image"
    }
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
