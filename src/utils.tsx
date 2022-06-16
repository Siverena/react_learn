const getClassNames = (
  style: { [key: string]: string },
  classNames: string[]
) => {
  let styles = '';
  classNames.forEach((c) => {
    styles += ' ' + style[c];
  });
  return styles;
};

export default getClassNames;
