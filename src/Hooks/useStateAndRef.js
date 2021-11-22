import { useState, useRef } from 'react';

export default function useStateAndRef(initialvalue) {
  const [value, setValue] = useState(initialvalue);
  const ref = useRef(null);
  return [value, setValue, ref];
}
