# AGENTS.md

## Command: `ai:update-docs`
- **Trigger**: When I type `ai:update-docs`, activate the documentation helper that scans every exported function inside `libraries/beaut` and emits matching markdown under `apps/docs.beaut`.
- **Coverage**: Traverse `libraries/beaut` recursively, enumerate each exported function (regardless of module/nesting) and pair it with a single documentation slot in `apps/docs.beaut`. Use the module path to mirror the destination location so each function lands in a deterministic doc path.
- **Template**: Every document you create or update must follow the layout in ~/apps/docs.beaut/.ai/example.docs.mdx