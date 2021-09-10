const sortByField = (field: string, sortOrder: string) => {

    const key = function(x: any) {
        return x[field]
      };

    const invert = sortOrder === 'asc' ? 1 : -1;

    return function(a: any, b: any) {
      return a = key(a), b = key(b), invert * (((a > b) as any) - ((b > a) as any));
    }
};

export { sortByField };
