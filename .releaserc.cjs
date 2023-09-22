module.exports = {
  branches: ['master'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/changelog',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/npm',
      {
        tarballDir: 'artifact',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: [
          'artifact/*.tgz',
          { path: 'dist/index.esm.js', label: 'ESM module' },
          { path: 'dist/index.umd.js', label: 'UMD module' },
        ],
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'package-lock.json'],
        message: 'chore(release): ${nextRelease.version} [skip ci]',
      },
    ],
    [
      '@qiwi/semantic-release-gh-pages-plugin',
      {
        src: 'gh-pages',
        branch: 'gh-pages',
      },
    ],
  ],
  preset: 'angular',
};
