import fetchJsonp from "fetch-jsonp";

// GitHub API Docs: https://developer.github.com/v3/
const githubHost = "https://api.github.com";
const githubToken = process.env.VUE_APP_GITHUB; // https://github.com/settings/tokens
const githubConfig = {
  headers: new Headers({
    Authorization: `token ${githubToken}`
  })
};

// Meetup API Docs: https://www.meetup.com/meetup_api/
const meetupHost = "http://api.meetup.com";

export default {
  githubProjects(username) {
    return fetch(
      `${githubHost}/users/${username}/repos`,
      githubConfig
    ).then(res => res.json());
  },

  githubProjectDetails({ username, project }) {
    return fetch(
      `${githubHost}/repos/${username}/${project}`,
      githubConfig
    ).then(res => res.json());
  },

  meetupEvents() {
    return fetchJsonp(`${meetupHost}/sandiegojs/events`).then(res =>
      res.json()
    );
  }
};
