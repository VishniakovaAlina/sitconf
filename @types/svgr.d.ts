declare type SvgComponent = React.StatelessComponent<React.SVGAttributes<SVGElement>>;

declare module '*.svg' {
  const value: SvgComponent;
  export default value;
}

declare module '*.svg?url' {
  const content: string;
  export default content;
}
