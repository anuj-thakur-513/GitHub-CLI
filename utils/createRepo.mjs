import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
});

const createRepo = async (title, description = "", visibility = "public") => {
  const response = await octokit.request("POST /user/repos", {
    name: title,
    description: description,
    private: visibility === "private" ? true : false,
    homepage: "https://github.com",
    is_template: false,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return response;
};

export { createRepo };
