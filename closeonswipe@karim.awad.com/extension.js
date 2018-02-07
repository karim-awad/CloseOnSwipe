const St = imports.gi.St;
const EdgeDragAction = imports.ui.edgeDragAction;
const Shell = imports.gi.Shell;
const Lang = imports.lang;

let gesture = new EdgeDragAction.EdgeDragAction(St.Side.TOP, Shell.ActionMode.NORMAL);

function init() {}

function enable() {
    gesture.connect('activated', Lang.bind(this, function() {
	//close window
	global.display.focus_window.delete(global.get_current_time());
    }));

    global.stage.add_action(gesture);
}

function disable() {
    global.stage.remove_action(gesture);
}
