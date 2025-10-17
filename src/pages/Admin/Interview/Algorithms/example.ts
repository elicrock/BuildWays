type Identity = {
  length: number;
};

function identity<T extends Identity>(arg: T): void {
  console.log(arg.length);
}

identity({ length: 42 });
identity([1, 2, 3, 4, 5]);
identity('very long string');
