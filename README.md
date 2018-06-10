# Website HTWK Smart Driving

This is the [Gatsby](https://www.gatsbyjs.org/) based website of the HTWK Smart Driving team.

## Development

You might want to use [yarn](https://yarnpkg.com/lang/en/) instead of npm.

```
npm install
npm run dev
```

## Production build

```
npm run build
```

## Deployment

Every time a branch is merged into `master` (or commits are pushed to `master`) a GitLab pipeline is started, which builds the Gatsby project and deploys the build articafts to the website document root `/var/www/html` afterwards.
