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

# Questions:

- ANSWERED Yarn vs NPM in monorepos: nx overwrites ng and in general can't rely on cached modules sometimes.
- How to deal with monorepo where not all devs are allowed to change all modules? How to deal with PRs on that code?
- How to deal with slow repo's, slow builds/tests etc (affected?)

