# Adobe Premiere Pro XML export

MediaForge AI exports a Final Cut Pro 7 XML interchange sequence (`.xml`) for import into Adobe Premiere Pro.

## Export and import

1. Open a MediaForge AI project and add the clips to its timeline.
2. Open **Export & Share** and select **Export Premiere Pro XML**.
3. In Premiere Pro, choose **File > Import** and select the downloaded XML file.
4. Relink any offline source media, review the sequence, then use **File > Save As** to save a native Premiere Pro project (`.prproj`).

The sequence follows the timeline's displayed clip order, places clips back to back, and uses each clip's trim start and duration. It carries the frame rate, aspect ratio, and resolution currently selected in Export Settings. When audio export is enabled, audio clips and video clips with audio are placed on a separate audio track.

## Relinking browser uploads

The browser cannot provide Premiere Pro with its temporary `blob:` media URLs. For those assets, the XML uses placeholder paths under `C:\MediaForgeAI-Relink`. Keep the original source files available and use Premiere Pro's **Link Media** dialog to locate them after import. The XML contains edit metadata only; it does not copy or upload source files.

## Captions

Import the matching `.srt` file into Premiere Pro as media, then drag it from the Project panel onto the sequence to create a caption track. The project export does not embed captions into the XML sequence.

Adobe's current Premiere Pro guidance lists FCP7 XML as an import path and supports SRT caption sidecars:

- [Migrate projects from Final Cut Pro to Premiere Pro](https://helpx.adobe.com/mena_ar/premiere-pro/how-to/migrate-from-final-cut-pro.html)
- [Import caption files from third-party services](https://helpx.adobe.com/premiere/desktop/add-text-images/insert-captions/import-caption-file-from-third-party-service.html)
