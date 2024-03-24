# Prismic + Next.js Blog Template

This sample blog is an excellent starting point to explore [Next.js][nextjs] and [Prismic][prismic]. Get it up and running in minutes.

## Features

- Next.js App Router
- Optimized for SEO using Next.js's Metadata
- New fetching and caching paradigms
- Dynamic OG images
- Blog post categorized
- Page pagination, page limit
- Page/Article building with Prismic Slice Machine.

## 🚀 Quick Start

Clone this project and then run this command to download the required packages:

```sh
npm i
```

When you're ready to start your project, run the following command:

```sh
npm run dev
```

Your website will be run locally on localhost:3000, and prismic slice machine will be running on localhost:9999.

### Setup Prismic

If you don't have a prismic account yet, signup [here](https://prismic.io/) first. Then follow these steps to setup your prismic repo and slice machine.

1. After you've signed up for an account with Prismic, go to the slice machine (localhost:9999) and login there.
   ![image](https://github.com/WilliamD99/prismic-blog-template/assets/43860904/17847c9c-9cb7-42e5-9a79-8dd806bf33de)
2. Change the **repositoryName** inside the **slicemachine.config.json** to your repo name (xxx-xxx). _You might need to restart your server again in order for this to take effect_.
3. In order to sync the data from the slicemachine data in this repo to your prismic repo, you need to push the changes using the **Push Changes** button located at the top right of the slice machine.
4. Refer to the [Page Types section](#prismic-types) for your reference to start config your prismic project.

## Production Note

During production, changes made in the Prismic Dashboard may be cached.
So to revalidate the cache, please set the webhook to send the request to "/api/revalidate".

## Prismic Types

To config your prismic type, go to your slice machine (_localhost:9999_).
To add a new document for your type, you can go to the prismic repo (should be something like **reponame.prismic.io**).

### Page

You can build your own page using the Page type. To create a new Page, go to your prismic repo and click Create new Page. When your page is created, you can go to the new page by going to the _your-page-name_.

### Navigation

Navigation is a Custom Type. It's used to build the navigation bar at header of your website. **You may one have one navigation document for your repo**.

To create a new Navigation, go to your prismic repo and click Create new Navigation.

Inside the repeatable zone, you can link the item to the **Article documents** or **Page documents**.

### Article

Article is a Page types. To look for its contents, go to your slice machine and select Article.

To create a new Article, go to your prismic repo and click Create new Article. Start building your article by adding slices to it.

To config your article's seo and metadata, switch to the **SEO & Metadata** tab located at the tab of the page.

To add an article to a Topic document, you can add it inside the **Repeatable Zone: Topics**. One article can be linked to many topic.

### Topic

Topic is a Custom Type. Use this if you want to categorized your articles.

To create a new Topic, go to your prismic repo and click Create new Topic.

### Settings

Settings is a Custom Type. It's used to config your information like the image below.
![image](https://github.com/WilliamD99/prismic-blog-template/assets/43860904/c051c088-e1d4-4220-ba5b-242965862a71)

To create a new Setting, go to your prismic repo and click Create new Setting. **You may one have one setting document for your repo**.

## License

```
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

[prismic]: https://prismic.io/
[prismic-docs]: https://prismic.io/docs/technologies/nextjs
[prismic-sign-up]: https://prismic.io/dashboard/signup
[starter-docs]: ./docs/README.md
[nextjs]: https://nextjs.org/
[live-demo]: https://prismic-blog-template.vercel.app/
