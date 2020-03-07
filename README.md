# Personal Website

Using React, Styled-Components and i18next

Run with ```yarn start```
Publish to static html with ```yarn build```

The translation files are encrypted, because I don't necessarily want the content indexed by google forever.

Decrypt with:
```gpg --decrypt translation.json.asc > translation.json```
Encrypt with:
```gpg --encrypt --sign --armor -r bastien@pontet.eu -u 1CDF9381070DC2FC7F8833332D9281AF74DD8257 translation.json```
