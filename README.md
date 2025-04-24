This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# Harmoniq-web


# Development Standards for Harmoniq-Web

This section outlines the **naming conventions**, **branching strategies**, and **standard practices** for developers contributing to the Harmoniq-Web project. These guidelines follow globally accepted standards to ensure consistency, collaboration, and maintainability in our Next.js-based web application using Git for version control.

## 1. Naming Conventions

Consistent naming enhances code readability and maintainability. Adhere to the following conventions for all project assets.

### 1.1. File and Folder Naming

- **Use kebab-case**: Name files and folders in lowercase with hyphens (e.g., `navigation-framework.tsx`, `mock-data/`).
- **Be descriptive**: Choose clear, meaningful names (e.g., `user-store.ts` instead of `store.ts`).
- **Component files**: Use PascalCase for React components (e.g., `Button.tsx`, `TaskCard.tsx`).
- **Non-component files**: Use kebab-case for utilities, configs, and other files (e.g., `api-client.ts`, `eslint-config.js`).
- **Folder structure**: Follow the project structure defined in Task 1 (e.g., `/app`, `/components`, `/utils`, `/mocks`).

### 1.2. Code Naming

- **Variables and functions**: Use camelCase (e.g., `fetchTasks`, `userProfile`).
- **Constants**: Use UPPER_SNAKE_CASE (e.g., `API_BASE_URL`, `MAX_RETRIES`).
- **Interfaces and types**: Use PascalCase (e.g., `TaskProps`, `UserProfile`).
- **Classes**: Use PascalCase, if used (e.g., `ApiClient`).
- **Avoid abbreviations**: Use full words unless widely understood (e.g., `configuration` instead of `config`, but `id` is acceptable).
- **Boolean variables**: Prefix with `is`, `has`, `should`, etc. (e.g., `isAuthenticated`, `hasError`).

### 1.3. Git Commit Messages

- **Format**: Use imperative mood with a clear structure: `<type>(<scope>): <short description>`.
  - Example: `feat(navigation): add file-based routing for dashboard`
- **Types**:
  - `feat`: New feature.
  - `fix`: Bug fix.
  - `docs`: Documentation changes.
  - `style`: Formatting or styling changes.
  - `refactor`: Code improvements without changing behavior.
  - `test`: Adding or updating tests.
  - `chore`: Maintenance tasks (e.g., dependency updates).
- **Scope**: Specify the affected module (e.g., `navigation`, `auth`, `components`).
- **Description**: Be concise and specific (e.g., `add mock API routes` instead of `update API`).
- **Body (optional)**: Provide details for complex changes using bullet points or paragraphs.
- **Example**:
  ```plaintext
  feat(state): implement zustand store for tasks

  - Add task store with mock data
  - Enable localStorage persistence
  - Update task list component to use store

  Making Pull Requests (PRs)
Pull requests facilitate code review and ensure quality before merging changes into develop or main.
PR Creation
Push your branch to GitHub:
bash

git push origin feature/add-navigation

On GitHub, navigate to https://github.com/TeamElite1/Harmoniq-web, go to the “Pull requests” tab, and click “New pull request.”

Set the base branch (develop for feature/ or bugfix/, main for hotfix/) and compare with your branch (e.g., feature/add-navigation).

Complete the PR template (below) and submit.

PR Naming
Format: <type>/<short-description> (e.g., feat/add-navigation-routes, fix/correct-auth-redirect).

Match commit types: feat, fix, docs, style, refactor, test, chore.

Use kebab-case and append issue number, if applicable (e.g., feat/add-task-list#42).

PR Template
Use this template for all PRs:
markdown

## Description
Briefly describe the changes (e.g., Added file-based routing for dashboard and tasks).

## Related Issue
Closes #<issue-number> (e.g., Closes #42).

## Changes
- List key changes (e.g., Created /app/dashboard/page.tsx).
- Mention dependencies or impacts.

## Testing
- Describe how changes were tested (e.g., Ran Jest tests, manually tested navigation).
- Confirm CI checks passed.

## Checklist
- [ ] Code follows naming conventions.
- [ ] Tests added/updated.
- [ ] Documentation updated (if applicable).
- [ ] CI checks passed.

PR Guidelines
Assign reviewers: Include at least one reviewer (e.g., Lead Developer).

Add labels: Use relevant labels (e.g., feature, bug, documentation).

Run CI checks: Ensure GitHub Actions (linting, tests, build) pass before requesting review.

Squash commits: Combine commits for clarity before merging, if needed.

Merge strategy: Use merge commits for feature/ and bugfix/; use rebase for hotfix/ to keep history clean.

Post-Merge Cleanup
After merging, delete the branch on GitHub and sync locally:
bash

git checkout develop
git pull origin develop
git branch -d feature/add-navigation

Testing
Testing ensures code reliability and aligns with Task 8 (Set Up Unit Testing Framework) requirements.
Unit Testing
Tools: Use Jest and React Testing Library for unit tests.

What to test:
Components (e.g., Button renders, handles clicks).

State management (e.g., Zustand store updates for tasks).

API interactions (e.g., mock Axios responses for /api/mocks/tasks).

Coverage: Aim for 80%+ coverage for critical paths (e.g., navigation, auth flows).

Run tests locally:
bash

npm run test

CI Integration
GitHub Actions: Tests run automatically on every push and PR via GitHub Actions (configured in Task 2).

Workflow:
Linting: ESLint with Airbnb rules and Prettier.

Testing: Jest unit tests.

Build: Verify npm run build succeeds.

Fix failures: Check GitHub Actions logs and address linting or test issues before requesting PR review.

Manual Testing
UI/UX testing: Manually verify complex features (e.g., navigation flows, authentication).

Accessibility (a11y): Test with keyboard navigation and screen readers.

Responsive design: Ensure components work on mobile and desktop using Tailwind CSS responsive classes.

Testing Workflow
Write tests for new features or fixes:
bash

# Example: Test a Button component
npm run test components/Button.test.tsx

Mock dependencies (e.g., Axios for API calls):
javascript

jest.mock('axios');

Run all tests before committing:
bash

npm run test

Verify CI checks pass in the PR on GitHub.

Integration with Your Existing README
To add this section to your README.md, append it after existing sections (e.g., after Deploy on Vercel or Development Standards for Harmoniq-Web). For example:
markdown

# Harmoniq-Web

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).





