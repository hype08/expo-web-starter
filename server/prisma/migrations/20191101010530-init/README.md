# Migration `20191101010530-init`

This migration has been generated at 11/1/2019, 1:05:30 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git datamodel.mdl datamodel.mdl
migration ..20191101010530-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,25 @@
+datasource postgresql {
+  provider = "postgresql"
+  url      = "postgresql://postgres@localhost:5432/postgres?schema=public"
+}
+
+generator photon {
+  provider = "photonjs"
+}
+
+model User {
+  id    String  @default(cuid()) @id
+  email String  @unique
+  name  String?
+  posts Post[]
+}
+
+model Post {
+  id        String   @default(cuid()) @id
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
+  published Boolean @default(true)
+  title     String
+  content   String?
+  author    User?
+}
```

## Photon Usage

You can use a specific Photon built for this migration (20191101010530-init)
in your `before` or `after` migration script like this:

```ts
import Photon from '@generated/photon/20191101010530-init'

const photon = new Photon()

async function main() {
  const result = await photon.users()
  console.dir(result, { depth: null })
}

main()

```
