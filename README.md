# Website HTWK Smart Driving

This is the [Gatsby JS](https://www.gatsbyjs.org/) based website of the HTWK Smart Driving team.

## Prerequisites

- a current version of [Node.js](https://nodejs.org/en/) (use LTS if possible)
- [yarn](https://yarnpkg.com/lang/en/)

## Development

Please use yarn instead of npm (it's waaay faster and more reliable).

```
yarn install
yarn run dev
```

Run the following command to test a production build:

```
yarn run prod
```

## How to write a new post

Adding a post is easy!

1. Start the development server as descriped in the previous section (`yarn dev`).
1. Add a new directory for the new post under `src/posts/` and give it a meaningful name.<br> Note
   that this name is only useful for other developers and will not affect the URL of this post.
1. Create an `index.md` Markdown file in the directory like the following example:

   ```md
   ---
   title: My post title
   date: '2018-06-20'
   ---

   My **awesome** post content.

   ![My picture](./picture_in_same_directory.jpg)
   ```

1. The website should show the newly created post and reflect content changes immediately. This
   means you can write your post in the markdown file and the page refreshes automatically.
1. Commit your changes and merge the branch into `master` when you're happy with your post. Careful:
   the post will go live immediately (see Deployment)!

## Production build

```
yarn build
```

## Continous deployment

Every time the master branch is updated a GitLab pipeline will be triggered, which builds and
deploys the website (see `.gitlab.ci.yml`). The document root on the server is under
`/var/www/html`.
