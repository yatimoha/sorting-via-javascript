type SortingSectionProps = {
  sortingFunction: () => number[];
  children: JSX.Element;
}
export const SortingSection = ({sortingFunction, children}: SortingSectionProps) => {
  return (
    <section>
      {children}
      <textarea rows={9} defaultValue={sortingFunction.toString()}></textarea>
      <pre>
        Result: [{sortingFunction().join(', ')}]
      </pre>
      <pre>
        Complexity: O(n<sup>2</sup>)
      </pre>
    </section>
  );
};
