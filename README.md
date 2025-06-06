# Power Off Options

Power Off Options is a GNOME Shell extension that adds two additional buttons to the Power Off dialog:

- **Turn Off Screen** — Instantly powers off the monitor (only works in X11, does not support Wayland).
- **Hibernate** — Suspends the system to disk.


<p align="center">
  <img src="resources/screenshot.png" alt="screenshot"/>
</p>


## Requirements

- GNOME Shell;

For powering off the screen:
- X11 windowing system.

For Hibernation:
- hibernation enabled and configured in the system.

## Installation

Install from the GNOME Extensions website:  
<https://extensions.gnome.org/extension/8189/power-off-options/> 

Otherwise it can be installed manually:
1. download or clone this repository;
2. move into the extension directory;
3. run:
    - `make` to install the extension;
    - `make uninstall` to uninstall the extension;
4. restart GNOME Shell to apply the changes (e.g. log out and log back in).

## Preferences

You can enable or disable each button individually using the built-in preferences window:

```bash
gnome-extensions prefs power-off-options@axelitama.github.io
```

The same window is also accessible from the **GNOME Extensions** application.
