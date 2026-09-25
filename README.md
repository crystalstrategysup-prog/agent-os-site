# Crystal AgentOS website

Static public website for Crystal AgentOS. It has no build step, analytics,
cookies, forms or runtime secrets.

Serve locally:

```bash
python3 -m http.server 8080
```

Public path: `https://crystalstrategy.ru/agent-os/`.

The page presents the AgentOS `0.5.0-beta.3` community beta and links to its
tagged source and changelog. Its installation example uses a source checkout:
the `crystal-agent-os` package is not available on PyPI at this release.

Before publishing the page, verify that the public tag exists and that its
README installation commands work on a clean supported host. After the site
deploy, read back the public path and check every versioned link and command.

License: Apache-2.0. The software repository lives at
`https://github.com/crystalstrategysup-prog/agent-os`.
