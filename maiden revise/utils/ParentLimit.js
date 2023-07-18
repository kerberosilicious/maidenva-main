'use strict';

class ParentLimit {
  constructor(parent) {
    this.parent = parent;
  }

  limit() {
    if (this.parent.childElementCount > 2) {
      this.parent.removeChild(this.parent.firstElementChild);
    }
  }
}

export default ParentLimit;
