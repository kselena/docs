// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  DocsSidebar: [
    'introduction',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/security',
      ]
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/syntax',
        'guides/semantics',
        'guides/built-ins',
        {
          type: 'category',
          label: 'Aladino',
          link: { type: 'doc', id: 'guides/aladino/specification' },
          items: [
            'guides/aladino/syntax',
            'guides/aladino/semantics',
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Use Cases',
      link: {
        type: 'generated-index',
        title: 'Use Cases',
        description:
          "See how Reviewpad can be used in different scenarios.",
      },
      items: [
        'use-cases/auto-merge',
        {
          type: 'category',
          label: 'Automated Labelling',
          link: { type: 'doc', id: 'use-cases/automated-labelling/automated-labelling' },
          items: [
            'use-cases/automated-labelling/label-based-on-author-groups',
            'use-cases/automated-labelling/label-based-on-file-paths',
            'use-cases/automated-labelling/label-critical-changes-with-code-pattern',
            'use-cases/automated-labelling/label-critical-changes-with-semantic-code-annotations',
            'use-cases/automated-labelling/label-potential-missing-changes',
            'use-cases/automated-labelling/remove-label-based-on-file-paths'
          ],
        },
        'use-cases/attention-set',
        'use-cases/check-issue-description',
        'use-cases/comment-on-pull-requests',
        'use-cases/enforce-branch-conventions',
        'use-cases/enforce-conventional-commits',
        {
          type: 'category',
          label: 'Reviewer Assignment',
          link: { type: 'doc', id: 'use-cases/reviewer-assignment/reviewer-assignment' },
          items: [
            'use-cases/reviewer-assignment/assign-review-to-3-developers',
            'use-cases/reviewer-assignment/assign-review-to-a-team',
            'use-cases/reviewer-assignment/assign-senior-reviewers-to-new-joiners',
            'use-cases/reviewer-assignment/assign-sequential-reviewers',
          ],
        },
        'use-cases/ship-show-ask',
        'use-cases/stale-issues-or-pull-requests',
        {
          type: 'category',
          label: 'Timestamps',
          link: { type: 'doc', id: 'use-cases/timestamps/timestamps' },
          items: [
            'use-cases/timestamps/label-on-change-freeze',
            'use-cases/timestamps/notify-when-long-live-pull-request',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      items: [
        'contributing/how-to-contribute',
      ]
    },
    {
      'Tooling': ['tooling/vscode-reviewpad-yaml-schema'],
    },
  ],
};

module.exports = sidebars;
