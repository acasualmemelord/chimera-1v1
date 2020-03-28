'use babel';

import Chimera1v1View from './chimera-1v1-view';
import { CompositeDisposable } from 'atom';

export default {

  chimera1v1View: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.chimera1v1View = new Chimera1v1View(state.chimera1v1ViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.chimera1v1View.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'chimera-1v1:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.chimera1v1View.destroy();
  },

  serialize() {
    return {
      chimera1v1ViewState: this.chimera1v1View.serialize()
    };
  },

  toggle() {
    console.log('Chimera1v1 was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
