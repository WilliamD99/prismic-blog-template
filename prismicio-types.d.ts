// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Article → Topics*
 */
export interface ArticleDocumentDataTopicsItem {
  /**
   * Topic field in *Article → Topics*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: article.topics[].topic
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  topic: prismic.ContentRelationshipField<"topic">;
}

type ArticleDocumentDataSlicesSlice =
  | VideoBlockSlice
  | CustomerLogosSlice
  | HeroSlice
  | ImageSlice
  | QuoteSlice
  | TextSlice
  | ContactFormSlice;

/**
 * Content for Article documents
 */
interface ArticleDocumentData {
  /**
   * Title field in *Article*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title of the article
   * - **API ID Path**: article.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Publish Date field in *Article*
   *
   * - **Field Type**: Date
   * - **Placeholder**: Date the article was published
   * - **API ID Path**: article.publishDate
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  publishDate: prismic.DateField;

  /**
   * Featured Image field in *Article*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article.featuredImage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  featuredImage: prismic.ImageField<never>;

  /**
   * Short Description field in *Article*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.short_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  short_description: prismic.RichTextField;

  /**
   * Topics field in *Article*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: article.topics[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  topics: prismic.GroupField<Simplify<ArticleDocumentDataTopicsItem>>;

  /**
   * Author field in *Article*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: article.author
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  author: prismic.ContentRelationshipField<"author">;

  /**
   * Slice Zone field in *Article*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: article.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ArticleDocumentDataSlicesSlice> /**
   * Meta Title field in *Article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: article.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: article.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Article*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Article document from Prismic
 *
 * - **API ID**: `article`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticleDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ArticleDocumentData>,
    "article",
    Lang
  >;

/**
 * Item in *Author → Social Group*
 */
export interface AuthorDocumentDataSocialGroupItem {
  /**
   * Facebook Link field in *Author → Social Group*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: author.social_group[].facebook_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  facebook_link: prismic.LinkToMediaField;

  /**
   * Instagram Link field in *Author → Social Group*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: author.social_group[].instagram_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  instagram_link: prismic.LinkToMediaField;

  /**
   * Twitter Link field in *Author → Social Group*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: author.social_group[].twitter_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  twitter_link: prismic.LinkToMediaField;

  /**
   * LinkedIn Link field in *Author → Social Group*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: author.social_group[].linkedin_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  linkedin_link: prismic.LinkToMediaField;
}

/**
 * Content for Author documents
 */
interface AuthorDocumentData {
  /**
   * Author Name field in *Author*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: author.author_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  author_name: prismic.KeyTextField;

  /**
   * Author Bio field in *Author*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: author.author_bio
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  author_bio: prismic.RichTextField;

  /**
   * Author Logo field in *Author*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: author.author_logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  author_logo: prismic.ImageField<never>;

  /**
   * Social Group field in *Author*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: author.social_group[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  social_group: prismic.GroupField<Simplify<AuthorDocumentDataSocialGroupItem>>;
}

/**
 * Author document from Prismic
 *
 * - **API ID**: `author`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AuthorDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<AuthorDocumentData>, "author", Lang>;

/**
 * Item in *Navigation → Links*
 */
export interface NavigationDocumentDataLinksItem {
  /**
   * Label field in *Navigation → Links*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Optional - Label for the link
   * - **API ID Path**: navigation.links[].label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.TitleField;

  /**
   * Link field in *Navigation → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for navigation item
   * - **API ID Path**: navigation.links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Homepage Label field in *Navigation*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Label for the homepage link
   * - **API ID Path**: navigation.homepageLabel
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  homepageLabel: prismic.TitleField;

  /**
   * Links field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | CustomerLogosSlice
  | HeroSlice
  | ImageSlice
  | QuoteSlice
  | TextSlice
  | ContactFormSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title for the page
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Name field in *Settings*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Name of your blog (e.g. your name)
   * - **API ID Path**: settings.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.TitleField;

  /**
   * Description field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Short description of your blog
   * - **API ID Path**: settings.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Profile Picture field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.profilePicture
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  profilePicture: prismic.ImageField<never>;

  /**
   * Newsletter Description field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text above the sign up form
   * - **API ID Path**: settings.newsletterDescription
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  newsletterDescription: prismic.RichTextField;

  /**
   * Newsletter Disclaimer field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Small text below sign up form
   * - **API ID Path**: settings.newsletterDisclaimer
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  newsletterDisclaimer: prismic.RichTextField;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

/**
 * Content for Topic documents
 */
interface TopicDocumentData {
  /**
   * Name field in *Topic*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: topic.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Description field in *Topic*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: topic.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Feature Image field in *Topic*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: topic.feature_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  feature_image: prismic.ImageField<never> /**
   * Meta Title field in *Topic*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: topic.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Topic*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: topic.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Topic*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: topic.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Topic document from Prismic
 *
 * - **API ID**: `topic`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TopicDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<TopicDocumentData>, "topic", Lang>;

export type AllDocumentTypes =
  | ArticleDocument
  | AuthorDocument
  | NavigationDocument
  | PageDocument
  | SettingsDocument
  | TopicDocument;

/**
 * Default variation for ContactForm Slice
 *
 * - **API ID**: `default`
 * - **Description**: ContactForm
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *ContactForm*
 */
type ContactFormSliceVariation = ContactFormSliceDefault;

/**
 * ContactForm Shared Slice
 *
 * - **API ID**: `contact_form`
 * - **Description**: ContactForm
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSlice = prismic.SharedSlice<
  "contact_form",
  ContactFormSliceVariation
>;

/**
 * Primary content in *CustomerLogos → Default → Primary*
 */
export interface CustomerLogosSliceDefaultPrimary {
  /**
   * eyebrowHeadline field in *CustomerLogos → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.default.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  eyebrowHeadline: prismic.RichTextField;

  /**
   * callToActionLabel field in *CustomerLogos → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.default.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *CustomerLogos → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.default.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Primary content in *CustomerLogos → Items*
 */
export interface CustomerLogosSliceDefaultItem {
  /**
   * image field in *CustomerLogos → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * link field in *CustomerLogos → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for CustomerLogos Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CustomerLogosSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CustomerLogosSliceDefaultPrimary>,
  Simplify<CustomerLogosSliceDefaultItem>
>;

/**
 * Slice variation for *CustomerLogos*
 */
type CustomerLogosSliceVariation = CustomerLogosSliceDefault;

/**
 * CustomerLogos Shared Slice
 *
 * - **API ID**: `customer_logos`
 * - **Description**: CustomerLogos
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CustomerLogosSlice = prismic.SharedSlice<
  "customer_logos",
  CustomerLogosSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * eyebrowHeadline field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: hero.default.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * callToActionLabel field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Hero → Image Right → Primary*
 */
export interface HeroSliceImageRightPrimary {
  /**
   * eyebrowHeadline field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: hero.imageRight.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * callToActionLabel field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Image Right variation for Hero Slice
 *
 * - **API ID**: `imageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceImageRight = prismic.SharedSliceVariation<
  "imageRight",
  Simplify<HeroSliceImageRightPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceImageRight;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Image → Default → Primary*
 */
export interface ImageSliceDefaultPrimary {
  /**
   * Image field in *Image → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Caption field in *Image → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Optional - Caption under the image
   * - **API ID Path**: image.default.primary.caption
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  caption: prismic.RichTextField;
}

/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Image → Wide → Primary*
 */
export interface ImageSliceWidePrimary {
  /**
   * Image field in *Image → Wide → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.wide.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Caption field in *Image → Wide → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Optional - Caption under the image
   * - **API ID Path**: image.wide.primary.caption
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  caption: prismic.RichTextField;
}

/**
 * Wide variation for Image Slice
 *
 * - **API ID**: `wide`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceWide = prismic.SharedSliceVariation<
  "wide",
  Simplify<ImageSliceWidePrimary>,
  never
>;

/**
 * Slice variation for *Image*
 */
type ImageSliceVariation = ImageSliceDefault | ImageSliceWide;

/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSlice = prismic.SharedSlice<"image", ImageSliceVariation>;

/**
 * Primary content in *Quote → Default → Primary*
 */
export interface QuoteSliceDefaultPrimary {
  /**
   * Quote field in *Quote → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Quote without quotation marks
   * - **API ID Path**: quote.default.primary.quote
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  quote: prismic.TitleField;

  /**
   * Source field in *Quote → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Source of the quote
   * - **API ID Path**: quote.default.primary.source
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  source: prismic.KeyTextField;
}

/**
 * Default variation for Quote Slice
 *
 * - **API ID**: `default`
 * - **Description**: Quote
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuoteSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<QuoteSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Quote*
 */
type QuoteSliceVariation = QuoteSliceDefault;

/**
 * Quote Shared Slice
 *
 * - **API ID**: `quote`
 * - **Description**: Quote
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuoteSlice = prismic.SharedSlice<"quote", QuoteSliceVariation>;

/**
 * Primary content in *Text → Default → Primary*
 */
export interface TextSliceDefaultPrimary {
  /**
   * Text field in *Text → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text with rich formatting
   * - **API ID Path**: text.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Text*
 */
type TextSliceVariation = TextSliceDefault;

/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSlice = prismic.SharedSlice<"text", TextSliceVariation>;

/**
 * Primary content in *VideoBlock → Default → Primary*
 */
export interface VideoBlockSliceDefaultPrimary {
  /**
   * Title field in *VideoBlock → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: video_block.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Video field in *VideoBlock → Default → Primary*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: video_block.default.primary.video
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  video: prismic.EmbedField;
}

/**
 * Default variation for VideoBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<VideoBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *VideoBlock*
 */
type VideoBlockSliceVariation = VideoBlockSliceDefault;

/**
 * VideoBlock Shared Slice
 *
 * - **API ID**: `video_block`
 * - **Description**: VideoBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoBlockSlice = prismic.SharedSlice<
  "video_block",
  VideoBlockSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ArticleDocument,
      ArticleDocumentData,
      ArticleDocumentDataTopicsItem,
      ArticleDocumentDataSlicesSlice,
      AuthorDocument,
      AuthorDocumentData,
      AuthorDocumentDataSocialGroupItem,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataLinksItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      TopicDocument,
      TopicDocumentData,
      AllDocumentTypes,
      ContactFormSlice,
      ContactFormSliceVariation,
      ContactFormSliceDefault,
      CustomerLogosSlice,
      CustomerLogosSliceDefaultPrimary,
      CustomerLogosSliceDefaultItem,
      CustomerLogosSliceVariation,
      CustomerLogosSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceImageRightPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HeroSliceImageRight,
      ImageSlice,
      ImageSliceDefaultPrimary,
      ImageSliceWidePrimary,
      ImageSliceVariation,
      ImageSliceDefault,
      ImageSliceWide,
      QuoteSlice,
      QuoteSliceDefaultPrimary,
      QuoteSliceVariation,
      QuoteSliceDefault,
      TextSlice,
      TextSliceDefaultPrimary,
      TextSliceVariation,
      TextSliceDefault,
      VideoBlockSlice,
      VideoBlockSliceDefaultPrimary,
      VideoBlockSliceVariation,
      VideoBlockSliceDefault,
    };
  }
}
