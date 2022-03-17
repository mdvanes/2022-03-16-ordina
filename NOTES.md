# Codestar Ng Workshop

date: 2022-03-17
trainer: Rainer Hahnekamps from Angular Architects
Video is recorded
24 attendees, also external

Content

- Monorepos
- Nx en strategic design (DDD)
- Microfrontends
    - Module Federation

## 

Problem with npm library approach: 
distribution (modules that are only used in one huge application, some modules are published to e.g. Nexus) 
and versioning (e.g. I added a security hotfix and how to force the other devs to use it?)

Monorepo: 
 - no distribution: libs are in the same repo
 - only 1 version for the whole repo
 - less overhead for adding libs (nx cli)
 - see all used licenses in one place

Google/Facebook have their own tooling around git/nx to be able to use on their scale.

Project Monorepo: only part of all repos in a monorepo/multiple monorepos in a company

Nx is for monorepos but has expanded, also for any Angular application but uses modern tooling soon, was much earlier with eslint, cypress etc than Ng itself.

ng cli is overwritten by nx to use the nx generators. They are overwriting it in the node_modules bin dir!
Use the npx prefix to make sure you are not using global ng, but the ng in the current node_modules
This is also why he is not using Yarn.

## DDD 11:15

Modules -> sub domains
Reason from how a user is interacting with the system

Domain models can be used in multiple sub domains. So: there may be 2 models "Flight" in 2 sub domains that have nothing in common. The reference to Flight is context sensitive.

Shared kernel pattern is dangerous: it can have consequenes to the full application. Not loosely coupled.
Anti-corruption layer (ACL): mapper function to convert domain models between domains

Atomic design: not much experience.
Alternatives: Hexagonal architecture, clean architecture

### Lab 01b_nx_DDD

- use npx to prefix `ng` commands
- npx ng dep-graph
- npx nx affected:dep-graph 
- npx nx affected:libs
- npx nx lint luggage-feature-checkin

affected can be prefixed to anything, like lint, test, etc, but before calling affected:build, fill the cache: npx nx build luggage --with-deps

## Microfrontends 14:30

- avoid until necessary
- npm libraries
- web components
- list of benefits: autonomous teams, separate development, sep deployment, own architecture & tech decisions. BUT don't overdo it!
- only use diverging technologies when you are forced (e.g. legacy). Learn from "Scottish news paper"
- you can use "hyperlink" for MFE.
- MFE integration shell to manage MFEs. SPA Shell app. Single SPA, Luigi  (iframe), Zoid (iframe)
- iframe: very good isolation (too good), does not look nice, can't interact with each other
- native module federation. use the tools because to much overhead otherwise
- zone.js patches dom events and async tasks for Angular to tell Angular when those events have finished so Angular can rerender. Zone can only run once per DOM.
- @angular-architects/module-federation-tools
- dynamic federation! loadRemoteModule() instead of import()
- scam: single component angular module

## Questions:

- ANSWERED Yarn vs NPM in monorepos: nx overwrites ng and in general can't rely on cached modules sometimes.
- ANSWERED How to deal with monorepo where not all devs are allowed to change all modules? How to deal with PRs on that code? -> git code ownership plugin, Bjorn (https://nx.dev/guides/monorepo-nx-enterprise
), Bamboo has some sort of solution? Google: small commits, code owner who is charge of MRs/PRs should be small
- ANSWERED How to deal with slow repo's, slow builds/tests etc (affected?): affected can be prefixed to anything, like lint, test, etc, but before calling affected:build, fill the cache: npx nx build luggage --with-deps

# Evening meetup: angularBootstrap

Render standalone components without @NgModule. Using angularBootrap(); / @Component?

View again: https://www.youtube.com/watch?v=gpNQIy5GXtw
