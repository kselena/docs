# Release

This documentation details the release process.

## Prerequisites

Please make sure that:

1. You are on the `main` branch of the repository.

```bash
git checkout main
```

2. You have the **latest** version of `main` branch.

```bash
git pull
```

3. You don't have local changes.

```bash
git status
```

4. You are able to build the project.

```bash
yarn build
```

## Create version

The first step into the release is to defined which version of [docs.reviewpad.com](https://docs.reviewpad.com) is to be released.

```bash
yarn run docusaurus docs:version VERSION
```

Where `VERSION` is the version to be released, e.g. `3.3.1`.

This command will do the following:

1. Create a copy of the current documentation and add it a new folder `version-VERSION` under `versioned_docs`.
2. Create a copy of the current `sidebars` add it as a new file `version-VERSION-sidebars.json` under `versioned_sidebars`.
3. Add the `VERSION` into `versions.json` file.

## Run and built it locally

The next step is to run the documentation locally to make sure everything is working as expected.

```bash
yarn start
```

Make sure that the new version is available in the version selector.

Then, build the project.

```bash
yarn build
```

You should be able to build the project without any errors.

## Test the Reviewpad configurations

The project contains a set of Reviewpad configurations used for built-ins showcase and use cases.

If you have updated or added any new Reviewpad configuration please make sure you test it.

For that you can use the `checker.sh` script.

```bash
./checker.sh <local_location_of_your_reviewpad_cli> <directory_to_look_for_yml_configurations> <github_token> <github_repo>
```

e.g.

```bash
./checker.sh ~/reviewpad-cli ./docs GITHUB_TOKEN https://github.com/mascarilha/paddy/pull/1
```

## Commit and push it

The next step is to commit and push these changes into the `main` branch.

Before commit please add the files that were created by the previous step:

```bash
git add .
```

Then commit the changes following the commit syntax:

```bash
git commit -m "feat(release): version VERSION"
```

Where `VERSION` is the version to be released, e.g. `3.3.1`.

After this you can push the changes into the `main` branch which will trigger the deployment.

```bash
git push origin main
```

This will deploy the documentation into github pages which will be live at [docs.reviewpad.com](https://docs.reviewpad.com).

You can check the status of the deployment [here](https://github.com/reviewpad/docs/deployments).

## Update algolia

The last step is to update the search index in algolia.

Go to [algolia crawler](https://crawler.algolia.com/admin/crawlers/efcdfdf9-be65-45b0-8fc1-c76dcac68fe2/overview) and click on `Restart crawling`.

## Deleting an existing version

You can delete/remove versions as well.

Remove the version from versions.json.

Example:

```diff
[
  "2.0.0",
  "1.9.0",
- "1.8.0"
]
```

Delete the versioned docs directory. Example: `versioned_docs/version-1.8.0`.
Delete the versioned sidebars file. Example: `versioned_sidebars/version-1.8.0-sidebars.json`.
