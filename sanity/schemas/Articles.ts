export default {
  name: "article",
  title: "Articles",
  type: "document",
  groups: [
    {
      name: "main",
      title: "Main",
      default: true,
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    { name: "title", title: "Title", type: "string", group: "main" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      group: "main",
    },
    { name: "banner", title: "Banner", type: "image", group: "main" },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      group: "main",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      group: "main",
    },
    // SEO FIELDS
    { name: "seoTitle", title: "SEO Title", type: "string", group: "seo" },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "string",
      group: "seo",
    },
  ],
};
