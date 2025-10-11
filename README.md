# UUX Angular Documentation & Playground

## Project Description
This is the web application that contains the documentation and playgrounds for the **UUX component library** for Angular.
It allows developers to explore, test, and learn how to use the components in a sandbox environment.

## Installation
### 1. Clone the repository:
```bash
git clone https://github.com/your-org/uux-angular-doc.git
```

### 2. Navigate to the project folder:
```bash
cd uux-angular-doc
```

### 3. Install dependencies:
```bash
npm install
```

### 4. Make sure you are on the main branch and your local copy is up to date:
```bash
git checkout main
git pull origin main
```

## Workflow: Creating a New Branch

### 1. Assign yourself to an existing issue you want to work on.
### 2. Always start from the latest main branch:
```bash
git checkout main
git pull origin main
```
### 3. Create a new branch using the issue number and a short description. GitHub allows you to do this directly from the issue page:
- Click “Create branch” on the issue page.
- GitHub will automatically create a branch with the format:
```bash
<issue-number>-<issue-title>
```
- Spaces are replaced by dashes (-), and special characters are sanitized.
Example:
```bash
git checkout -b 12-add-menu-toggler-component
```

### 4. Make your changes, commit following the Husky commit rules, and push the branch when ready for a pull request:
```bash
git add .
git commit -m "feat: add menu toggler component #12"
git push -u origin 12-add-menu-toggler-component
```

## Notes:

* All commits must follow the commit message format enforced by Husky:
```bash
<type>: <description> #<issue-number>
```
Allowed types: feat, fix, docs, style, refactor, test, chore, perf, build, ci, revert.

* Pushes will run automated tests via Husky. Branch deletion skips the tests automatically.
