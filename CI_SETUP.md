# Continuous Integration (CI) Setup

This project uses GitHub Actions for automated code verification on every pull request and push to main branches.

## What the CI Does

The CI workflow ([.github/workflows/ci.yml](.github/workflows/ci.yml)) automatically runs:

1. **Linting** - ESLint checks for code quality and style issues
2. **Type Checking** - TypeScript compilation without emit to catch type errors
3. **Building** - Full production build to ensure deployability
4. **Testing** - Unit tests with Vitest
5. **Coverage** - Code coverage reporting and artifacts

## Jobs Overview

### `test` Job
- Runs on Node.js 18.x and 20.x (matrix)
- Installs dependencies, runs linting, builds, and executes tests
- Generates coverage reports in JSON, HTML, and LCOV formats
- Uploads coverage to Codecov (if configured)
- Comments PR with coverage information

### `build-check` Job
- Runs TypeScript type checking
- Performs production build
- Uploads build artifacts

### `status-check` Job
- Final status verification
- Only passes if all previous jobs succeed
- Provides clear success/failure messaging

## Setting Up Branch Protection

To require these checks before merging PRs:

1. Go to **Settings** → **Branches** in your GitHub repository
2. Add a branch protection rule for `main` (or your default branch)
3. Enable **"Require status checks to pass before merging"**
4. Select these required status checks:
   - `test (18.x)`
   - `test (20.x)`
   - `build-check`
   - `status-check`
5. Enable **"Require branches to be up to date before merging"**

## Coverage Reporting

Coverage reports are:
- Generated in `coverage/` directory (gitignored)
- Uploaded as GitHub artifacts (30-day retention)
- Sent to Codecov (if `CODECOV_TOKEN` secret is configured)
- Displayed as PR comments

## Local Development

Run the same checks locally:

```bash
# Install dependencies
npm ci

# Run linting
npm run lint

# Type check
npx tsc --noEmit

# Build
npm run build

# Run tests with coverage
npm run test:coverage
```

## Required Secrets

Optional secrets for enhanced functionality:
- `CODECOV_TOKEN` - For Codecov integration (get from codecov.io)

## Troubleshooting

**Tests fail locally but pass in CI (or vice versa)**
- Ensure you're using the same Node.js version
- Run `npm ci` instead of `npm install`
- Check for environment-specific issues

**Coverage reporting issues**
- Verify `coverage/` directory is generated locally
- Check if LCOV format is being created: `coverage/lcov.info`

**Build failures**
- Run `npx tsc --noEmit` to check for TypeScript errors
- Ensure all dependencies are properly installed