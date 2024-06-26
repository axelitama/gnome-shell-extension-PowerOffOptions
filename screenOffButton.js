import * as PopupMenu from 'resource:///org/gnome/shell/ui/popupMenu.js';
import GLib from 'gi://GLib';

export default class ScreenOffButton {
    constructor(systemMenu) {
        this._button = null;
        this._handler = null;
        this._systemMenu = systemMenu;
    }

    addButton(position) {
        if(this._button != null || this._button != undefined)
            return;
        this._button = new PopupMenu.PopupMenuItem('Screen Off');
        this._handler = this._button.connect(
            'activate',
            () => this._execute()
        );

        this._systemMenu._systemItem.menu.addMenuItem(
            this._button,
            position
        );
    }

    _execute() {
        GLib.spawn_command_line_async('xset dpms force off');
    }

    removeButton() {
        if(this._button !== undefined && this._button !== null) {
            this._button.disconnect(this._handler);
            this._button.destroy();
        }

        this._button = null;
        this._handler = null;
    }

}
