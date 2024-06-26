#! /usr/bin/env node
const yargs = require("yargs");
const chalk = require("chalk");
const boxen = require("boxen");
require("dotenv").config();

const usage = chalk.blue(
  "\nUsage: gh-create-repo -t <title_of_repo> -d <description_of_repo> -v <'public' or 'private'>\n" +
    boxen(
      chalk.green("\nCreates a GitHub repo and returns the details of repo\n"),
      { padding: 1, borderColor: "green", dimBorder: true }
    )
);

const options = yargs
  .usage(usage)
  .default("d", "")
  .options({
    t: {
      alias: "title",
      describe: "enter title of the github repo",
      type: "string",
      demandOption: true,
    },
    d: {
      alias: "description",
      describe: "description of the github repo",
      type: "string",
      demandOption: false,
    },
    v: {
      alias: "visibility",
      describe: "enter whether the repo will be public or private",
      choices: ["public", "private"],
      demandOption: false,
    },
  })
  .help(true).argv;

const main = async () => {
  try {
    const { createRepo } = await import("../utils/createRepo.mjs");
    const response = await createRepo(
      yargs.argv.title,
      yargs.argv.description,
      yargs.argv.visibility
    );

    if (response.status === 201) {
      console.log(
        "\n" +
          boxen(
            chalk.green(
              `\nGitHub Repo Created Successfully:\nURL: ${response?.data?.html_url}\nClone URL: ${response?.data?.clone_url}`
            ),
            {
              padding: 1,
              borderColor: "green",
              dimBorder: true,
            }
          ) +
          "\n"
      );
    }
    process.exit(0);
  } catch (error) {
    console.log(
      "\n" +
        boxen(chalk.green("\n" + error + "\n"), {
          padding: 1,
          borderColor: "red",
          dimBorder: true,
        }) +
        "\n"
    );
    process.exit(1);
  }
};

main();
