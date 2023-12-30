export const addZeroPrefixToNumber = (n: number) => (n < 10 ? `0${n}` : `${n}`);

export const generateNumberArray = (quantity: number): number[] => {
  return Array.from({ length: quantity }, (_, index) => index);
};

export function addClassToChildrenById(parentId: string, className: string) {
  const parentElement = document.getElementById(parentId);

  if (parentElement) {
    const childNodes = parentElement.childNodes;

    childNodes.forEach((childNode) => {
      if (childNode.nodeType === 1) {
        const elementNode = childNode as HTMLElement;
        elementNode.classList.add(className);
      }
    });
  } else {
    console.error(`Element with ID "${parentId}" not found.`);
  }
}

export function removeClassFromChildrenById(parentId: string, className: string) {
  var parentElement = document.getElementById(parentId);

  if (parentElement) {
      var children = parentElement.children;

      for (var i = 0; i < children.length; i++) {
          children[i].classList.remove(className);
      }
  } else {
      console.error("Parent element with ID '" + parentId + "' not found.");
  }
}
