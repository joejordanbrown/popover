import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit, AfterViewInit {

  @HostBinding('class.mat-elevation-z4') elevation = true;

  details: any = {};
  issues: any = {};
  pulls: any = {};

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.details = {
      'id': 80539213,
      'name': 'mde',
      'full_name': 'material-extended/mde',
      'owner': {
        'login': 'material-extended',
        'id': 25460963,
        'avatar_url': 'https://avatars7.githubusercontent.com/u/25460963?v=4',
        'gravatar_id': '',
        'url': 'https://api.github.com/users/material-extended',
        'html_url': 'https://github.com/material-extended',
        'followers_url': 'https://api.github.com/users/material-extended/followers',
        'following_url': 'https://api.github.com/users/material-extended/following{/other_user}',
        'gists_url': 'https://api.github.com/users/material-extended/gists{/gist_id}',
        'starred_url': 'https://api.github.com/users/material-extended/starred{/owner}{/repo}',
        'subscriptions_url': 'https://api.github.com/users/material-extended/subscriptions',
        'organizations_url': 'https://api.github.com/users/material-extended/orgs',
        'repos_url': 'https://api.github.com/users/material-extended/repos',
        'events_url': 'https://api.github.com/users/material-extended/events{/privacy}',
        'received_events_url': 'https://api.github.com/users/material-extended/received_events',
        'type': 'Organization',
        'site_admin': false
      },
      'private': false,
      'html_url': 'https://github.com/material-extended/mde',
      'description': null,
      'fork': false,
      'url': 'https://api.github.com/repos/material-extended/mde',
      'forks_url': 'https://api.github.com/repos/material-extended/mde/forks',
      'keys_url': 'https://api.github.com/repos/material-extended/mde/keys{/key_id}',
      'collaborators_url': 'https://api.github.com/repos/material-extended/mde/collaborators{/collaborator}',
      'teams_url': 'https://api.github.com/repos/material-extended/mde/teams',
      'hooks_url': 'https://api.github.com/repos/material-extended/mde/hooks',
      'issue_events_url': 'https://api.github.com/repos/material-extended/mde/issues/events{/number}',
      'events_url': 'https://api.github.com/repos/material-extended/mde/events',
      'assignees_url': 'https://api.github.com/repos/material-extended/mde/assignees{/user}',
      'branches_url': 'https://api.github.com/repos/material-extended/mde/branches{/branch}',
      'tags_url': 'https://api.github.com/repos/material-extended/mde/tags',
      'blobs_url': 'https://api.github.com/repos/material-extended/mde/git/blobs{/sha}',
      'git_tags_url': 'https://api.github.com/repos/material-extended/mde/git/tags{/sha}',
      'git_refs_url': 'https://api.github.com/repos/material-extended/mde/git/refs{/sha}',
      'trees_url': 'https://api.github.com/repos/material-extended/mde/git/trees{/sha}',
      'statuses_url': 'https://api.github.com/repos/material-extended/mde/statuses/{sha}',
      'languages_url': 'https://api.github.com/repos/material-extended/mde/languages',
      'stargazers_url': 'https://api.github.com/repos/material-extended/mde/stargazers',
      'contributors_url': 'https://api.github.com/repos/material-extended/mde/contributors',
      'subscribers_url': 'https://api.github.com/repos/material-extended/mde/subscribers',
      'subscription_url': 'https://api.github.com/repos/material-extended/mde/subscription',
      'commits_url': 'https://api.github.com/repos/material-extended/mde/commits{/sha}',
      'git_commits_url': 'https://api.github.com/repos/material-extended/mde/git/commits{/sha}',
      'comments_url': 'https://api.github.com/repos/material-extended/mde/comments{/number}',
      'issue_comment_url': 'https://api.github.com/repos/material-extended/mde/issues/comments{/number}',
      'contents_url': 'https://api.github.com/repos/material-extended/mde/contents/{+path}',
      'compare_url': 'https://api.github.com/repos/material-extended/mde/compare/{base}...{head}',
      'merges_url': 'https://api.github.com/repos/material-extended/mde/merges',
      'archive_url': 'https://api.github.com/repos/material-extended/mde/{archive_format}{/ref}',
      'downloads_url': 'https://api.github.com/repos/material-extended/mde/downloads',
      'issues_url': 'https://api.github.com/repos/material-extended/mde/issues{/number}',
      'pulls_url': 'https://api.github.com/repos/material-extended/mde/pulls{/number}',
      'milestones_url': 'https://api.github.com/repos/material-extended/mde/milestones{/number}',
      'notifications_url': 'https://api.github.com/repos/material-extended/mde/notifications{?since,all,participating}',
      'labels_url': 'https://api.github.com/repos/material-extended/mde/labels{/name}',
      'releases_url': 'https://api.github.com/repos/material-extended/mde/releases{/id}',
      'deployments_url': 'https://api.github.com/repos/material-extended/mde/deployments',
      'created_at': '2017-01-31T16:36:05Z',
      'updated_at': '2017-07-16T00:55:45Z',
      'pushed_at': '2017-07-13T17:27:22Z',
      'git_url': 'git://github.com/material-extended/mde.git',
      'ssh_url': 'git@github.com:material-extended/mde.git',
      'clone_url': 'https://github.com/material-extended/mde.git',
      'svn_url': 'https://github.com/material-extended/mde',
      'homepage': null,
      'size': 71,
      'stargazers_count': 8,
      'watchers_count': 5,
      'language': 'TypeScript',
      'has_issues': true,
      'has_projects': true,
      'has_downloads': true,
      'has_wiki': true,
      'has_pages': false,
      'forks_count': 0,
      'mirror_url': null,
      'open_issues_count': 0,
      'forks': 0,
      'open_issues': 0,
      'watchers': 5,
      'default_branch': 'master',
      'organization': {
        'login': 'material-extended',
        'id': 25460963,
        'avatar_url': 'https://avatars7.githubusercontent.com/u/25460963?v=4',
        'gravatar_id': '',
        'url': 'https://api.github.com/users/material-extended',
        'html_url': 'https://github.com/material-extended',
        'followers_url': 'https://api.github.com/users/material-extended/followers',
        'following_url': 'https://api.github.com/users/material-extended/following{/other_user}',
        'gists_url': 'https://api.github.com/users/material-extended/gists{/gist_id}',
        'starred_url': 'https://api.github.com/users/material-extended/starred{/owner}{/repo}',
        'subscriptions_url': 'https://api.github.com/users/material-extended/subscriptions',
        'organizations_url': 'https://api.github.com/users/material-extended/orgs',
        'repos_url': 'https://api.github.com/users/material-extended/repos',
        'events_url': 'https://api.github.com/users/material-extended/events{/privacy}',
        'received_events_url': 'https://api.github.com/users/material-extended/received_events',
        'type': 'Organization',
        'site_admin': false
      },
      'network_count': 0,
      'subscribers_count': 7
    };
  }

  ngAfterViewInit2() {

  }
  ngAfterViewInit() {




    this._http.get('https://api.github.com/repos/material-extended/mde').subscribe((details: any) => {
      console.log(details);
      this.details = details;
      // alert(details.json());
    });


    /*
    this._http.get('https://api.github.com/repos/material-extended/mde/issues').subscribe((issues: Response) => {
      console.log(issues.json());
    });

    this._http.get('https://api.github.com/repos/material-extended/mde/pulls').subscribe((pulls: Response) => {
      console.log(pulls.json());
    });


    */
  }
}
