export class Path {
  from: string;

  to: string;

  constructor(from: string, to: string) {
    this.from = from;
    this.to = to;
  }
}

export function parsePath(chunk: string) {
  const paths = chunk.split('\n');
  const result = [];
  for (let i = 0; i < paths.length; i++) {
    const fromAndTo = paths[i].split('-');
    result.push(new Path(fromAndTo[0], fromAndTo[1]));
  }
  return result;
}
