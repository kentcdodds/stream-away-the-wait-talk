Show a picture of a roller coaster and ask whether

Say that's what it's like developing. It's a roller coaster of problems and
solutions and problems and solutions.

- Build the UI
- Have perf issues in prod
- Solve perf issues:
  - Parallelize
  - Prefetch
  - Speed up backend
  - Cache on CDN via shared cache headers
  - Cache backend (LRU or Redis) TODO: implement this one
  - Move to the edge
  - Network can still be an issue
- Add global pending
  - Flash of loading state
- Add spin delay
  - Become more responsive: Optimistic UI
- Add skeleton pending
  - Switch between different customers and note race conditions are not an issue
  - Note that the slow stuff is keeping us from getting the fast stuff
- Add deferred pending
  - Demonstrate A/B testing of loading mechanism
  - Demonstrate user-specific loading mechanism
  - Demonstrate data-specific loading mechanism
  - Note loading state of going back and forth
- Add cache headers TODO: figure out why this isn't working
