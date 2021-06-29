interface IData<T> {
  [key: string]: T;
}

class Entries {
  public constructor(private readonly data: IData<string[]>) {}

  private concat(): string[] {
    return Object.values(this.data).flat(Infinity) as string[];
  }

  public init(): IData<number> {
    return this.concat().reduce((acc, el) => {
      acc[el.toLocaleLowerCase()] = (acc[el.toLocaleLowerCase()] || 0) + 1;
      return acc;
    }, {} as IData<number>);
  }
}

const result = new Entries({
  moscow: ["ivan", "john"],
  spb: ["larisa", "naTalia", "ivan"],
  kursk: ["john", "natalia", "ivaN"],
});

console.log(result.init());
