# GitHub CLI

GitHub CLI commands to manage basic things from command-line itself, e.g. Create Repo from CLI

## Screenshots

![](/github_assets/gh-create-repo%20help.jpg)
![](/github_assets/create%20repo.jpg)

## Folder Structure

```
.
├── bin
│   └── index.js
├── github_assets
│   ├── create repo.jpg
│   └── gh-create-repo help.jpg
├── utils
│   └── createRepo.mjs
├── README.md
├── package-lock.json
└── package.json
```

## Run Locally

```
Replace GITHUB_ACCESS_TOKEN with your own access token in .env.example and change the file name to .env
```

Clone the Project

```bash
git clone https://github.com/anuj-thakur-513/GitHub-CLI.git
```

Change Directory to the Project

```bash
cd GitHub-CLI
```

Install the Dependences

```bash
npm install
```

Install the command globally to your system

```bash
npm install -g .
```

Run the following command to know how to use it to create repos on github

```bash
gh-create-repo --help
```
