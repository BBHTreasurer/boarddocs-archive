HOW TO ADD YOUR ATTACHMENT FILES TO THIS ARCHIVE
=================================================

This site's HTML pages already link to attachments using paths like:
  attachments/<FOLDER_ID>/<real filename>.pdf

Your original BoardDocs export has the exact same folder-ID structure
(the UUID folders you saw in File Explorer, e.g. DP2N3N5DCB6D). Those
folder names ARE the file IDs referenced throughout the site.

TO FINISH THE ARCHIVE:
1. Locate the folder from your BoardDocs export that contains all the
   UUID-named attachment folders (the one in your screenshot).
2. Copy ALL of those UUID folders into this site's "attachments/" folder,
   keeping the folder names exactly as they are.
3. Do NOT rename the folders or the files inside them — the site's links
   depend on the folder ID and the original filename matching exactly.

That's it — no renaming, no restructuring. The folder ID system BoardDocs
used is already the same system this site uses to link to files.

WHICH FILES ARE ACTUALLY NEEDED
--------------------------------
attachment_manifest.csv (included in this delivery) lists every file the
public archive references: folder ID, real filename, and which meeting/
agenda item it belongs to. If you want to hand this off to someone else
to gather the files, that CSV is the checklist.

Note: this manifest only includes PUBLIC files (FilePublic.csv). Restricted
files (FileAdmin/FileExecutive) were intentionally excluded from this build
per your public-records-only decision, and are not referenced anywhere in
the site.

IF ANY ATTACHMENT FOLDER IS MISSING
-------------------------------------
The site will still work fine — that one link will just 404 (broken link)
until the folder is added. Nothing else breaks.
